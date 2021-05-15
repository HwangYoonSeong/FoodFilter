import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";

import axios from "axios";
import ipObj from "../../../key"

function DetailContainer () {
  const { pid } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postDetail/${pid}`)
      .then((response) => {
        setPost(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });

  }, [pid]);

  return (
    <>
      <DetailPresenter post={post} />
    </>
  );
}

export default DetailContainer;
