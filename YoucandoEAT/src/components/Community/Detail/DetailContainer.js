import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";
import ipObj from "../../../key";

function DetailContainer() {
  const uid = useSelector((state) => state.uid);
  const { pid } = useParams();
  const [post, setPost] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postDetail?pid=${pid}`)
      .then((response) => {
        setPost(response.data.results);
        setComments(response.data.results.comments);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [pid]);

  const clickEnter = () => {
    if (input === "") return;
    setInput("");

    axios
      .post(
        `${ipObj.ip}/commentInput`,
        { pid: pid, uid: uid, contents: input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err.response);
      });

    axios
      .get(`${ipObj.ip}/postDetail?pid=${pid}`)
      .then((response) => {
        setComments(response.data.results.comments);
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const onChangeInputs = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <DetailPresenter
        post={post}
        onChangeInputs={onChangeInputs}
        clickEnter={clickEnter}
        input={input}
        comments={comments}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
}

export default DetailContainer;
