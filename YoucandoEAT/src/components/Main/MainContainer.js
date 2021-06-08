import React, { useState, useCallback } from "react";
import MainPresenter from "./MainPresenter";
import { useSelector, useDispatch } from "react-redux";

import { setCaptureMode } from "../../modules/captureMode";

function MainContainer({ history }) {
  const uid = useSelector((state) => state.uid);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

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
      <MainPresenter
        onChange={onChange}
        uid={uid}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
}

export default React.memo(MainContainer);
