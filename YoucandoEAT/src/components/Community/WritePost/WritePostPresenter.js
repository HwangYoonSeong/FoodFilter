import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FiCamera } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

const WriteContainer = styled.div`
  margin-top: 55px;
`;

const InputTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputTitle = styled.input`
  border: none;
  margin: 0 1rem 0 1rem;
  padding: 0.5rem;
  width: 100%;
  font-size: 1.4rem;
  border-bottom: solid 1px #adb5bd;
  font-family: "NanumSquare";
  background: #e9ecef;

  &:focus {
    outline: none;
  }
`;

const InputContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const InputContent = styled.textarea`
  background: #e9ecef;
  border: none;
  margin: 0 1rem 0 1rem;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-family: "NanumSquare";

  &:focus {
    outline: none;
  }
`;

const CamBtn = styled.label`
  position: fixed;
  outline: none;
  border: none;
  background: white;
  border-radius: 0.5rem;
  bottom: 2%;
  left: 2%;
  background: #e9ecef;
`;

const CompBtn = styled.button`
  position: fixed;
  outline: none;
  border: none;
  background: white;
  color: black;
  border-radius: 0.5rem;
  bottom: 2%;
  right: 2%;
  background: #e9ecef;
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

function WritePostPresenter({
  onChangeImage,
  onClick,
  onChangeInputs,
  inputs,
  modal,
  setModal,
}) {
  return (
    <>
      <DarkBackground modal={modal} />
      <ModalBox modal={modal}>
        <ModalBody>
          <ModalContents>The title or content is empty.</ModalContents>
        </ModalBody>
        <ModalFooter>
          <ModalBtn onClick={() => setModal(false)}>Ok</ModalBtn>
        </ModalFooter>
      </ModalBox>

      <WriteContainer>
        <InputTitleContainer>
          <InputTitle
            name="title"
            value={inputs.title}
            onChange={onChangeInputs}
            placeholder="Title"
          ></InputTitle>
        </InputTitleContainer>

        <InputContentContainer>
          <InputContent
            name="content"
            value={inputs.content}
            onChange={onChangeInputs}
            rows="30"
            placeholder="Enter the contents."
          ></InputContent>
        </InputContentContainer>

        <CamBtn htmlFor="addPhoto">
          <FiCamera size="32px" />
          <input
            id="addPhoto"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onChangeImage}
          ></input>
        </CamBtn>

        <CompBtn onClick={onClick}>
          <AiOutlineCheck size="32px" />
        </CompBtn>
      </WriteContainer>
    </>
  );
}

export default React.memo(WritePostPresenter);
