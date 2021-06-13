import React from "react";
import styled from "styled-components";


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
const KorContainer = styled.div`
`;

const Input = styled.textarea`
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

const Output = styled.textarea`
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



function TranslatePresenter ({ inputs, output, clickEnter, onChangeInputs }) {
    return (
        <Container>
            <EngContainer>
                <EngHeader>
                    <Title>English</Title>
                </EngHeader>

                <Input
                    name="content"
                    value={inputs}
                    onChange={onChangeInputs}
                    rows="15"
                    placeholder="Please enter what you want to translate."
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            clickEnter();
                            e.preventDefault();
                        }
                    }}
                ></Input>
            </EngContainer>

            <KorContainer>
                <Title>Korean</Title>
                <Output
                    name="content"
                    value={output}
                    onChange={onChangeInputs}
                    rows="15"
                ></Output>
            </KorContainer>
        </Container>
    );
}

export default React.memo(TranslatePresenter);
