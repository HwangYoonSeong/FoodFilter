import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import MagIcon from "mdi-react/MagnifyIcon";
import { GrPrevious, GrClose } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";

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

  ${(props) =>
    props.index
      ? css`
          border-top: 1px solid #adb5bd;
        `
      : null}
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

const SearchBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  border: none;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  font-size: 18px;
  font-family: "NanumSquare";

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

const CloseBtn = styled.button`
  margin: 5px 0 5px 0.5rem;
  border: none;
  outline: none;
  background: white;

  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;

const ClearBtn = styled.button`
  margin: 5px 0.5rem 5px 0;

  border: none;
  outline: none;
  background: white;

  border-radius: 8px;

  &:active {
    filter: brightness(85%);
  }
`;

// const InitalBackground = styled.div`
//   position: fixed;
//   left: 50%;
//   top: 20%;
//   width: 100%;
//   transform: translateX(-50%);
//   text-align: center;
// `;

const ErrorBackground = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  width: 100%;
  transform: translateX(-50%);
  text-align: center;
`;

function CommunityPresenter({
  dummyposts,
  uid,
  openSearch,
  closeSearch,
  searchMode,
  input,
  onChange,
  clearInput,
  clickEnter,
  searchPosts,
}) {
  const LinkStyle = {
    color: "black",
    textDecorationLine: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };

  return (
    <>
      <PostContainer>
        {searchMode ? (
          <>
            <SearchBar>
              <CloseBtn onClick={closeSearch}>
                <GrPrevious size="24" />
              </CloseBtn>

              <Input
                type="search"
                placeholder="Post title, content"
                value={input}
                onChange={onChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") clickEnter();
                }}
              />

              {input ? (
                <ClearBtn onClick={clearInput}>
                  <GrClose size="24" />
                </ClearBtn>
              ) : null}
            </SearchBar>

            {searchPosts.length ? null : (
              <ErrorBackground>
                <RiErrorWarningLine style={{ color: "#adb5bd" }} size="4rem" />
                <p style={{ color: "#adb5bd" }}>No search results.</p>
              </ErrorBackground>
            )}

            {/* <InitalBackground>
              <MagIcon style={{ color: "#adb5bd" }} size="4rem" />
              <p style={{ color: "#adb5bd" }}>
                You should search for your writing.
              </p>
            </InitalBackground> */}
          </>
        ) : (
          <>
            {dummyposts.map((post, index) => (
              <Post key={post.id} index={post.id}>
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
            <MagBtn onClick={openSearch}>
              <MagIcon size="1.8rem" />
            </MagBtn>
            {uid ? (
              <Link to="/community/write" style={LinkStyle}>
                <WriteBtn>
                  <FaPen style={{ marginRight: "5px" }} />
                  Writing
                </WriteBtn>
              </Link>
            ) : null}
          </>
        )}
      </PostContainer>
    </>
  );
}

export default CommunityPresenter;
