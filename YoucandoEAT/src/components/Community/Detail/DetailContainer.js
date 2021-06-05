import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Dummy from "../../../assets/Lenna.png";

// import axios from "axios";
// import ipObj from "../../../key";

function DetailContainer() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  // const { pid } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${ipObj.ip}/postDetail/${pid}`)
  //     .then((response) => {
  //       //post, comment, user join해서 한번에 정보를 받음
  //       setPost(response.data.results);
  //     })
  //     .catch((err) => {
  //       console.error(err.response);
  //     });
  // }, [pid, dispatch]);

  // 더미 데이터
  useEffect(() => {
    setPost({
      userImg: Dummy,
      writer: "Lenna",
      date: "2021-06-06 19:43",
      title: "Dummy Title",
      postImg: Dummy,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: [
        {
          id: 0,
          writerImg: Dummy,
          writer: "Lenna",
          contents: "short contents",
          date: "2021-06-06 19:43",
        },

        {
          id: 0,
          writerImg: Dummy,
          writer: "Lenna",
          contents:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

          date: "2021-06-06 19:43",
        },
      ],
    });
  }, []);

  const clickEnter = () => {
    console.log(comment);

    if (comment === "") {
      setModal(true);
      return;
    }

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

  console.log(post);

  return (
    <>
      <DetailPresenter
        post={post}
        onChangeInputs={onChangeInputs}
        clickEnter={clickEnter}
        comment={comment}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
}

export default DetailContainer;
