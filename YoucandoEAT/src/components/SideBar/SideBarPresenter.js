import React from "react";
import styled from "styled-components";

const SideBarBlock = styled.div`
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
  height: 100%;
  width: 65%;
  background: tomato;
  z-index: 11;
`;

function SideBarPresenter() {
  return (
    <>
      <SideBarBlock></SideBarBlock>
    </>
  );
}

export default SideBarPresenter;
