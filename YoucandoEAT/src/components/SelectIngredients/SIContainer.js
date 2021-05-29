import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import SIPresenter from "./SIPresenter";

import axios from "axios";
import ipObj from "../../key"

function SIContainer () {
  const uid = useSelector((state) => state.uid);
  const [ingrdList, setIngrdList] = useState([]);
  const [userInfo, setUserInfo] = useState(0);

  const save = useCallback(() => {
    // 서버로 유저의 알러지정보인 userInfo를
    // 10진수로 전송
    console.log(`유저 uid : ${uid}의 userInfo : ${userInfo}를 서버로 전송`);
    // axios
    //   .post(`${ipObj.ip}/filterBit`, { "filterBit": userALInfo, "uid": uid }, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error(err.response);
    //   });
  }, [uid, userInfo]);

  const onToggle = useCallback((id) => {
    setIngrdList((ingrdList) =>
      ingrdList.map((ingrd) =>
        ingrd.id === id ? { ...ingrd, checked: !ingrd.checked } : ingrd
      )
    );
  }, []);

  // 로그인한 경우 uid로 해당 사용자의 filterBit로 allergyList 초기화
  // 그렇지 않은 경우 서버에서 받은 allergyList 그대로 표시
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/ingredientList/${uid}`)
      .then((response) => {
        setAllergyList(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });

  }, [uid]);

  useEffect(() => {
    setUserInfo(
      parseInt(
        ingrdList.map((allergy) => (allergy.checked ? 1 : 0)).join(""),
        2
      )
    );
  }, [ingrdList]);

  return (
    <>
      <SIPresenter ingrdList={ingrdList} save={save} onToggle={onToggle} />
    </>
  );
}

export default React.memo(SIContainer);
