import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import myVideo from "../assets/videos/vid.mp4";

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0px;

  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding-top: 30px;

  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledVideoGlass = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  top: 120px;
  left: 0px;

  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding-top: 30px;

  justify-content: center;
  align-items: center;

  display: ${(props) => (props.clicked ? "none" : "flex")};
`;

const StyledPlayButton = styled.img`
  width: 225px;
  height: 176px;

  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

export default function VideoContainer(props) {
  let [videoFilePath] = useState(null);
  let [playClicked, setPlayClicked] = useState(false);

  function playButtonClicked() {
    console.log("playButtonClicked");
    setPlayClicked(true);
  }

  useEffect(() => {
    setPlayClicked(false);
  }, [props.video]);

  return (
    <StyledVideoContainer
      id="styledVideoContainer"
      bgColor={props.bgColor}
      textColor={props.textColor}
    >
      <div id="videoContainer_videoWrapper">
        <h1>
          {props.title} {props.index}
        </h1>
        <div>{props.data.video.text}</div>

        <ReactPlayer
          width={props.video.width}
          height={props.video.height}
          controls
          /*url={videoFilePath}*/
          url={props.video.url}
          playing={playClicked}
        ></ReactPlayer>

        <StyledVideoGlass bgColor={props.bgColor} clicked={playClicked}>
          <StyledPlayButton
            src={props.playButton}
            onClick={playButtonClicked}
          />
        </StyledVideoGlass>
      </div>
    </StyledVideoContainer>
  );
}
