import React from "react";
import styled from "styled-components";
import { GrPrevious, GrClose } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";

const ErrorBackground = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  width: 100%;
  transform: translateX(-50%);
  text-align: center;
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

function SearchPresenter({
  closeSearch,
  input,
  searchPosts,
  clickEnter,
  clearInput,
  onChange,
}) {
  return (
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
    </>
  );
}

export default SearchPresenter;
