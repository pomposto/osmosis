import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Part5Bg from "../assets/img/mitosis_question_area_big.png";
import VideoButtonBg from "../assets/img/mitosis_textvideo_play.png";
import VideoButtonBgConmpleted from "../assets/img/mitosis_textvideo_play_completed.png";
import InteractionBG from "../assets/img/mitosis_cycle_zoom_slider.png";

import DragRotate from "./DragRotate";


const StyledContainer = styled.div`
  position: relative;
  top: 70px;
  left: 100px;
  width: 1173px;
  height: 720px;
  
`;
const StyledBackground = styled.div`
  position: absolute;
  width: 1173px;
  height: 720px;
  background-image: url(${Part5Bg});
  
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 65px;
  left: 230px;
  font-size: 40px;
  text-align: left;

  font-family: Roboto;
  font-weight: bold;
  color: #075054;
`;

const StyledQuestionText = styled.div`
  position: absolute;
  top: 220px;
  left: 100px;
  font-size: 24px;
  text-align: left;

  font-family: Roboto;
  font-weight: normal;
  color: #000000;
`;

const StyledInteraction = styled.div`
  position: absolute;
  width: 960px;
  height: 349px;
  top: 351px;
  left: 90px;

  background-image: url(${InteractionBG});
  background-size: 100% 100% ;
  /*border: 2px solid;*/
`;


const StyledDragContainer = styled.div`
  position: absolute;
  width: 960px;
  height: 349px;
  top: 400px;
  left: -10px;

  transform: rotateX(0deg) rotateY(-9deg) rotateZ(12deg);

  background-color: rgba(102, 51, 153, 0.34);


  /*border: 2px solid;*/
`;


const Part5 = (props) => {
  const [obj, setObj] = useState(props.obj);
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log("part5 props : ", props.obj.questions[selectedIndex]);




  return (
    <StyledContainer>
      <StyledBackground />

      <StyledTitle>{ props.obj.questions[selectedIndex].title }</StyledTitle>
      <StyledQuestionText>{ props.obj.questions[selectedIndex].questionText }</StyledQuestionText>
      <StyledInteraction>
        <StyledDragContainer>
          <DragRotate>

          </DragRotate>
        </StyledDragContainer>

      </StyledInteraction>

    </StyledContainer>
  );
};

export default Part5;
