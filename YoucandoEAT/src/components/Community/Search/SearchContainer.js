import React, { useState, useCallback } from "react";
import SearchPresenter from "./SearchPresenter";
import { useDispatch } from "react-redux";

import { setSearchMode } from "../../../modules/searchMode";

function SearchContainer() {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const closeSearch = useCallback(() => {
    dispatch(setSearchMode(false));
    setInput("");
  }, [dispatch]);

  const clearInput = () => {
    setInput("");
  };

  const clickEnter = useCallback(() => {
    // 서버로 사용자의 input을 보내어 게시판 데이터를 요청하여
    // setPosts를 통해 데이터 갱신
    console.log(input);
    setSearchPosts([]);
  }, [input]);

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

export default React.memo(SearchContainer);
