import React, { useState } from "react";
import styled from "styled-components";
import correctIcon from "../assets/img/correct.png";
import wrongIcon from "../assets/img/wrong.png";
import questionBG from '../assets/img/mitosis_question_area_big.png';

const QuestionContainer = styled.div`
  width: 820px;
  height: 600px;
 /* background-color: ${(props) => props.backgroundColor || "#ffffff"};*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-left: 100px;
  
  background-position: 100px 0px;
  background-repeat: no-repeat;
`;

const QuestionText = styled.div`
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
  width: 100%;
  text-align: left;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  text-align: left;
  width: 100%;
  
  
`;

const ChoiceButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 40px;
  border: none;
  border-radius: 20px;
  border: 3px solid #c9c9c9;
  font-size: 20px;
  /*background-color: ${(props) => (props.isSelected ? "#0070f3" : "#ffffff")};*/
 /* color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};*/
  color: #000000;
  cursor: pointer;
  text-align: left;

  &:hover {
    /*background-color: ${(props) => (props.isSelected ? "#0070f3" : "#d9d9d9")};*/
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: default;
    background-color: #f1f1f1;
    color: #a9a9a9;
  `}
`;

const ResultIcon = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  height: 20px;
  width: 20px;
`;

const CorrectAnswer = styled.p`
  margin-top: 40px;
  color: #008000;
  
  width: 200px;
  padding-left: 70px;
`;

const MultipleChoiceQuestion = ({ questionObject, onQuestionCompleted }) => {
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showResult, setShowResult] = useState(false);

    /*////////console.log("questionObject : " , questionObject)*/

    const handleChoiceClick = (choice) => {

        setSelectedChoice(choice);
        setShowResult(true);
        questionObject.userChoice = choice;
        questionObject.completed = true;

        //console.log("currentQuestion : " , questionObject)

        if (choice === questionObject.correctChoice)
        {
            onQuestionCompleted(questionObject.type, true);
        }
        else
        {
            onQuestionCompleted(questionObject.type, false);
        }
    };

    const renderResultIcon = (choice) => {

        if(questionObject.completed === false)
        {
            setShowResult(false);
            return "";
        }

        if (choice === questionObject.correctChoice)
        {
            return <ResultIcon src={correctIcon} alt="Correct" />;
        }
        else
        {
            return <ResultIcon src={wrongIcon} alt="Wrong" />;
        }
    };

    if(questionObject.completed == true)
    {
        renderResultIcon(questionObject.userChoice)
    }

    const renderChoices = () => {
        return (
            <ChoiceContainer>

                <ChoiceButton
                    isSelected={selectedChoice === "A"}
                    onClick={() => handleChoiceClick("A")}
                    disabled={showResult}
                >
                    {questionObject.choiceA}
                    {showResult && renderResultIcon("A")}
                </ChoiceButton>

                <ChoiceButton
                    isSelected={selectedChoice === "B"}
                    onClick={() => handleChoiceClick("B")}
                    disabled={showResult}
                >
                    {questionObject.choiceB}
                    {showResult && renderResultIcon("B")}
                </ChoiceButton>

                <ChoiceButton
                    isSelected={selectedChoice === "C"}
                    onClick={() => handleChoiceClick("C")}
                    disabled={showResult}
                >
                    {questionObject.choiceC}
                    {showResult && renderResultIcon("C")}
                </ChoiceButton>

                <ChoiceButton
                    isSelected={selectedChoice === "D"}
                    onClick={() => handleChoiceClick("D")}
                    disabled={showResult}
                >
                    {questionObject.choiceD}
                    {showResult && renderResultIcon("D")}
                </ChoiceButton>

                <ChoiceButton
                    isSelected={selectedChoice === "E"}
                    onClick={() => handleChoiceClick("E")}
                    disabled={showResult}
                >
                    {questionObject.choiceE}
                    {showResult && renderResultIcon("E")}
                </ChoiceButton>

            </ChoiceContainer>
        );
    };

    const renderCorrectAnswer = () => {
        return (
            <CorrectAnswer>
                The correct answer is <strong>{questionObject.correctChoice}</strong>
            </CorrectAnswer>
        );
    };

    return (
        <QuestionContainer >
            <QuestionText className="question-text"> {questionObject.questionText}</QuestionText>
            {renderChoices()}
            {showResult && renderCorrectAnswer()}
        </QuestionContainer>
    );
};

export default MultipleChoiceQuestion;