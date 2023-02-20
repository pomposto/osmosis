import React, { useState, useEffect } from "react";
import styled from "styled-components";



const Container = styled.div`
 
  width: 100%;
  height: 100%;
  
  border: 2px solid;
  position: relative;
`;

const QuestionText = styled.div`
    position: absolute;
    left: 100px;
    top:200px;
    height: 100px;
    display: block;
    font-size: 20px;
    font-weight: normal;
    text-align: left; 
    width: 600px;
    height: 140px;
    
   
`;

const ResultText = styled.div`
        position: absolute;
        left: 100px;
        bottom: 120px;
        font-size: 20px;
        font-weight: normal;
        text-align: left; 
  
       display: ${(props) => (props.completed==true ? "block" : "none")};
  
`;

const TextQuestion = ({ questionObject, userChoice, onQuestionComplete }) => {
    /*let [isCorrect, setIsCorrect] = useState(null);*/


    console.log("questionObject : " , questionObject)


    useEffect(() =>
    {
        console.log("user eff")
        onQuestionComplete();
    }, [userChoice, onQuestionComplete, questionObject]);

    //console.log("isc  : ", isCorrect)

    return (
        <Container>
            <QuestionText className="part2a-quesion-text">{questionObject.questionText}</QuestionText>
            {questionObject.isCorrect !== null && (
                <ResultText className={"result-text"} isCorrect={questionObject.isCorrect} completed={questionObject.completed}>
                    {
                        questionObject.isCorrect
                        ? "Your answer is correct."
                        : `Your answer is incorrect. The correct choice is ${questionObject.correctChoice}.`
                    }
                </ResultText>
            )}
        </Container>
    );
};

export default TextQuestion;
