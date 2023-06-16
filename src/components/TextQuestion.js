import React, { useState, useEffect } from "react";
import styled from "styled-components";



const Container = styled.div`
 
  width: 100%;
  height: 100%;
  
  /*border: 2px solid;*/
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
  
      /* display: ${(props) => (props.completed==true ? "block" : "none")};*/
  
`;

const TextQuestion = (props) => {
   /* let [questionResult, setQuestionResult] = useState(props.result);*/

    return (
        <Container>
            <QuestionText className="part2a-quesion-text">{props.questionObject.questionText}</QuestionText>

                <ResultText className={"result-text"}>
                    {props.result}
                </ResultText>
            )
        </Container>
    );
};

export default TextQuestion;
