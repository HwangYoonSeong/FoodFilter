import React from "react";
import styled, { keyframes, css } from "styled-components";
import { BiCommentDetail } from "react-icons/bi";

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

const PostContents = styled.p`
  word-break: break-all;
  word-wrap: break-word;
`;

const CommentsContainer = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  border-top: solid 1px #adb5bd;
`;

const CommentsContents = styled.p`
  margin: 0;
  word-break: break-all;
  word-wrap: break-word;
`;

const CommentTime = styled.p`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  color: #adb5bd;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
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
  resize: none;

  overflow: visible;
  border-radius: 0.7rem;

  &:focus {
    outline: none;
  }
`;

const EnterBtn = styled.button`
  border: none;
`;

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const DarkBackground = styled.div`
  ${(props) =>
    props.modal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  z-index: 9;
`;

const slideUp = keyframes`
  from{
    transform: translate(-50%, 0%);
  }
  to{
    transform: translate(-50%, -50%);
  }
`;

const ModalBox = styled.div`
  ${(props) =>
    props.modal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};

  position: fixed;
  width: 325px;
  height: 175px;
  background: white;
  border-radius: 0.5rem;
  z-index: 10;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ModalBody = styled.div`
  border-bottom: 1px dashed black;
  height: 70%;
`;

const ModalContents = styled.div`
  padding: 1rem;
  font-size: 18px;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30%;
`;

const ModalBtn = styled.button`
  outline: none;
  border: none;
  background: #2b8a3e;
  color: white;
  margin-right: 1rem;
  font-size: 20px;
  border-radius: 0.25rem;
`;

function DetailPresenter({
  post,
  onChangeInputs,
  clickEnter,
  input,
  comments,
  modal,
  setModal,
  uid,
}) {
  return (
    <>
      <DarkBackground modal={modal} />
      <ModalBox modal={modal}>
        <ModalBody>
          <ModalContents>The comment is empty.</ModalContents>
        </ModalBody>
        <ModalFooter>
          <ModalBtn onClick={() => setModal(false)}>Ok</ModalBtn>
        </ModalFooter>
      </ModalBox>

      {/* CONTENT */}
      {post ? (
        <ContentsContainer>
          <table>
            <tbody>
              <tr>
                <td rowSpan="2">
                  <UserImage src={`${post.userImg}`} alt="user image" />
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

          {post.postImg ? (
            <PostImage
              src={`${ipObj.ip}/${post.postImg}`}
              alt="post"
            ></PostImage>
          ) : null}

          <PostContents>{post.content}</PostContents>
        </ContentsContainer>
      ) : null}

      {/* COMMENTS */}
      {comments ? (
        <>
          {comments.map((comment, index) => (
            <CommentsContainer key={comment.id}>
              <table style={{ marginTop: "0.2rem" }}>
                <tbody>
                  <tr>
                    <td>
                      <SmallUserImage
                        src={`${comment.writerImg}`}
                        alt="dummy image"
                      />
                    </td>
                    <td style={{ fontSize: "0.75rem" }}>{comment.writer}</td>
                  </tr>
                </tbody>
              </table>
              <CommentsContents>{comment.contents}</CommentsContents>
              <CommentTime>{comment.date}</CommentTime>
            </CommentsContainer>
          ))}
        </>
      ) : null}

      {/*COMMENT INPUT */}
      {uid ? (
        <InputContainer>
          <Input
            rows="4"
            type="text"
            value={input}
            placeholder="Please type in the comments."
            onChange={onChangeInputs}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                clickEnter();
                e.preventDefault();
              }
            }}
          />

          <EnterBtn>
            <BiCommentDetail size="24px" />
          </EnterBtn>
        </InputContainer>
      ) : null}
    </>
  );
}

export default DetailPresenter;
