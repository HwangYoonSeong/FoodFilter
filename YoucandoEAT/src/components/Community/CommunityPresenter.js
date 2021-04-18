import React from "react";
import styled from "styled-components";
import Dummy from "../../assets/권은비2.jpg";

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

function CommunityPresenter() {
  return (
    <>
      <PostContainer>
        <Post>
          <div>
            <Title>Dummy Title</Title>
            <Content>dummy content</Content>
            <SmallFont>Date | Writer</SmallFont>
          </div>
          <ThumbNail src={Dummy} />
        </Post>

        <Post>
          <div>
            <Title>Dummy Title</Title>
            <Content>dummy content</Content>
            <SmallFont>Date | Writer</SmallFont>
          </div>
          <ThumbNail src={Dummy} />
        </Post>

        <Post>
          <div>
            <Title>Dummy Title</Title>
            <Content>dummy content</Content>
            <SmallFont>Date | Writer</SmallFont>
          </div>
          <ThumbNail src={Dummy} />
        </Post>
      </PostContainer>
    </>
  );
}

export default CommunityPresenter;
