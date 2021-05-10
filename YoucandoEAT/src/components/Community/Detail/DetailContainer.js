import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";

function DetailContainer() {
  const { pid } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(
      `페이지 고유 아이디인 pid : ${pid}를 서버로 보내어 적절한 게시물을 받아오는 통신 수행`
    );
    setPost("해당페이지");
  }, [pid]);

  return (
    <>
      <DetailPresenter post={post} />
    </>
  );
}

export default DetailContainer;
