import React from "react";
import CapturePresenter from "./CapturePresenter";

function CaptureContainer({ image }) {
  return (
    <>
      <CapturePresenter image={image} />
    </>
  );
}

export default CaptureContainer;
