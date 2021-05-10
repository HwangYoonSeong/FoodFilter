import React from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";

function DetailContainer() {
  const { pid } = useParams();

  console.log(pid);

  return (
    <>
      <DetailPresenter />
    </>
  );
}

export default DetailContainer;
