import React, { useState, useEffect, useCallback } from "react";
import CommunityPresenter from "./CommunityPresenter";
import Dummy from "../../assets/Lenna.png";
// import axios from "axios";
// import ipObj from "../../key";
import { useSelector, useDispatch } from "react-redux";
import { setSearchMode } from "../../modules/searchMode";

function CommunityContainer() {
  const uid = useSelector((state) => state.uid);
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.searchMode);
  const [posts, setPosts] = useState([]);

  //게시글 리스트 서버로부터 받아와서 postList 초기화
  useEffect(() => {
    // axios
    //   .get(`${ipObj.ip}/postList`)
    //   .then((response) => {
    //     setPosts(response.data.results);
    //   })
    //   .catch((err) => {
    //     console.error(err.response);
    //   });

    setPosts([
      {
        _id: 0,
        title: "Dummy title",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "2021-06-06 17:27",
        writer: "Lenna",
        postImg: Dummy,
      },

      {
        _id: 1,
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        content: "short text",
        date: "2021-06-06 17:27",
        writer: "Lenna",
        postImg: Dummy,
      },

      {
        _id: 2,
        title: "Dummy title",
        content: "short text",
        date: "2021-06-06 17:27",
        writer: "Lenna",
        postImg: null,
      },
    ]);

    return () => {
      dispatch(setSearchMode(false));
    };
  }, [dispatch]);

  const openSearch = useCallback(() => {
    dispatch(setSearchMode(true));
  }, [dispatch]);

  return (
    <>
      <CommunityPresenter
        posts={posts}
        uid={uid}
        openSearch={openSearch}
        searchMode={searchMode}
      />
    </>
  );
}

export default React.memo(CommunityContainer);
