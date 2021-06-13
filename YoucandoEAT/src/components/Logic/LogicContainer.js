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
  const [searchedIngrd, setSrchdIngrd] = useState([]);
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
        console.log("url:", "POST /kakaoAPI/ocr", "\nstatus:", response.status, "\nstatusText:", response.statusText);
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
          console.log("url:", "GET /foodSearch?result&uid", "\nstatus:", response.status, "\nstatusText:", response.statusText);
          var results = response.data.results;
          var toTranslate = [];
          toTranslate.push(result);
          results.forEach(el => {
            toTranslate.push(el.ingredient);
          })
          axios
            .get(`${ipObj.ip}/translateFood?text=${toTranslate.join(',')}`)
            .then((response) => {
              console.log("url:", "GET /translate", "\nstatus:", response.status, "\nstatusText:", response.statusText);

              var translated = response.data.message.result.translatedText.split(', ');
              console.log(translated);
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

  }, [result, uid]);

  useEffect(() => {
    kakaoOCR();
    getData();
  }, [kakaoOCR, uid, getData]);

  return (
    <>
      <LogicPresenter translatedMenu={translatedMenu} searchedIngrd={searchedIngrd} croppedImage={croppedImage} result={result} />
    </>
  );
}

export default React.memo(LogicContainer);
