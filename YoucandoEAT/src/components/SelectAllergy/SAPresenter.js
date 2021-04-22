import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 1rem 0 1rem 0;
  background: black;
  font-size: 20px;
  color: white;
  justify-content: space-around;
  bottom: 0;
`;

const IngrdContainer = styled.ul`
  vertical-align: center;
  width: 100%;
  margin-top: 2.5rem;
  padding: 0;
  margin-bottom: 5rem;
`;

const Ingrd = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;

  background: ${(props) => (props.isclick ? "#ced4da" : "white")};
`;
const IngrdImg = styled.img`
  width: 100px;
  height: 100px;
`;

const IngrdName = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const SaveBtn = styled.button`
  border-radius: 50%;
  background: white;
  width: 50px;
  height: 50px;
  border: none;
  &:active {
    filter: brightness(85%);
  }
`;

function SAPresenter({ allergyList, save }) {
  return (
    <>
      <Title>
        Select from <br></br>21 Food Allergy Trigger
        <SaveBtn onClick={save}>
          <b>SAVE</b>
        </SaveBtn>
      </Title>

      <IngrdContainer>
        {allergyList.map((el) => {
          return (
            <Ingrd
              isclick={el.checked}
              key={el.id}
              onClick={() => console.log(el.id)}
            >
              <IngrdImg src={el.image} alt="FoodImg" />
              <IngrdName>{el.name}</IngrdName>
            </Ingrd>
          );
        })}
      </IngrdContainer>
    </>
  );
}

export default SAPresenter;
