import React from "react";
import styled from "styled-components";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 65%;
`;

const Button = styled.button`
  background: black;
  border: none;
  color: white;
  width: 150px;
  height: 45px;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
  margin-top: 2rem;
`;

function CapturePresenter({ image, setCropper, getData }) {
  return (
    <>
      <Container>
        <p>Select the menu you want to know</p>
        <ImageContainer>
          <Cropper
            style={{ width: "100%" }}
            zoomTo={2}
            initialAspectRatio={1}
            src={image}
            viewMode={1}
            guides={true}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={true}
            responsive={true}
            autoCropArea={1}
            zoomable={false}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
        </ImageContainer>

        <Button onClick={getData}>SELECT!!</Button>
      </Container>
    </>
  );
}

export default CapturePresenter;
