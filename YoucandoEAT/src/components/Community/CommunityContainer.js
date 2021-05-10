import React, { useState, useEffect } from "react";
import CommunityPresenter from "./CommunityPresenter";
import Dummy from "../../assets/Lenna.png";

function CommunityContainer({ uid, setSearchMode, searchMode }) {
  const [input, setInput] = useState("");
  const [dummyposts, setDummyPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    setDummyPosts([
      {
        title: "Dummy Title1",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title2",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title3",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title4",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title5",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title6",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title7",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title8",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        title: "Dummy Title9",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },
    ]);
  }, []);

  const openSearch = () => {
    setSearchMode(true);
  };

  const closeSearch = () => {
    setSearchMode(false);
    setInput("");
  };

  const onChange = (e) => {
    setInput(e.target.value);
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

  return (
    <>
      <CommunityPresenter
        dummyposts={dummyposts}
        uid={uid}
        openSearch={openSearch}
        closeSearch={closeSearch}
        searchMode={searchMode}
        input={input}
        onChange={onChange}
        clearInput={clearInput}
        clickEnter={clickEnter}
        searchPosts={searchPosts}
      />
    </>
  );
}

export default CommunityContainer;
