import React from "react";
import styled from "styled-components";
import { GiSaveArrow } from "react-icons/gi";
import ipObj from "../../key";
const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  background: #2b8a3e;
  font-size: 20px;
  color: white;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2.8rem;
`;
const Footer = styled.div`
  display: flex;
  position: fixed;
  height: 100px;
  padding: 1rem 1rem 1rem 0;
  font-size: 20px;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 25px;
  text-align: center;
`;
const SubTitle = styled.div`
  margin-top: 0.5rem;
  font-size: 13px;
  text-align: center;
`;

const IngrdContainer = styled.ul`
  vertical-align: center;
  width: 100%;
  margin-top: 8rem;
  padding: 0;
`;

const Ingrd = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;

  background: ${(props) => (props.isClick ? "#8ce99a" : "white")};
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
  color: white;
  background: #2b8a3e;
  border-radius: 50%;
  padding: 10px;
  width: 70px;
  height: 70px;
  border: none;
  font-family: "NanumSquare";
  &:active {
    filter: brightness(85%);
  }
`;

function SIPresenter({ ingrdList, save, onToggle }) {
  return (
    <>
      <Header>
        <div>
          <Title>Ingredients Check List</Title>
          <SubTitle>Select ingredients you can't eat </SubTitle>
        </div>
      </Header>

      <IngrdContainer>
        {ingrdList.map((el, index) => {
          return (
            <Ingrd
              isClick={el.checked}
              key={index}
              onClick={() => onToggle(index)}
            >
              <IngrdImg src={`${ipObj.ip}/${el.image}`} alt="FoodImg" />
              <IngrdName>{el.name}</IngrdName>
            </Ingrd>
          );
        })}{" "}
      </IngrdContainer>

      <Footer>
        <Btn onClick={save}>
          <GiSaveArrow size="30" />
          <b>Save</b>
        </Btn>
      </Footer>
    </>
  );
}

export default React.memo(SIPresenter);
