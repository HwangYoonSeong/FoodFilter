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
  margin: 1rem 1rem 0 1rem;
  border-bottom: 1px solid black;
`;

const DetectedImgContainer = styled.div`
  margin: 0 auto;
  width: 85%;
`;

const IngredientsContainer = styled.div`
  text-align: left;
  margin-left: 1rem;
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
        <p style={{ fontSize: "24px" }}>Dummy</p>

        <Title>Ingredients</Title>
        <IngredientsContainer>
          <p style={{ fontSize: "17px" }}>dummy1</p>
          <p style={{ fontSize: "17px" }}>dummy2</p>
          <p style={{ fontSize: "17px" }}>dummy3</p>
        </IngredientsContainer>
      </Container>
    </>
  );
}

export default React.memo(LogicPresenter);
