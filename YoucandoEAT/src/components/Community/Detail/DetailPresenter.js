import React from "react";
import styled from "styled-components";
import Dummy from "../../../assets/Lenna.png";
import { GrPrevious } from "react-icons/gr";

import ipObj from "../../../key"
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

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
`;

const PreviosBtn = styled.button`
  margin: 5px 0 5px 0.5rem;
  border: none;
  outline: none;
  background: white;

  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;

function DetailPresenter ({ post, goBack }) {
  // 지금은 더미 데이터이지만 post로 데이터 바인딩 변경
  // 댓글 정보도 따로 받아온다면 댓글도 데이터 바인딩 변경
  return (
    <div>
      <TopBar>
        <PreviosBtn onClick={goBack}>
          <GrPrevious size="24" />
        </PreviosBtn>
      </TopBar>


      {/* CONTENT */}
      {!Array.isArray(post) ? (<ContentsContainer>
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">
                <UserImage src={`${ipObj.ip}/images/${post.thumbnail}`} alt="dummy image" />
              </td>
              <td>{post.writer}</td>
            </tr>
            <tr>
              <td style={{ fontSize: "0.75rem", color: "#adb5bd" }}>
                {post.date}
              </td>
            </tr>
          </tbody>
        </table>
        <h1 style={{ fontSize: "1.25rem" }}>{post.title}</h1>
        <p>{post.content}</p>
      </ContentsContainer>) : null}


      {/* COMMENT */}
      {post.comments ? (
        <>
          {post.comments.map((comment, index) => (
            <CommentsContainer key={comment.id}>
              <table style={{ marginTop: "0.2rem" }}>
                <tbody>
                  <tr>
                    <td>
                      <SmallUserImage src={Dummy} alt="dummy image" />
                    </td>
                    <td style={{ fontSize: "0.75rem" }}>{comment.writer}</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ margin: "0" }}>{comment.contents}</p>
              <CommentTime>{comment.date}</CommentTime>
            </CommentsContainer>

          ))}
        </>

      ) : null}



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
