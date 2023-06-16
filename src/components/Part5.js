import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Part5Bg from "../assets/img/mitosis_question_area_big.png";
import VideoButtonBg from "../assets/img/mitosis_textvideo_play.png";
import VideoButtonBgConmpleted from "../assets/img/mitosis_textvideo_play_completed.png";
import InteractionBG from "../assets/img/mitosis_cycle_zoom_slider.png";

import DragRotate from "./DragRotate";
import Pagination from "./Pagination";


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
  user-select: none;
`;

const StyledCorrectAnswerText = styled.div`
  position: absolute;
  top: 300px;
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

  /*background-color: rgba(102, 51, 153, 0.34);*/


  /*border: 2px solid;*/
`;
const StyledPaginationWrapper = styled.div`
  
  position: relative;
  bottom: 200px;
  user-select: none;
  
`;

const Part5 = (props) => {
  let QUESTION_SIZE = props.obj.questions.length;
  const [obj, setObj] = useState(props.obj);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userInteraction, setUserInteraction] = useState(true);
  const [deg, setDeg] = useState(-125);
  let [questionObject, setQuestionObject] = React.useState(props.obj.questions[selectedIndex]);

  let [correctAnswer, setCorrectAnswer] = useState("");



  const handlePageClick = (pageIndex) => {
   /* console.log("pageclicked : ", pageIndex);*/
    setSelectedIndex(pageIndex);
    setQuestionObject(props.obj.questions[pageIndex]);
    setUserInteraction(true);
    setDeg(-125);

  };
  const handleAnswerSubmitted = (answer, deg) => {
    console.log("answer : ", answer);
    console.log("questionObject : ", questionObject);
    setDeg(deg);

    if(answer === questionObject.correctAnswer){
      setCorrectAnswer( "Correct Answer!" );
    }
    else{
      setCorrectAnswer("Wrong Answer! True Answer is " + questionObject.answers[questionObject.correctAnswer]);
    }

    setUserInteraction(false);

  };

  return (
    <StyledContainer>
      <StyledBackground />

      <StyledTitle>{ props.obj.questions[selectedIndex].title }</StyledTitle>
      <StyledQuestionText>{ props.obj.questions[selectedIndex].questionText }</StyledQuestionText>
      <StyledCorrectAnswerText>{ correctAnswer }</StyledCorrectAnswerText>
      <StyledInteraction>
        <StyledDragContainer>
          <DragRotate deg={deg} userInteraction={userInteraction} onAnswerSubmitted={handleAnswerSubmitted}/>


        </StyledDragContainer>

        <StyledPaginationWrapper>
          <Pagination pageCount={QUESTION_SIZE} selectedIndex={selectedIndex} onPageClick={handlePageClick}></Pagination>
        </StyledPaginationWrapper>

      </StyledInteraction>

    </StyledContainer>
  );
};

export default Part5;
