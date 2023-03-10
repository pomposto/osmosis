import React, {useState} from "react";
import styled from 'styled-components';
import {CentromerParts} from "./CentromerParts";
import VideoContainer from "./VideoContainer";
import questionBG from '../assets/img/mitosis_question_area1.png';
import TextQuestion from "./TextQuestion";
import Pagination from "./Pagination";

const StyledPart2a = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/
  
  width: 1286px;
  height: 821px;
  
`;
const CentromerPartsWrapper = styled.div`
    width: 400px;
    height: 600px;
    display: inline-block;
    float: left;
    
`;

const StyledQuestionWrapper = styled.div`
    width: 830px;
    height: 720px;
    position: relative;
    left: 500px;
    
    /*background-image: url("../assets/img/mitosis_intro_area.svg");*/
    background-size: 100% 100%;
    
    top:5px;
    box-sizing: border-box;
    
    background-image: url(${questionBG});
    background-position: 0px 0px;
    background-repeat: no-repeat;
    
`;

const StyledPaginationWrapper = styled.div`
  
  position: relative;
  bottom: 100px;
  
`;

export const Part2a = (props) => {
    ////////console.log("Part 2a props  : " , props.obj);
    let obj = props.obj;
    var QUESTION_SIZE = props.obj.questions.length;

    const [selectedIndex, setSelectedIndex] = useState(0);

    let [questionObject, setQuestionObject] = React.useState(props.obj.questions[selectedIndex]);
    let [questionCompleted, setQuestionCompleted] = React.useState(false);
    let [questionResult, setQuestionResult] = React.useState(false);

    ////console.log("q : ", questionObject)
    let sectionClicked = function (obj) {
        if (questionObject.result != "") {
            return;
        }
        ////console.log("section clicked : ", obj.name)

        questionObject.userChoice = obj.name;

        var report = getReportByName(questionObject.type);
        /*//console.log("report : " , props.reports.reports);*/
        //console.log("report : " , report);

        report.questionCount++;
        if (questionObject.userChoice == questionObject.correctChoice)
        {
            questionObject.result = "Your answer is correct.";
            report.correctCount++;
        }
        else
        {
            questionObject.result = "Your answer is wrong. Correct answer is " + questionObject.correctChoice;
        }

        /*setQuestionObject(props.obj.questions[selectedIndex]);*/

        questionObject.completed = true;
        setQuestionObject(questionObject);

        setQuestionCompleted(true);
        setQuestionResult(questionObject.result);

        if(checkComplete())
        {
            props.onPartComplete( "Part2a" , props.reports);
        }

        function getReportByName(name) {
            for (var i = 0; i < props.reports.reports.length; i++) {
                if (props.reports.reports[i].type == name) {
                    return props.reports.reports[i];
                }
            }
        }
    }

    const handlePageClick = (pageIndex) => {

        setSelectedIndex(pageIndex);
        setQuestionObject(props.obj.questions[pageIndex]);

        setQuestionResult(props.obj.questions[pageIndex].result);
        setQuestionCompleted(props.obj.questions[pageIndex].completed);

        ////////console.log("pagination handler :", pageIndex , "obj : " ,  props.obj.questions[pageIndex])
    };

    const handleQuestionCompleted = () => {


        props.obj.questions[selectedIndex] = questionObject;


    };

    const checkComplete = function () {
        for (var i = 0; i < QUESTION_SIZE; i++) {
            if (props.obj.questions[i].result == "") {
                //////console.log("rops.obj.questions[i].result : " , props.obj.questions);

                return false
            }
        }

        return true;
    }

    return (
        <StyledPart2a id={"Part2a"}>
            <CentromerPartsWrapper>
                <CentromerParts id="centromerParts_1" sectionClicked={sectionClicked}
                                obj={props.obj.sections}></CentromerParts>
            </CentromerPartsWrapper>


            <StyledQuestionWrapper className="part2a-question-wrapper">
                <TextQuestion
                    questionObject={questionObject}
                    result={questionResult}
                />

                <StyledPaginationWrapper className="part2a-pagination">
                    <Pagination pageCount={QUESTION_SIZE} selectedIndex={selectedIndex}
                                onPageClick={handlePageClick}></Pagination>
                </StyledPaginationWrapper>

            </StyledQuestionWrapper>


        </StyledPart2a>
    )

}