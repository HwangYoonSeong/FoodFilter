import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../../assets/background.jpg";
import { FiCamera } from "react-icons/fi";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";

const Container = styled.div`
  text-align: -webkit-center;
  background: #e9ecef;
`;

const BackgroundContainer = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
`;

const TextContainer = styled.div`
  font-size: 1.5rem;
  color: #b2f2bb;
  width: 100%;
  position: absolute;
  top: 10%;
`;

const CaptureBtn = styled.label`
  background: white;
  border-radius: 1rem;
  width: 90%;
  height: 200px;
  color: black;
  margin-top: 1rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const LinkBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LinkBtn = styled.button`
  background: white;
  border-radius: 1rem;
  height: 180px;
  color: black;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const BtnName = styled.p`
  margin: 0 0.5rem 0 0.5rem;
  color: #2b8a3e;
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
        <BackgroundContainer>
          <TextContainer>Enjoy the food that suits you</TextContainer>
        </BackgroundContainer>

        <CaptureBtn htmlFor="capture">
          <h1
            style={{
              margin: "0.5rem 0 0 0.5rem",
              alignSelf: "start",
              color: "#2b8a3e",
            }}
          >
            Capture
          </h1>
          <FiCamera size="3rem" style={{ color: "#2b8a3e" }} />
          <p style={{ margin: "0 0.5rem 0.5rem 0.5rem" }}>
            Take a picture of the menu you want to know the ingredients and
            capture it
          </p>
          <input
            id="capture"
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={onChange}
          />
        </CaptureBtn>

        <LinkBtnContainer>
          <Link to="/selectIngredients" style={LinkStyle} >
            <LinkBtn>
              <BsCardChecklist size="3rem" style={{ color: "#2b8a3e" }} />
              <BtnName>Select Ingredients</BtnName>
            </LinkBtn>
          </Link>

          <Link to="/community" style={LinkStyle}>
            <LinkBtn>
              <AiOutlineTeam size="3rem" style={{ color: "#2b8a3e" }} />
              <BtnName>Community</BtnName>
            </LinkBtn>
          </Link>
        </LinkBtnContainer>
      </Container>
    </>
  );
}

export default React.memo(MainPresenter);
