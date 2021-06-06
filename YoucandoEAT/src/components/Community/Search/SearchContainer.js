import React, { useState, useCallback } from "react";
import SearchPresenter from "./SearchPresenter";
import { useDispatch } from "react-redux";
import { setSearchMode } from "../../../modules/searchMode";
import axios from "axios";
import ipObj from "../../../key";

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
    setSearchPosts([]);
  };

  const clickEnter = useCallback(() => {
    if (input === "") return;

    axios
      .get(`${ipObj.ip}/postSearch?input=${input}`)
      .then((response) => {
        console.log(
          "url:",
          `GET postSearch?input=${input}`,
          "\nstatus:",
          response.status,
          "\nstatusText:",
          response.statusText
        );
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
