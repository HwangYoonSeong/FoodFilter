import React, { useState, useEffect, useCallback } from "react";
import CommunityPresenter from "./CommunityPresenter";
import axios from "axios";
import ipObj from "../../key";
import { useSelector, useDispatch } from "react-redux";
import { setSearchMode } from "../../modules/searchMode";

function CommunityContainer() {
  const uid = useSelector((state) => state.uid);
  const dispatch = useDispatch();

  const searchMode = useSelector((state) => state.searchMode);
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const openSearch = useCallback(() => {
    dispatch(setSearchMode(true));
  }, [dispatch]);

  const fetchPost = () => {
    axios
      .get(`${ipObj.ip}/postList?page=${pageCount}`)
      .then((response) => {
        console.log(response);
        // setPosts(
        //   posts.concat(posts.concat(response.data.results.slice(0).reverse()))
        // );
        // setPosts(response.data.results.slice(0).reverse());
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

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
    if (scrollTop + clientHeight === scrollHeight) {
      let tCount = pageCount + 1;
      setPageCount(tCount);
    }
  }, [pageCount]);

  // 최초의 데이터 요청
  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, [infiniteScroll]);

  // pageCount변수가 증가할 경우(스크롤이 바닥)
  // 서버로 요청
  // 컴포넌트 언마운트 시 검색 모드 비활성화
  useEffect(() => {
    fetchPost();
    return () => {
      dispatch(setSearchMode(false));
    };
  }, [pageCount]);

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
