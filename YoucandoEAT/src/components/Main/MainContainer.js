import React, { useCallback } from "react";
import MainPresenter from "./MainPresenter";
import { useSelector, useDispatch } from "react-redux";

import { setCaptureMode } from "../../modules/captureMode";

function MainContainer({ history }) {
  const uid = useSelector((state) => state.uid);
  const dispatch = useDispatch();
  // onChange 이벤트 발생 시
  // 사용자에게 이미지를 출력하기 위하여 이미지 데이터 가공
  const onChange = useCallback(
    (e) => {
      e.preventDefault();
      let files;
      if (e.dataTransfer) files = e.dataTransfer.files;
      else if (e.target) files = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        dispatch(setCaptureMode(true));
        history.push({
          pathname: "/capture",
          state: { image: reader.result },
        });
      };
    },
    [history, dispatch]
  );

  return (
    <>
      <MainPresenter onChange={onChange} uid={uid} />
    </>
  );
}

export default React.memo(MainContainer);
