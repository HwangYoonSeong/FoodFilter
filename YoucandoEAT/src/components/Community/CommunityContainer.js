import React, { useState, useEffect } from "react";
import CommunityPresenter from "./CommunityPresenter";
import Dummy from "../../assets/Lenna.png";

function CommunityContainer({ uid, setSearchMode }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
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

  return (
    <>
      <CommunityPresenter posts={posts} uid={uid} openSearch={openSearch} />
    </>
  );
}

export default CommunityContainer;
