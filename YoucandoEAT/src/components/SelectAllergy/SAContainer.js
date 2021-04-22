import React, { useState } from "react";
import SAPresenter from "./SAPresenter";
// import axios from "axios";

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

function SAContainer() {
  let filterZero = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const [filter, setFilter] = useState(filterZero);
  const [isClick, setIsClick] = useState(false);
  let AllergyList = [
    {
      name: "abalone",
      image: abaloneImg,
      checked: false,
    },
    {
      name: "beef",
      image: beefImg,
      checked: false,
    },
    {
      name: "buckwheat",
      image: buckwheatImg,
      checked: false,
    },
    {
      name: "chicken",
      image: chickenImg,
      checked: false,
    },
    {
      name: "crab",
      image: crabImg,
      checked: false,
    },
    {
      name: "egg",
      image: eggImg,
      checked: false,
    },
    {
      name: "fork",
      image: forkImg,
      checked: false,
    },
    {
      name: "mackerel",
      image: mackerelImg,
      checked: false,
    },
    {
      name: "milk",
      image: milkImg,
      checked: false,
    },
    {
      name: "mussel",
      image: musselImg,
      checked: false,
    },
    {
      name: "oyster",
      image: oysterImg,
      checked: false,
    },
    {
      name: "peach",
      image: peachImg,
      checked: false,
    },
    {
      name: "peanut",
      image: peanutImg,
      checked: false,
    },
    {
      name: "shellfish",
      image: shellfishImg,
      checked: false,
    },
    {
      name: "shrimp",
      image: shrimpImg,
      checked: false,
    },
    {
      name: "soybean",
      image: soybeanImg,
      checked: false,
    },
    {
      name: "squid",
      image: squidImg,
      checked: false,
    },
    {
      name: "fork",
      image: forkImg,
      checked: false,
    },
    {
      name: "sulfurousacid",
      image: sulfurousacidImg,
      checked: false,
    },
    {
      name: "tomato",
      image: tomatoImg,
      checked: false,
    },
    {
      name: "walnut",
      image: walnutImg,
      checked: false,
    },
    {
      name: "wheat",
      image: wheatImg,
      checked: false,
    },
  ];
  const [AL, setAL] = useState(AllergyList);

  const itemClick = (idx) => {
    const selectedFood = AL[idx];
    const nextAL = [...AL];

    nextAL[idx] = {
      ...selectedFood,
      checked: !selectedFood.checked,
    };

    setAL(nextAL);
    setIsClick(!isClick);

    const nextFilter = [...filter];
    nextFilter[idx] = (nextFilter[idx] + 1) % 2;
    setFilter(nextFilter);
  };

  const save = () => {
    console.log("서버에 저장");
    // axios
    //     .post("http://192.168.35.168:3001/savefilter", { filter: parseInt(filter.join(''), 2) }, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.error(err.response);
    //     });
  };
  return (
    <>
      <SAPresenter AllergyList={AL} itemClick={itemClick} save={save} />
    </>
  );
}

export default SAContainer;
