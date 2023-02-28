import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const VideoPopup = ({ src, width, height, onClose }) => {
  return (
    <StyledPopup onClick={onClose}>
      <StyledVideo src={src} width={width} height={height} controls />
    </StyledPopup>
  );
};

export default VideoPopup;
