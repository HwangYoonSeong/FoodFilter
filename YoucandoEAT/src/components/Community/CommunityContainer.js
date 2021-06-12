import React, { useState, useEffect, useCallback } from "react";
import CommunityPresenter from "./CommunityPresenter";
import axios from "axios";
import ipObj from "../../key";
import { useSelector, useDispatch } from "react-redux";
import { setSearchMode } from "../../modules/searchMode";

function CommunityContainer() {
  const uid = useSelector((state) => state.uid);
  const searchMode = useSelector((state) => state.searchMode);

  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const openSearch = useCallback(() => {
    dispatch(setSearchMode(true));
  }, [dispatch]);

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (Math.round(scrollTop) + clientHeight === scrollHeight) {
      const tempCount = pageCount + 1;
      setPageCount(tempCount);
    }
  }, [pageCount]);

  // 스크롤 이벤트 리스너 핸들링
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, [infiniteScroll]);

  // 최초 서버로 요청 및
  // pageCount변수가 증가할 경우(스크롤이 바닥)
  // 서버로 요청
  useEffect(() => {
    axios
      .get(`${ipObj.ip}/postList?page=${pageCount}`)
      .then((response) => {
        setPosts(posts.concat(response.data.results));
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, [pageCount]);

  // 컴포넌트 언마운트 시 검색 모드 비활성화
  useEffect(() => {
    return () => dispatch(setSearchMode(false));
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
