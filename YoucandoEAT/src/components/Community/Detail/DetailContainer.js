import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";
import ipObj from "../../../key";

function DetailContainer () {
  const uid = useSelector((state) => state.uid);
  const { pid } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isComment, checkComment] = useState(false);
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postDetail?pid=${pid}`)
      .then((response) => {
        //post, comment, user join해서 한번에 정보를 받음
        console.log("url:", "GET /postDetail?pid", "\nstatus:", response.status, "\nstatusText:", response.statusText);
        setPost(response.data.results);
        setComments(response.data.results.comments);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [pid, isComment]);

  const clickEnter = () => {
    setComment("");

    axios
      .post(`${ipObj.ip}/commentInput`, { "pid": pid, "uid": uid, "contents": comment }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("url:", "POST /commentInput", "\nstatus:", response.status, "\nstatusText:", response.statusText);
        checkComment(!isComment);

      })
      .catch((err) => {
        console.error(err.response);
      });
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
        comments={comments}
      />
    </>
  );
}

export default DetailContainer;
