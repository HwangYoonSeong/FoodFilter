import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  height: 80px;
  background: black;
  font-size: 20px;
  color: white;
  margin-top: 45px;
  justify-content: space-around;
`;

const SaveBtn = styled.button`
  border-radius: 50%;
  background: white;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  &:active {
    filter: brightness(85%);
  }
`;

const Allergy = styled.ul`
  position: absolute;
  vertical-align: center;
  margin-top: 125px;
  width: 100%;
  z-index: -1;
`;

const Item = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isclick ? "#ced4da" : "white")};
`;

const FoodImg = styled.img`
  width: 100px;
  height: 100px;
`;

const FoodName = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;

function SAPresenter({ AllergyList, itemClick, save }) {
  return (
    <>
      <TitleContainer>
        Select from <br />
        21 Food Allergy Trigger
        <SaveBtn onClick={save}>
          <b>SAVE</b>
        </SaveBtn>
      </TitleContainer>

      <Allergy>
        {AllergyList.map((el, idx) => {
          return (
            <Item isclick={el.checked} key={idx} onClick={() => itemClick(idx)}>
              <FoodImg src={el.image} alt="FoodImg" />
              <FoodName>{el.name}</FoodName>
            </Item>
          );
        })}
      </Allergy>
    </>
  );
}

export default SAPresenter;
