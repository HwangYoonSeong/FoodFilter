import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import ipObj from "../../../key";

function DetailContainer() {
  const dispatch = useDispatch();
  const { pid } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postDetail/${pid}`)
      .then((response) => {
        //post, comment, user join해서 한번에 정보를 받음
        setPost(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [pid, dispatch]);

  const clickEnter = () => {
    console.log(comment);
    setComment("");
    // axios
    //   .post(`${ipObj.ip}/commentInput`, { "pid": pid, "writerId": uid, "comment": comment }, {
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
  };

  const onChangeInputs = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <DetailPresenter
        post={post}
        onChangeInputs={onChangeInputs}
        clickEnter={clickEnter}
        comment={comment}
      />
    </>
  );
}

export default DetailContainer;
