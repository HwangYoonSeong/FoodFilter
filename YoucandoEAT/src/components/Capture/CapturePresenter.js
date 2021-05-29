import React from "react";
import styled, { keyframes, css } from "styled-components";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 65%;
`;

const Button = styled.button`
  background: black;
  border: none;
  color: white;
  width: 150px;
  height: 45px;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
  margin-top: 2rem;
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
        `};

  position: fixed;
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
  background: black;
  color: white;
  margin-right: 1rem;
  font-size: 20px;
  border-radius: 0.25rem;
`;

function CapturePresenter({ image, setCropper, getData, modal, setModal }) {
  return (
    <>
      <DarkBackground modal={modal} />
      <ModalBox modal={modal}>
        <ModalBody>
          <ModalContents>
            Are you sure you want to select the menu?
          </ModalContents>
        </ModalBody>
        <ModalFooter>
          <ModalBtn onClick={getData}>Yes</ModalBtn>
          <ModalBtn onClick={() => setModal(false)}>No</ModalBtn>
        </ModalFooter>
      </ModalBox>

      <Container>
        <p style={{ fontSize: "1.1rem" }}>Select the menu you want to know</p>
        <ImageContainer>
          <Cropper
            style={{ width: "100%" }}
            zoomTo={2}
            initialAspectRatio={1}
            src={image}
            viewMode={1}
            guides={true}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={true}
            responsive={true}
            autoCropArea={1}
            zoomable={false}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
        </ImageContainer>

        <Button onClick={() => setModal(true)}>SELECT!!</Button>
      </Container>
    </>
  );
}

export default React.memo(CapturePresenter);
