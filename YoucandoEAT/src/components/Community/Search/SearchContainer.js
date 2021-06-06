import React, { useState, useCallback } from "react";
import SearchPresenter from "./SearchPresenter";
import { useDispatch } from "react-redux";

import { setSearchMode } from "../../../modules/searchMode";
import axios from "axios";
import ipObj from "../../../key"

function SearchContainer () {
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
    axios
      .get(`${ipObj.ip}/postSearch?input=${input}`)
      .then((response) => {
        //post, comment, user join해서 한번에 정보를 받음
        console.log("url:", `GET postSearch?input=${input}`, "\nstatus:", response.status, "\nstatusText:", response.statusText);
        setSearchPosts(response.data.results);

      })
      .catch((err) => {
        console.error(err.response);
      });

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
