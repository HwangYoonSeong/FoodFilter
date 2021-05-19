import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { connect } from "react-redux";

function SearchContainer({ dispatch }) {
  const [input, setInput] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const closeSearch = () => {
    dispatch({ type: "SET_SEARCHMODE", mode: false });
    setInput("");
  };

  const clearInput = () => {
    setInput("");
  };

  const clickEnter = () => {
    // 서버로 사용자의 input을 보내어 게시판 데이터를 요청하여
    // setPosts를 통해 데이터 갱신
    console.log(input);
    setSearchPosts([]);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <SearchPresenter
        closeSearch={closeSearch}
        input={input}
        searchPosts={searchPosts}
        clickEnter={clickEnter}
        clearInput={clearInput}
        onChange={onChange}
      />
    </>
  );
}

function stateTOprops(state) {
  return { state };
}

export default connect(stateTOprops)(SearchContainer);
