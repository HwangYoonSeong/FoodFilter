import React, { useContext, useState, useEffect } from "react";
import CommunityPresenter from "./CommunityPresenter";
import Dummy from "../../assets/Lenna.png";
import { store } from '../../App';
function CommunityContainer () {
  const globalState = useContext(store);
  const { state, dispatch } = globalState
  const [dummyposts, setDummyPosts] = useState([]);

  useEffect(() => {
    setDummyPosts([
      {
        id: 0,
        title: "Dummy Title1",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 1,
        title: "Dummy Title2",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 2,
        title: "Dummy Title3",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 3,
        title: "Dummy Title4",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 4,
        title: "Dummy Title5",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 5,
        title: "Dummy Title6",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 6,
        title: "Dummy Title7",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 7,
        title: "Dummy Title8",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },

      {
        id: 8,
        title: "Dummy Title9",
        content: "dummy content",
        date: "2021-04-18 21:52",
        writer: "Lena",
        thumbnail: Dummy,
      },
    ]);

    return () => {
      dispatch({ type: 'SET_SEARCHMODE', mode: false });
    };
  }, [dispatch]);

  const openSearch = () => {
    dispatch({ type: 'SET_SEARCHMODE', mode: true });
  };

  return (
    <>
      <CommunityPresenter
        dummyposts={dummyposts}
        uid={state.uid}
        openSearch={openSearch}
        searchMode={state.searchMode}

      />
    </>
  );
}

export default CommunityContainer;
