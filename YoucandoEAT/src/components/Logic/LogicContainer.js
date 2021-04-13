import React, { useState, useEffect } from "react";
import LogicPresenter from "./LogicPresenter";

import axios from "axios";

function LogicContainer({ location }) {
  const resizeImage = location.state.resizeImage;
  const croppedImage = location.state.croppedImage;

  let [result, setResult] = useState(null);

  const kakaoOCR = () => {
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

  useEffect(() => {
    console.log("in!");
    kakaoOCR();
  }, [kakaoOCR]);

  return (
    <>
      <LogicPresenter croppedImage={croppedImage} result={result} />
    </>
  );
}

export default LogicContainer;
