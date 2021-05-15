import React, { useState, useEffect } from "react";
import CommunityPresenter from "./CommunityPresenter";
// import Dummy from "../../assets/Lenna.png";
import axios from "axios";
import ipObj from "../../key"
function CommunityContainer ({ uid, setSearchMode, searchMode }) {
  const [dummyposts, setDummyPosts] = useState([]);

  // useEffect(() => {
  //   setDummyPosts([
  //     {
  //       id: 0,
  //       title: "Dummy Title1",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 1,
  //       title: "Dummy Title2",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 2,
  //       title: "Dummy Title3",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 3,
  //       title: "Dummy Title4",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 4,
  //       title: "Dummy Title5",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 5,
  //       title: "Dummy Title6",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 6,
  //       title: "Dummy Title7",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 7,
  //       title: "Dummy Title8",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },

  //     {
  //       id: 8,
  //       title: "Dummy Title9",
  //       content: "dummy content",
  //       date: "2021-04-18 21:52",
  //       writer: "Lena",
  //       thumbnail: Dummy,
  //     },
  //   ]);

  //   return () => {
  //     setSearchMode(false);
  //   };
  // }, [setSearchMode]);



  //게시글 리스트 서버로부터 받아와서 postList 초기화 
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postList`)
      .then((response) => {
        setDummyPosts(response.data.results);
      })
      .catch((err) => {
        console.error(err.response);
      });

  }, []);

  const openSearch = () => {
    setSearchMode(true);
  };

  return (
    <>
      <CommunityPresenter
        dummyposts={dummyposts}
        uid={uid}
        openSearch={openSearch}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
      />
    </>
  );
}

export default CommunityContainer;
