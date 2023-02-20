import React, {useState} from "react";
import styled from 'styled-components';
import {CentromerParts} from "./CentromerParts";
import VideoContainer from "./VideoContainer";
import TextQuestion from "./TextQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import questionBG from '../assets/img/mitosis_question_area_big.png';

import Pagination from "./Pagination";

const StyledPart2 = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/
  
  width: 1286px;
  height: 821px;
  
  /*background: ${props => `url(${props.bg}) no-repeat top center`};*/
  background-position: 200px 0px;

`;

const StyledQuestionWrapper = styled.div`
  
  position: relative;
  width: 1286px;
  height: 821px;
  background-image: url(${questionBG});
  background-position: 0px 0px;
  background-repeat: no-repeat;
  margin-left: 100px;
  margin-top: 50px;
  
`;

const StyledPaginationWrapper = styled.div`
  
  position: relative;
  bottom: 200px;
  
`;

export const Part2b = (props) => {
    let obj = props.obj;
    const QUESTION_SIZE = 5;
    const [selectedIndex, setSelectedIndex] = useState(0);
    let [questionObject, setQuestionObject] = React.useState(props.obj.questions[selectedIndex]);

    const handlePageClick = (pageIndex) => {
        setSelectedIndex(pageIndex);
        setQuestionObject(props.obj.questions[pageIndex]);

    };


    return (
        <StyledPart2 id={"part2"}>


            {/*<TextQuestion questionObject={currentSection.question} ></TextQuestion>*/}

            <StyledQuestionWrapper className="quetion-wrapper">
                <MultipleChoiceQuestion questionObject={questionObject}></MultipleChoiceQuestion>
            </StyledQuestionWrapper>


            <StyledPaginationWrapper>
                <Pagination pageCount={QUESTION_SIZE} selectedIndex={selectedIndex} onPageClick={handlePageClick}></Pagination>
            </StyledPaginationWrapper>


        </StyledPart2>
    )

}