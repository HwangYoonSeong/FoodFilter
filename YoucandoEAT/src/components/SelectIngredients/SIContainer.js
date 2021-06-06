import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import SIPresenter from "./SIPresenter";
import axios from "axios";
import ipObj from "../../key"

function SIContainer () {
  const uid = useSelector((state) => state.uid);
  const [ingrdList, setIngrdList] = useState([]);
  const [filterBit, setFilterBit] = useState(0);

  const save = useCallback(() => {
    // 서버로 유저의 알러지정보인 userInfo를
    // 10진수로 전송
    axios
      .post(`${ipObj.ip}/filterBit`, { "filterBit": filterBit, "uid": uid }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("url:", "POST /filterBit", "\nstatus:", response.status, "\nstatusText:", response.statusText);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [uid, filterBit]);

  const onToggle = useCallback((index) => {
    setIngrdList((ingrdList) =>
      ingrdList.map((ingrd, i) =>
        i === index ? { ...ingrd, checked: !ingrd.checked } : ingrd
      )
    );
  }, []);

  // 로그인한 경우 uid로 해당 사용자의 filterBit로 allergyList 초기화
  // 그렇지 않은 경우 서버에서 받은 allergyList 그대로 표시
  useEffect(() => {

    if (uid) {
      axios
        .get(`${ipObj.ip}/ingredientList?uid=${uid}`)
        .then((response) => {
          console.log("url:", "GET /ingredientList?uid", "\nstatus:", response.status, "\nstatusText:", response.statusText);
          setIngrdList(response.data.results);
        })
        .catch((err) => {
          console.error(err.response);
        });
    }


  }, [uid]);

  useEffect(() => {
    setFilterBit(
      parseInt(
        ingrdList.slice(0).reverse().map((allergy) => (allergy.checked ? 1 : 0)).join(""),
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
