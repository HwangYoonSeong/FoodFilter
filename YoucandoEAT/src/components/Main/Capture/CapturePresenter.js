import React from "react";
import styled from "styled-components";

const Test = styled.h1`
  font-size: 125px;
`;

function CapturePresenter() {
  return (
    <>
      <Test>캡쳐 페이지에요!</Test>
    </>
  );
}

export default CapturePresenter;
