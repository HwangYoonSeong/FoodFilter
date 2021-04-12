import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

function MainContainer({ history }) {

  // onChange 이벤트 발생 시
  // 사용자에게 이미지를 출력하기 위하여 이미지 데이터 가공
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) files = e.dataTransfer.files;
    else if (e.target) files = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const image = reader.result

      history.push({
        pathname: '/capture',
        state: { image }
      })
    };


  };

  return (
    <>
      <MainPresenter onChange={onChange} />
    </>
  );
}

export default MainContainer;
