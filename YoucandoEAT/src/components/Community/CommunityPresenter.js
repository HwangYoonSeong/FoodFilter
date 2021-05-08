import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom"
import { FaPen } from "react-icons/fa";
import MagIcon from "mdi-react/MagnifyIcon";

const PostContainer = styled.ul`
  list-style: none;
  margin-top: 50px;
  padding-left: 0;
`;

const Post = styled.li`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => (props.index) ? css`  border-top: 1px solid #adb5bd;` : null}
`;

const Title = styled.h1`
  font-size: 17px;
`;

const Content = styled.p`
  font-size: 0.8rem;
`;

const SmallFont = styled.p`
  font-size: 0.5rem;
`;

const ThumbNail = styled.img`
  width: 85px;
  height: 85px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const WriteBtn = styled.button`
  position: fixed;
  outline: none;
  border: none;
  background: white;
  color: black;
  border-radius: 8px;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  padding: 0.5rem;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);
  font-family: "NanumSquare";
  &:active {
    filter: brightness(85%);
  }
`;

const MagBtn = styled.button`
  position: fixed;
  outline: none;
  border: none;
  background: white;
  color: black;
  border-radius: 50%;
  bottom: 2%;
  right: 2%;
  padding: 0.7rem;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.3);
  &:active {
    filter: brightness(85%);
  }
`;

function CommunityPresenter({ posts, uid }) {
  const LinkStyle = {
    color: "black",
    textDecorationLine: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };

  return (
    <>
      <PostContainer>
        {posts.map((post, index) => (
          <Post key={index} index={index}>
            <div>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
              <SmallFont>
                {post.date} | {post.writer}
              </SmallFont>
            </div>
            <ThumbNail src={post.thumbnail} />
          </Post>

        ))}

        {uid ?
          <Link to="/community/write" style={LinkStyle}>
            <WriteBtn>
              <FaPen style={{ marginRight: "5px" }} />
              Writing
          </WriteBtn>
          </Link> : null
        }

        <MagBtn>
          <MagIcon size="1.8rem" />
        </MagBtn>
      </PostContainer>
    </>
  );
}

export default CommunityPresenter;
