import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";

import axios from "axios";
import ipObj from "../../../key"

function DetailContainer ({ history, setSearchMode }) {
  const { pid } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    setSearchMode(true);
    axios
      .get(`${ipObj.ip}/postDetail/${pid}`)
      .then((response) => {//post, comment, user join해서 한번에 정보를 받음 
        setPost(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });

  }, [pid, setSearchMode]);


  const goBack = () => {
    setSearchMode(false);
    history.goBack();
  };

  return (
    <>
      <DetailPresenter post={post} goBack={goBack} />
    </>
  );
}

export default DetailContainer;
