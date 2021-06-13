import React from "react";
import styled from "styled-components";
import { RiErrorWarningLine } from "react-icons/ri";
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
const Exception = styled.p`
text-align:center;
margin-top: 2rem;
`;

const ExcptTxt = styled.p`
  fontSize: 17px;
  color: gray;
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
        {result ? (<p style={{ fontSize: "24px" }}>{result}</p>)
          : (<Exception>
            <RiErrorWarningLine style={{ color: "#adb5bd" }} size="4rem" />
            <ExcptTxt>Can't detect</ExcptTxt>
          </Exception>)

        }


        <Title>Translated</Title>
        {translatedMenu ? (<p style={{ fontSize: "24px" }}>{translatedMenu}</p>)
          : (<Exception>
            <RiErrorWarningLine style={{ color: "#adb5bd" }} size="4rem" />
            <ExcptTxt>Can't translate</ExcptTxt>
          </Exception>)
        }


        <Title>Ingredients</Title>
        <IngredientsContainer>

          {searchedIngrd.length ? (searchedIngrd.map((ingrd, index) => (
            <Ingrd key={index} danger={ingrd.danger}>{ingrd.translated}</Ingrd>
          ))) : (<Exception style={{ marginLeft: "-1rem" }}>
            <RiErrorWarningLine style={{ color: "#adb5bd" }} size="4rem" />
            <ExcptTxt>No food ingredients found</ExcptTxt>
          </Exception>)}
        </IngredientsContainer>
      </Container>
    </>
  );
}

export default React.memo(LogicPresenter);
