import React, { useState, useEffect, useCallback } from "react";
import LogicPresenter from "./LogicPresenter";

import axios from "axios";

function LogicContainer({ location }) {
  const resizeImage = location.state.resizeImage;
  const croppedImage = location.state.croppedImage;

  let [result, setResult] = useState(null);

  const kakaoOCR = useCallback(() => {
    let form = new FormData();
    form.append("image", resizeImage);

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
        console.error(err.response);
      });
  }, [resizeImage]);

  const getData = () => {
    console.log("서버와 연결!");
  };

  useEffect(() => {
    kakaoOCR();
    getData();
  }, [kakaoOCR]);

  return (
    <>
      <LogicPresenter croppedImage={croppedImage} result={result} />
    </>
  );
}

export default React.memo(LogicContainer);
