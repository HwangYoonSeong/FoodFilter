import React, { useState } from "react";
import CapturePresenter from "./CapturePresenter";

function CaptureContainer({ history, location }) {
  const image = location.state.image;
  const [cropper, setCropper] = useState(null);

  const dataURItoBlob = (dataURI) => {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const getResizeFile = (image, file) => {
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
    var tmpResizeImage = dataURItoBlob(canvas.toDataURL("image/png")); //dataURLtoBlob 부분은 이전 포스팅 참조
    return tmpResizeImage;
  };

  const getData = () => {
    if (window.confirm("Are you sure you want to select the menu?")) {
      // Croppping
      let file = dataURItoBlob(
        cropper.getCroppedCanvas().toDataURL("image/png")
      );

      let img = new Image();
      img.src = cropper.getCroppedCanvas().toDataURL("image/png");

      // Resizing
      img.onload = function () {
        history.push({
          pathname: "/logic",
          state: {
            resizeImage: getResizeFile(img, file),
            croppedImage: img.src,
          },
        });
      };
    } else return;
  };

  return (
    <>
      <CapturePresenter
        image={image}
        setCropper={setCropper}
        getData={getData}
      />
    </>
  );
}

export default CaptureContainer;
