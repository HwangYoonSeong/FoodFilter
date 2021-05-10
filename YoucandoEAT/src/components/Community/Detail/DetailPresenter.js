import React from "react";
import styled from "styled-components";
import Dummy from "../../../assets/Lenna.png";

const ContentsContainer = styled.div`
  margin: 50px 0.5rem 0 0.5rem;
  border-bottom: solid 1px #adb5bd;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const CommentsContainer = styled.div`
  margin: 0 0.5rem 0 0.5rem;
`;

function DetailPresenter() {
  return (
    <>
      <ContentsContainer>
        <table>
          <tr>
            <td rowSpan="2">
              <UserImage src={Dummy} alt="dummy image" />
            </td>
            <td>bung1438@gmail.com</td>
          </tr>
          <tr>
            <td style={{ fontSize: "0.75rem", color: "#adb5bd" }}>
              04/18 21:52
            </td>
          </tr>
        </table>
        <h1 style={{ fontSize: "1.25rem" }}>Dummy Title</h1>
        <p>dummy content</p>
      </ContentsContainer>
      <CommentsContainer></CommentsContainer>
    </>
  );
}

export default DetailPresenter;
