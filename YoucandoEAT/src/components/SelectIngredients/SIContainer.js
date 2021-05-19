import React, { useState, useEffect, useCallback } from "react";
import SIPresenter from "./SIPresenter";

//Food image
import abaloneImg from "./FoodImg/abaloneImg.png";
import beefImg from "./FoodImg/beefImg.png";
import buckwheatImg from "./FoodImg/buckwheatImg.png";
import chickenImg from "./FoodImg/chickenImg.png";
import crabImg from "./FoodImg/crabImg.png";
import eggImg from "./FoodImg/eggImg.png";
import forkImg from "./FoodImg/forkImg.png";
import mackerelImg from "./FoodImg/mackerelImg.png";
import milkImg from "./FoodImg/milkImg.png";
import musselImg from "./FoodImg/musselImg.png";
import oysterImg from "./FoodImg/oysterImg.png";
import peachImg from "./FoodImg/peachImg.png";
import peanutImg from "./FoodImg/peanutImg.png";
import shellfishImg from "./FoodImg/shellfishImg.png";
import shrimpImg from "./FoodImg/shrimpImg.png";
import soybeanImg from "./FoodImg/soybeanImg.png";
import squidImg from "./FoodImg/squidImg.png";
import sulfurousacidImg from "./FoodImg/sulfurousacidImg.png";
import tomatoImg from "./FoodImg/tomatoImg.png";
import walnutImg from "./FoodImg/walnutImg.png";
import wheatImg from "./FoodImg/wheatImg.png";

import { connect } from "react-redux";

function SIContainer({ uidState }) {
  const [ingrdList, setIngrdList] = useState([]);
  const [userInfo, setUserInfo] = useState(0);

  const save = useCallback(() => {
    // 서버로 유저의 알러지정보인 userInfo를
    // 10진수로 전송
    console.log(
      `유저 uid : ${uidState}의 userInfo : ${userInfo}를 서버로 전송`
    );
  }, [uidState, userInfo]);

  const onToggle = useCallback((id) => {
    setIngrdList((ingrdList) =>
      ingrdList.map((ingrd) =>
        ingrd.id === id ? { ...ingrd, checked: !ingrd.checked } : ingrd
      )
    );
  }, []);

  useEffect(() => {
    // 이 컴포넌트 마운트 시
    // 서버에서 받은 10진수나 2진수를
    // 가공하여 setIngrdList 함수 호출하여
    // ingrdList 를 초기화
    setIngrdList([
      {
        name: "abalone",
        image: abaloneImg,
        checked: false,
        id: 0,
      },
      {
        name: "beef",
        image: beefImg,
        checked: false,
        id: 1,
      },
      {
        name: "buckwheat",
        image: buckwheatImg,
        checked: false,
        id: 2,
      },
      {
        name: "chicken",
        image: chickenImg,
        checked: false,
        id: 3,
      },
      {
        name: "crab",
        image: crabImg,
        checked: false,
        id: 4,
      },
      {
        name: "egg",
        image: eggImg,
        checked: false,
        id: 5,
      },
      {
        name: "fork",
        image: forkImg,
        checked: false,
        id: 6,
      },
      {
        name: "mackerel",
        image: mackerelImg,
        checked: false,
        id: 7,
      },
      {
        name: "milk",
        image: milkImg,
        checked: false,
        id: 8,
      },
      {
        name: "mussel",
        image: musselImg,
        checked: false,
        id: 9,
      },
      {
        name: "oyster",
        image: oysterImg,
        checked: false,
        id: 10,
      },
      {
        name: "peach",
        image: peachImg,
        checked: false,
        id: 11,
      },
      {
        name: "peanut",
        image: peanutImg,
        checked: false,
        id: 12,
      },
      {
        name: "shellfish",
        image: shellfishImg,
        checked: false,
        id: 13,
      },
      {
        name: "shrimp",
        image: shrimpImg,
        checked: false,
        id: 14,
      },
      {
        name: "soybean",
        image: soybeanImg,
        checked: false,
        id: 15,
      },
      {
        name: "squid",
        image: squidImg,
        checked: false,
        id: 16,
      },

      {
        name: "sulfurousacid",
        image: sulfurousacidImg,
        checked: false,
        id: 18,
      },
      {
        name: "tomato",
        image: tomatoImg,
        checked: false,
        id: 19,
      },
      {
        name: "walnut",
        image: walnutImg,
        checked: false,
        id: 20,
      },
      {
        name: "wheat",
        image: wheatImg,
        checked: false,
        id: 21,
      },
    ]);
  }, []);

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

function stateTOprops(state) {
  return {
    uidState: state.uidReducer,
  };
}

export default connect(stateTOprops)(React.memo(SIContainer));
