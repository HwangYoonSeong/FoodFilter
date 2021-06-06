import React, { useState, useEffect, useCallback } from "react";
import LogicPresenter from "./LogicPresenter";
import axios from "axios";
import ipObj from "../../key"
import { useSelector } from "react-redux";

function LogicContainer ({ location }) {
  const uid = useSelector((state) => state.uid);
  const resizeImage = location.state.resizeImage;
  const croppedImage = location.state.croppedImage;

  const [result, setResult] = useState(null);
  const [searchedIngrd, setSrchdIngrd] = useState(null);
  const [translatedMenu, setTranslatedMenu] = useState(null);

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

  const getData = useCallback(() => {
    // 음식재료 요청 
    if (result) {
      axios
        .get(`${ipObj.ip}/foodSearch?result=${result}&uid=${uid}`)
        .then((response) => {

          var results = response.data.results;
          var toTranslate = [];
          toTranslate.push(result);
          results.forEach(el => {
            toTranslate.push(el.ingredient);
          })
          console.log(toTranslate);
          axios
            .get(`http://192.168.232.41:3001/translate/${toTranslate.join(',')}`)
            .then((response) => {
              // console.log(response.data.message.result.translatedText.slice(0, -1).split(', '))
              var translated = response.data.message.result.translatedText.slice(0, -1).split(', ');

              translated.slice(1).forEach((el, i) => {
                results[i].translated = el;
              })
              setTranslatedMenu(translated[0]);
              setSrchdIngrd(results);

            })
            .catch((err) => {
              console.error(err.response);
            });

        })
        .catch((err) => {
          console.error(err.response);
        });
    }

    // 서버 측에서 응답으로 오는 데이터의 구조를 정한 후에 
    // LogicPresenter에 데이터 전달 
  }, [result, uid]);

  useEffect(() => {
    kakaoOCR();
    getData();
    console.log(`접속 유저 uid : ${uid}`);
  }, [kakaoOCR, uid, getData]);

  return (
    <>
      <LogicPresenter translatedMenu={translatedMenu} searchedIngrd={searchedIngrd} croppedImage={croppedImage} result={result} />
    </>
  );
}

export default React.memo(LogicContainer);
