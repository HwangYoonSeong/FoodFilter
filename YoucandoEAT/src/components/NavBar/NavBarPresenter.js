import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import { GrClose } from "react-icons/gr";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
  background: white;
`;

const Title = styled.h1`
  margin-left: 1rem;
  font-size: 18px;
`;

const HamburgerBtn = styled.button`
  border: none;
  outline: none;
  background: white;
  border-radius: 8px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 5px 1rem 5px 0;

  &:active {
    filter: brightness(85%);
  }
`;


const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: ${(props) => (props.sidebar ? '1' : '-1')};
  opacity: ${(props) => (props.sidebar ? '1' : '0')};
  transition: opacity 0.25s ease-out;
`;



const SideBarBlock = styled.div`
  position: fixed;
  top: 0%;
  text-align: right;
  height: 100%;
  width: 65%;
  background: white;
  z-index: 1;

  right: ${(props) => (props.sidebar ? '0%' : '-65%')};

  transition: right 0.25s ease-out;
`;

const CloseBtn = styled.button`
  float: left;
  margin: 0.5rem 0 0 0.5rem;
  border: none;
  outline: none;
  background: white;
  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;



const SideBarList = styled.ul`
     margin-top:50px;
     list-style:none;
     padding-left:0px;

`;


const Item = styled.li`
padding-top:10px;
color:#000;
display:block;
width: 100%;
font-size:30px;
text-align:center;
 
`;

function NavBarPresenter ({ sidebar, setSidebar, logIn, logOut }) {
  return (
    <>

      <DarkBackground sidebar={sidebar} />
      <SideBarBlock sidebar={sidebar}>
        <CloseBtn onClick={() => setSidebar(false)}>
          <GrClose size="24" />
        </CloseBtn>


        <SideBarList>
          <Item onClick={logIn} >
            LogIn
          </Item>

        </SideBarList>

      </SideBarBlock>

      <Container>
        <Title>You can do EAT</Title>
        <HamburgerBtn onClick={() => setSidebar(true)}>
          <GiHamburgerMenu size="24" />
        </HamburgerBtn>
      </Container>
    </>
  );
}

export default NavBarPresenter;
