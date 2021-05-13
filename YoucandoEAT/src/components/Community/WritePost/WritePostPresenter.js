import React from "react";
import styled from "styled-components";
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
`;

function WritePostPresenter({
  onChangeImage,
  onClick,
  onChangeInputs,
  inputs,
}) {
  return (
    <>
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

export default WritePostPresenter;
