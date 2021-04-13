import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  margin-left: 1rem;
  margin: 1rem 1rem 0 1rem;
  border-bottom: 1px solid black;
`;

const DetectedImgContainer = styled.div`
  margin: 0 auto;
  width: 85%;
`;

function LogicPresenter({ croppedImage, result }) {
  return (
    <>
      <Container>
        <DetectedImgContainer>
          <img
            src={croppedImage}
            alt="croppedImage"
            style={{ width: "100%" }}
          />
        </DetectedImgContainer>
        <Title>Detected</Title>
        <p style={{ fontSize: "24px" }}>{result}</p>

        <Title>Translated</Title>

        <Title>Ingredients</Title>
      </Container>
    </>
  );
}

export default LogicPresenter;
