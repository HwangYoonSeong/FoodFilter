import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

function App() {
  const [source, setSource] = useState(null);
  const [result, setResult] = useState("");
  const [trresult, setTrresult] = useState("");
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState(null);
  const [cropper, setCropper] = useState();

  function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  function getThumbFile(image, file) {
    var canvas = document.createElement("canvas");

    var comp_size = 102400; //100KB (썸네일 작업 결과물 사이즈, 50~200KB 수준으로 압축됨)
    var width = image.width;
    var height = image.height;
    var size = file.size;

    var ratio = Math.ceil(Math.sqrt(size / comp_size, 2));
    width = image.width / ratio;
    height = image.height / ratio;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    var tmpThumbFile = dataURItoBlob(canvas.toDataURL("image/png")); //dataURLtoBlob 부분은 이전 포스팅 참조
    return tmpThumbFile;
  }

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
      .then((response) => {
        const menu = response.data.result
          .map((el) => el.recognition_words[0])
          .join(" ");
        setResult(menu);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const papago = () => {
    axios
      .get(`http://192.168.35.39:3001/translate/${result}`)
      .then((res) => {
        setTrresult(res.data.message.result.translatedText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const getCropData = () => {
    setCropData(cropper.getCroppedCanvas().toDataURL("image/png"));
    console.log(
      dataURItoBlob(cropper.getCroppedCanvas().toDataURL("image/png"))
    );
    let file = dataURItoBlob(cropper.getCroppedCanvas().toDataURL("image/png"));

    let img = new Image();
    img.src = cropper.getCroppedCanvas().toDataURL("image/png");
    img.onload = function () {
      let thumbFile = getThumbFile(img, file);
      setSource(thumbFile);
    };
  };

  return (
    <div>
      <label htmlFor="capture" style={{ margin: "1rem 0 0 1rem" }}>
        Capture
      </label>
      <input
        id="capture"
        accept="image/*"
        type="file"
        capture="environment"
        onChange={onChange}
      />

      <div className="imageContainer" style={{ width: "80%", margin: "1rem" }}>
        <Cropper
          style={{ height: "100%", width: "100%" }}
          zoomTo={2}
          initialAspectRatio={1}
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={true}
          responsive={true}
          autoCropArea={1}
          zoomable={false}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>

      <h1 style={{ marginLeft: "1rem" }}>Crop</h1>

      <div style={{ margin: "0 0 1rem 1rem" }} className="buttonContainer">
        <button onClick={getCropData}>Crop Image</button>

        {source && (
          <button style={{ marginLeft: "1rem" }} onClick={kakaoOCR}>
            Detect
          </button>
        )}

        {result && (
          <button style={{ marginLeft: "1rem" }} onClick={papago}>
            Translate
          </button>
        )}
      </div>

      {cropData && (
        <div style={{ margin: "0 1rem 0 1rem" }} className="croppedContainer">
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </div>
      )}

      <h1 style={{ margin: "1rem 0 0 1rem" }}>탐지 결과 : {result}</h1>
      <h1 style={{ margin: "1rem 0 0 1rem" }}>번역 결과 : {trresult}</h1>
    </div>
  );
}

export default App;
