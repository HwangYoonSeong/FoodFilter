import React from "react";
import styled from "styled-components";
import Dummy from "../../../assets/Lenna.png";

const DetailContainer = styled.div`
  margin-top: 50px;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

function DetailPresenter() {
  return (
    <DetailContainer>
      <table style={{ marginLeft: "0.5rem" }}>
        <tr>
          <td rowSpan="2">
            <UserImage src={Dummy} alt="dummy image" />
          </td>
          <td>bung1438@gmail.com</td>
        </tr>
        <tr>
          <td style={{ fontSize: "0.8rem" }}>04/18 21:52</td>
        </tr>
      </table>
    </DetailContainer>
  );
}

export default DetailPresenter;
