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
  /*background-position: 200px 0px;*/

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

export const Part2b = (props) =>
{
    let obj = props.obj;
    let QUESTION_SIZE = props.obj.questions.length;
    const [selectedIndex, setSelectedIndex] = useState(0);
    let [questionObject, setQuestionObject] = React.useState(props.obj.questions[selectedIndex]);

    const handlePageClick = (pageIndex) => {
        setSelectedIndex(pageIndex);
        setQuestionObject(props.obj.questions[pageIndex]);

    };

    /*console.log("2b reports : " , props.reports.reports);*/
    const handleQuestionCompleted = (type, res) =>
    {
         //console.log("question completed :" , type, " res  : " , res);
         var report = getReportByName(type);
         report.questionCount++;
         if(res){report.correctCount++};

         //console.log("completeed ? : " , checkComplete())
         if(checkComplete())
         {
             props.onPartComplete( "Part2b" , props.reports);
         }

        function getReportByName(type) {
            for (var i = 0; i < props.reports.reports.length; i++) {
                if (props.reports.reports[i].type == type) {
                    return props.reports.reports[i];
                }
            }
        }
    }

    const checkComplete = function () {
        for (var i = 0; i < QUESTION_SIZE; i++) {
            if (props.obj.questions[i].completed == false) {

                return false
            }
        }

        return true;
    }


    return (
        <StyledPart2 id={"part2"}>


            <StyledQuestionWrapper className="quetion-wrapper">
                <MultipleChoiceQuestion questionObject={questionObject}  onQuestionCompleted={handleQuestionCompleted} ></MultipleChoiceQuestion>
            </StyledQuestionWrapper>


            <StyledPaginationWrapper>
                <Pagination pageCount={QUESTION_SIZE} selectedIndex={selectedIndex} onPageClick={handlePageClick}></Pagination>
            </StyledPaginationWrapper>


        </StyledPart2>
    )

}