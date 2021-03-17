import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

function App () {
  const [source, setSource] = useState(null);
  const [img, setImg] = useState(null);
  const [result, setResult] = useState(null);

  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();


  function dataURItoBlob (dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  function getThumbFile (image, file) {
    var canvas = document.createElement("canvas");
    var base_size = 1024000; //1MB (썸네일 작업 유무 기준 사이즈)
    var comp_size = 102400; //100KB (썸네일 작업 결과물 사이즈, 50~200KB 수준으로 압축됨)
    var width = image.width;
    var height = image.height;
    var size = file.size;

    if (size > base_size) {
      var ratio = Math.ceil(Math.sqrt(size / comp_size, 2));
      width = image.width / ratio;
      height = image.height / ratio;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      var tmpThumbFile = dataURItoBlob(canvas.toDataURL("image/png")); //dataURLtoBlob 부분은 이전 포스팅 참조
      return tmpThumbFile;
    }
  }
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];

        if (file.size > 2000000) {//2MB
          let fReader = new FileReader();
          fReader.readAsDataURL(file);
          fReader.onload = (e) => {
            let img = new Image();
            img.src = fReader.result;
            img.onload = function () {
              let thumbFile = getThumbFile(img, file);
              setSource(thumbFile);
            };
          };
        } else {
          setSource(file);
        }

        const newURL = URL.createObjectURL(file);
        setImg(newURL);
      }
    }
  };

  const kakaoOCR = () => {
    let form = new FormData();
    form.append("image", source);

    axios
      .post("https://dapi.kakao.com/v2/vision/text/ocr", form, {
        headers: {
          Authorization: "KakaoAK e2e76efe2b926e912bf4d8ed8879f5f2",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setResult(res.data.result[0].recognition_words[0]);
      })
      .catch((err) => {
        setResult(err.response.statusText);
      });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////react-cropper/////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };


  const getCropData = () => {

    setCropData(cropper.getCroppedCanvas().toDataURL());

  };


  return (
    <div>
      {source && (
        <div className="imageContainer">
          <img src={img} alt={"snap"} style={{ width: "100%" }}></img>
        </div>
      )}
      {source && <button onClick={kakaoOCR}>Detect</button>}
      <input
        accept="image/*"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
      <div>{result}</div>
      <br></br>

      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
        <button>Use default img</button>
        <br />
        <br />
        <Cropper
          style={{ height: 400, width: "100%" }}
          zoomTo={2}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <div>
        <div className="box" style={{ width: "50%", float: "right" }}>
          <h1>Preview</h1>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div>
        <div
          className="box"
          style={{ width: "50%", float: "right", height: "300px" }}
        >
          <h1>
            <span>Crop</span>
            <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </div>
      </div>
      <br style={{ clear: "both" }} />




    </div>
  );
}

export default App;