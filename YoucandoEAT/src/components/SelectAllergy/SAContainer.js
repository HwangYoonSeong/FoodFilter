import React from "react";
import SAPresenter from "./SAPresenter";

import abaloneImg from "./FoodImg/abaloneImg.png"
import beefImg from "./FoodImg/beefImg.png"
import buckwheatImg from "./FoodImg/buckwheatImg.png"
import chickenImg from "./FoodImg/chickenImg.png"
import crabImg from "./FoodImg/crabImg.png"
import eggImg from "./FoodImg/eggImg.png"
import forkImg from "./FoodImg/forkImg.png"
import mackerelImg from "./FoodImg/mackerelImg.png"
import milkImg from "./FoodImg/milkImg.png"
import musselImg from "./FoodImg/musselImg.png"
import oysterImg from "./FoodImg/oysterImg.png"
import peachImg from "./FoodImg/peachImg.png"
import peanutImg from "./FoodImg/peanutImg.png"
import shellfishImg from "./FoodImg/shellfishImg.png"
import shrimpImg from "./FoodImg/shrimpImg.png"
import soybeanImg from "./FoodImg/soybeanImg.png"
import squidImg from "./FoodImg/squidImg.png"
import sulfurousacidImg from "./FoodImg/sulfurousacidImg.png"
import tomatoImg from "./FoodImg/tomatoImg.png"
import walnutImg from "./FoodImg/walnutImg.png"
import wheatImg from "./FoodImg/wheatImg.png"


function SAContainer () {
    let AllergyList = [
        {
            name: "abalone",
            image: abaloneImg
        },
        {
            name: "beef",
            image: beefImg
        },
        {
            name: "buckwheat",
            image: buckwheatImg
        },
        {
            name: "chicken",
            image: chickenImg
        },
        {
            name: "crab",
            image: crabImg
        },
        {
            name: "egg",
            image: eggImg
        },
        {
            name: "fork",
            image: forkImg
        },
        {
            name: "mackerel",
            image: mackerelImg
        },
        {
            name: "milk",
            image: milkImg
        },
        {
            name: "mussel",
            image: musselImg
        },
        {
            name: "oyster",
            image: oysterImg
        },
        {
            name: "peach",
            image: peachImg
        },
        {
            name: "peanut",
            image: peanutImg
        },
        {
            name: "shellfish",
            image: shellfishImg
        },
        {
            name: "shrimp",
            image: shrimpImg
        },
        {
            name: "soybean",
            image: soybeanImg
        },
        {
            name: "squid",
            image: squidImg
        },
        {
            name: "fork",
            image: forkImg
        },
        {
            name: "sulfurousacid",
            image: sulfurousacidImg
        },
        {
            name: "tomato",
            image: tomatoImg
        },
        {
            name: "walnut",
            image: walnutImg
        },
        {
            name: "wheat",
            image: wheatImg
        },

    ]

    return (
        <>
            <SAPresenter AllergyList={AllergyList} />
        </>
    );
}

export default SAContainer;
