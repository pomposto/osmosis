import React from "react";
import styled from "styled-components";
import { CentromerParts } from "./CentromerParts";
import VideoContainer from "./VideoContainer";
import backgroundVideoArea from "../assets/img/mitosis_videoarea.svg";

const StyledPart1 = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/

  width: 1286px;
  height: 821px;
`;


const CentromerPartsBG = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/

  
`;

const StyledVideoWrapper = styled.div`
  width: 884px;
  height: 783px;
  position: relative;
  display: inline-block;
  /*background-image: url("../assets/img/mitosis_intro_area.svg");*/
  background-size: 100% 100%;

  float: left;
  top: 5px;
  padding: 8px 9px 6px 10px;
  box-sizing: border-box;

  background-image: url(${backgroundVideoArea});
  background-position: 0px 0px;
  background-repeat: no-repeat;
`;

export const Part1 = (props) => {
  var currentSectionIndex = 0;

  let [currentSection, setCurrentSection] = React.useState(
    props.obj.sections[currentSectionIndex]
  );
  currentSection = props.obj.sections[currentSectionIndex];

  let [title, setTitle] = React.useState(
    props.obj.sections[currentSectionIndex].name
  );
  let [index, setIndex] = React.useState(1);

  let [bgColor, setBgColor] = React.useState(
    props.obj.sections[currentSectionIndex].color
  );
  let [textColor, setTextColor] = React.useState(
    props.obj.sections[currentSectionIndex].textColor
  );
  let [playButton, setPlayButton] = React.useState(
    props.obj.sections[currentSectionIndex].playButton
  );
  let [video, setVideo] = React.useState(
    props.obj.sections[currentSectionIndex].video
  );

  let sectionClicked = function (obj) {
    currentSection = obj;
    setCurrentSection(obj);
    setVideo(obj.video);

    setIndex(index);
    setTitle(obj.name);
    /* bgImage = obj.bg;*/
    /* setBgImage(bgImage);*/

    /*setColor(bgColor);*/
    bgColor = obj.color;
    textColor = obj.textColor;
    setTextColor(textColor);
    setPlayButton(obj.playButton);
    setBgColor(bgColor);

    props.obj.sections.forEach((item, i) => {
      item.selected = false;
    });

    obj.selected = true;
    obj.completed = true;
  };

  return (
    <StyledPart1 id={"part1"}>
      <CentromerParts
        id="centromerParts_1"
        sectionClicked={sectionClicked}
        obj={props.obj.sections}
      ></CentromerParts>

      <StyledVideoWrapper id={"videoWrapper"}>
        <VideoContainer
          playButton={playButton}
          bgColor={bgColor}
          id="videoContainer"
          textColor={textColor}
          index={index}
          title={title}
          video={video}
          data={currentSection}
        />
      </StyledVideoWrapper>
    </StyledPart1>
  );
};
