import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

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
  font-size: 20px;
`;

const HamburgerBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: white;
  border-radius: 8px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 5px 1rem 5px 0;

  &:active {
    filter: brightness(85%);
  }
`;

// const SidebarBlock = styled.div`
//   height: 100%;
//   width: 70%;
//   background: white;
// `;

function NavBarPresenter() {
  return (
    <>
      <Container>
        <Title>You can do EAT</Title>

        <HamburgerBtn>
          <GiHamburgerMenu size="24" />
        </HamburgerBtn>
      </Container>
    </>
  );
}

export default NavBarPresenter;
