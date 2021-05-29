import React from "react";
import styled from "styled-components";

import ipObj from "../../../key";
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

const PostImage = styled.img`
  width: 100%;
  height: 100%;
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
  background: white;
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

function DetailPresenter({
  post,

  onChangeInputs,
  clickEnter,
  comment,
}) {
  return (
    <div>
      {/* CONTENT */}
      {!Array.isArray(post) ? (
        <ContentsContainer>
          <table>
            <tbody>
              <tr>
                <td rowSpan="2">
                  <UserImage
                    src={`${ipObj.ip}/images/${post.userImg}`}
                    alt="user image"
                  />
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
          <PostImage
            src={`${ipObj.ip}/images/${post.postImg}`}
            alt="post"
          ></PostImage>
          <p>{post.content}</p>
        </ContentsContainer>
      ) : null}

      {/* COMMENT */}
      {post.comments ? (
        <>
          {post.comments.map((comment, index) => (
            <CommentsContainer key={comment.id}>
              <table style={{ marginTop: "0.2rem" }}>
                <tbody>
                  <tr>
                    <td>
                      <SmallUserImage
                        src={`${ipObj.ip}/images/${comment.writerImg}`}
                        alt="dummy image"
                      />
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

      {/*COMMENT INPUT */}
      <InputContainer>
        <Input
          rows="4"
          type="text"
          value={comment}
          placeholder="Please type in the comments."
          onChange={onChangeInputs}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              clickEnter();
              e.preventDefault();
            }
          }}
        />
      </InputContainer>
    </div>
  );
}

export default DetailPresenter;
