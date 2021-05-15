import React from "react";
import styled from "styled-components";
import Dummy from "../../../assets/Lenna.png";

const ContentsContainer = styled.div`
  margin: 50px 0.5rem 0 0.5rem;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const SmallUserImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const CommentsContainer = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  border-top: solid 1px #adb5bd;
`;

const CommentTime = styled.p`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  color: #adb5bd;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 115px;
`;

const Input = styled.textarea`
  background: #e9ecef;
  position: fixed;
  bottom: 1%;
  border: none;
  padding: 0.7rem;
  font-size: 1rem;
  font-family: "NanumSquare";
  width: 90%;

  overflow: visible;
  border-radius: 0.7rem;

  &:focus {
    outline: none;
  }
`;

function DetailPresenter({ post }) {
  // 지금은 더미 데이터이지만 post로 데이터 바인딩 변경
  // 댓글 정보도 따로 받아온다면 댓글도 데이터 바인딩 변경
  return (
    <div>
      {/* CONTENT */}
      <ContentsContainer>
        <table>
          <tbody>
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
          </tbody>
        </table>
        <h1 style={{ fontSize: "1.25rem" }}>Dummy Title</h1>
        <p>dummy content</p>
      </ContentsContainer>
      {/* COMMENT */}
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>
      <CommentsContainer>
        <table style={{ marginTop: "0.2rem" }}>
          <tbody>
            <tr>
              <td>
                <SmallUserImage src={Dummy} alt="dummy image" />
              </td>
              <td style={{ fontSize: "0.75rem" }}>bung1438@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <p style={{ margin: "0" }}>dummy comment</p>
        <CommentTime>04/18 21:52</CommentTime>
      </CommentsContainer>

      {/* INPUT */}
      <InputContainer>
        <Input
          rows="4"
          type="text"
          placeholder="Please type in the comments."
        />
      </InputContainer>
    </div>
  );
}

export default DetailPresenter;
