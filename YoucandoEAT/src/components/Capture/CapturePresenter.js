import React from "react";
import styled, { keyframes, css } from "styled-components";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { AiOutlineCheck } from "react-icons/ai";

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`;

const Phrase = styled.p`
  position: absolute;
  top: 2.5%;
  left: 1.5%;
  color: white;
  margin: 0;
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

function CapturePresenter({ image, setCropper, getData, modal, setModal }) {
  const buttonStyle = {
    color: "white",
    position: "absolute",
    right: "1.5%",
    top: "2%",
  };

  return (
    <>
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

      <div>
        <Phrase>Select the menu you want to know</Phrase>
        <AiOutlineCheck
          size="1.5rem"
          style={buttonStyle}
          onClick={() => setModal(true)}
        />
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
      </div>
    </>
  );
}

export default React.memo(CapturePresenter);
