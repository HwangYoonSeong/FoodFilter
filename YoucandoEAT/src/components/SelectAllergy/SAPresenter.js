import React from "react";
import styled from "styled-components";
import { BiAddToQueue } from "react-icons/bi";
import { GiSaveArrow } from "react-icons/gi";
const Title = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 1rem 0 0 0;
  background: black;
  font-size: 20px;
  color: white;
  top:0;
  margin-top: 2.8rem;
  justify-content:space-around;
`;
const Footer = styled.div`
  display: flex;
  position: fixed;
  height:200px;
  padding: 1rem 1rem 1rem 0;
  font-size: 20px;
  right:0;
  bottom:0;
  flex-direction: column;
  justify-content:space-around;
`;
const SubTitle = styled.p`
   font-size:13px;
   text-align:center;
`;

const IngrdContainer = styled.ul`
  vertical-align: center;
  width: 100%;
  margin-top: 8rem;
  padding: 0;
  margin-bottom: 5rem;
`;

const Ingrd = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;

  background: ${(props) => (props.isClick ? "#ced4da" : "white")};
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

const Btn = styled.button`
color:white;
background: black;
  border-radius: 50%;
  padding:10px;
  width: 70px;
  height: 70px;
  border: none;
  font-family: "NanumSquare";
  &:active {
    filter: brightness(85%);
  }
`;

function SAPresenter ({ allergyList, save, onToggle }) {
  return (
    <>
      <Title>
        {/* <SaveBtn onClick={save}>
          <BiAddToQueue size="30" />
          <b >Add</b>
        </SaveBtn> */}
        <div>
          Ingredients Check List <SubTitle>Select ingredients you can't eat  </SubTitle>
        </div>

        {/* <SaveBtn onClick={save}>
          <GrSave size="30" />
          <b >Save</b>
        </SaveBtn> */}

      </Title>

      < IngrdContainer >
        {
          allergyList.map((el) => {
            return (
              <Ingrd
                isClick={el.checked}
                key={el.id}
                onClick={() => onToggle(el.id)}
              >
                {/* <IngrdImg src={`${ipObj.ip}/images/${el.image}`} alt="FoodImg" /> */}
                <IngrdImg src={el.image} alt="FoodImg" />
                <IngrdName>{el.name}</IngrdName>
              </Ingrd>
            );
          })
        } </IngrdContainer>

      <Footer>
        <Btn onClick={save}>
          <BiAddToQueue size="30" />
          <b >Add</b>
        </Btn>


        <Btn onClick={save}>
          <GiSaveArrow size="30" />
          <b >Save</b>
        </Btn>

      </Footer>
    </>
  );
}

export default SAPresenter;
