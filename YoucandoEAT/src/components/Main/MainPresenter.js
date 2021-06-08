import React from "react";
import styled, { css, keyframes } from "styled-components";
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
  display: flex;
  justify-content: center;
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

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const DarkBackground = styled.div`
  ${(props) =>
    props.modal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const slideUp = keyframes`
  from{
    transform: translate(-50%, 0%);
  }
  to{
    transform: translate(-50%, -50%);
  }
`;

const ModalBox = styled.div`
  ${(props) =>
    props.modal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};

  position: fixed;
  width: 325px;
  height: 175px;
  background: white;
  border-radius: 0.5rem;
  z-index: 10;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ModalBody = styled.div`
  border-bottom: 1px dashed black;
  height: 70%;
`;

const ModalContents = styled.div`
  padding: 1rem;
  font-size: 18px;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30%;
`;

const ModalBtn = styled.button`
  outline: none;
  border: none;
  background: #2b8a3e;
  color: white;
  margin-right: 1rem;
  font-size: 20px;
  border-radius: 0.25rem;
`;

function MainPresenter({ onChange, uid, modal, setModal }) {
  const LinkStyle = {
    color: "white",
    textDecorationLine: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };
  return (
    <>
      <DarkBackground modal={modal} />
      <ModalBox modal={modal}>
        <ModalBody>
          <ModalContents>You can use it after logging in</ModalContents>
        </ModalBody>
        <ModalFooter>
          <ModalBtn onClick={() => setModal(false)}>Ok</ModalBtn>
        </ModalFooter>
      </ModalBox>

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
          {uid ? (
            <Link to="/selectIngredients" style={LinkStyle}>
              <LinkBtn>
                <BsCardChecklist size="3rem" style={{ color: "#2b8a3e" }} />
                <BtnName>Select Ingredients</BtnName>
              </LinkBtn>
            </Link>
          ) : (
            <div>
              <LinkBtn onClick={() => setModal(true)}>
                <BsCardChecklist size="3rem" style={{ color: "#2b8a3e" }} />
                <BtnName>Select Ingredients</BtnName>
              </LinkBtn>
            </div>
          )}

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
