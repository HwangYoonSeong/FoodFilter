import React from "react";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";

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

  &:not(:first-child) {
    border-top: 1px solid #adb5bd;
  }
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
  background: black;
  color: white;
  border-radius: 8px;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  padding: 0.5rem;
`;

function CommunityPresenter({ posts }) {
  return (
    <>
      <PostContainer>
        {posts.map((post, index) => (
          <Post key={index}>
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

        <WriteBtn>
          <FaPen style={{ marginRight: "5px" }} />
          Writing
        </WriteBtn>
      </PostContainer>
    </>
  );
}

export default CommunityPresenter;
