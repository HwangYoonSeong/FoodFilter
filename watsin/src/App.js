// import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

function App() {
  const axios = require("axios");
  const qs = require("querystring");

  const [source, setSource] = useState(null);
  const [result, setResult] = useState(null);
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
        setResult(JSON.stringify(response.data.result));
      })
      .catch((err) => {
        setResult(err.response.statusText);
      });
  };

  const papago = async () => {
    const url = "https://openapi.naver.com/v1/papago/n2mt";

    const params = qs.stringify({
      source: "ko",
      target: "en",
      text: "만나서 반갑습니다.",
    });

    const config = {
      baseURL: "https://openapi.naver.com/v1/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Naver-Client-Id": "5bEorb5s8e9aegf228eq",
        "X-Naver-Client-Secret": "Ub_lBWUQZW",
      },
    };

    const response = await axios.post(url, params, config);
    console.log(response);

    // const source = "ko";
    // const target = "en";
    // const text = "만나서 반갑습니다.";

    // axios
    //   .post(
    //     `https://openapi.naver.com/v1/papago/n2mt?source=${source}&target=${target}&text=${text}`,
    //     {
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //         "X-Naver-Client-Id": "5bEorb5s8e9aegf228eq",
    //         "X-Naver-Client-Secret": "Ub_lBWUQZW",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
      <label htmlFor="capture">Capture</label>
      <input
        id="capture"
        style={{ margin: "10px" }}
        accept="image/*"
        type="file"
        capture="environment"
        onChange={onChange}
      />

      <div style={{ width: "80%", marginTop: "1rem" }}>
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
      <div>
        <div className="box" style={{ width: "100%", height: "300px" }}>
          <h1>
            <span>Crop</span>

            <button style={{ marginLeft: "1rem" }} onClick={getCropData}>
              Crop Image
            </button>

            <button style={{ marginLeft: "1rem" }} onClick={papago}>
              Translate
            </button>

            {source && (
              <button style={{ marginLeft: "1rem" }} onClick={kakaoOCR}>
                Detect
              </button>
            )}
          </h1>
          {cropData && (
            <img style={{ width: "100%" }} src={cropData} alt="cropped" />
          )}
        </div>
        <div>{result}</div>
      </div>
      <br style={{ clear: "both" }} />
    </div>
  );
}

export default App;
