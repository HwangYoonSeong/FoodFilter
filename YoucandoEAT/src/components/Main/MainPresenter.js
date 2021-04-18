import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: -webkit-center;
  margin-top: 80px;
`;

const CircleBtn = styled.label`
  background: black;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  & + & {
    margin-top: 3rem;
  }
`;

function MainPresenter({ onChange }) {
  const LinkStyle = {
    color: "white",
    textDecorationLine: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };
  return (
    <>
      <Container>
        <CircleBtn>Select Your Allergy</CircleBtn>

        <CircleBtn htmlFor="capture">
          Capture
          <input
            id="capture"
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={onChange}
          />
        </CircleBtn>

        <CircleBtn>
          <Link to="/community" style={LinkStyle}>
            Community
          </Link>
        </CircleBtn>
      </Container>
    </>
  );
}

export default MainPresenter;
