import React from "react";
import styled, { keyframes, css } from "styled-components";


const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center
`;

const EngContainer = styled.div`
  margin-top: 3rem;
  border-bottom: 1px solid #adb5bd;
`;

const EngHeader = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
`;

const Title = styled.h2`
`
const TransBtn = styled.button`
    color: white;
    text-weight:bold;
    font-size:15px;
    background: #2b8a3e;
    border-radius: 10%;
    padding: 10px;
    width: 80px;
    height: 35px;
    border: none;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);
    &:active {
    filter: brightness(85%);
    }
`
const KorContainer = styled.div`
`;

const InputContent = styled.textarea`
  background: #fff;
  margin-bottom:20px;
  border: 1px solid #2f9e44;
  width: 310px;
  padding:10px;
  font-size: 1rem;
  font-family: "NanumSquare";
  resize: none;
  &:focus {
    outline: none;
  }
`;

const OutputContent = styled.textarea`
  background: #fff;
  width: 310px;
  padding:10px;
  font-size: 1rem;
  font-family: "NanumSquare";
  resize: none;
  &:focus {
    outline: none;
  }
`;



function TranslatePresenter ({ inputs, onChangeInputs }) {
    return (
        <Container>
            <EngContainer>
                <EngHeader>
                    <Title>English</Title>
                    <TransBtn>Translate</TransBtn>
                </EngHeader>

                <InputContent
                    name="content"
                    value={inputs}
                    onChange={onChangeInputs}
                    rows="15"
                    placeholder="Please enter what you want to translate."
                ></InputContent>
            </EngContainer>

            <KorContainer>
                <Title>Korean</Title>
                <OutputContent
                    name="content"
                    value={inputs}
                    onChange={onChangeInputs}
                    rows="15"
                ></OutputContent>
            </KorContainer>
        </Container>
    );
}

export default React.memo(TranslatePresenter);
