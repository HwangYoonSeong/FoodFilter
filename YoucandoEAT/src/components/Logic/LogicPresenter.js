import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const Title = styled.h1`
  color: #2b8a3e;
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

const Ingrd = styled.p`
 fontSize: 17px;
 color: ${(props) => (props.danger ? "red" : "black")};
`;
function LogicPresenter ({ translatedMenu, searchedIngrd, croppedImage, result }) {
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
        <p style={{ fontSize: "24px" }}>{translatedMenu}</p>

        <Title>Ingredients</Title>
        <IngredientsContainer>

          {searchedIngrd ? (searchedIngrd.map((ingrd, index) => (
            <Ingrd key={index} danger={ingrd.danger}>{ingrd.translated}</Ingrd>
          ))) : null}
        </IngredientsContainer>
      </Container>
    </>
  );
}

export default React.memo(LogicPresenter);
