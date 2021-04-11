import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const ImageContainer = styled.img`
  width: 400px;
`;

function CapturePresenter({ image }) {
  return (
    <>
      <Container>
        <ImageContainer src={image} />
      </Container>
    </>
  );
}

export default CapturePresenter;
