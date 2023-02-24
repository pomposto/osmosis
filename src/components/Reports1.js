import React, { useState, useEffect } from "react";
import styled from "styled-components";
import reportsBG from '../assets/img/mitosis_report.png';



const Container = styled.div`
 
  width: 1255px;
  height: 771px;
  left: 71px;
  /*border: 2px solid;*/
  position: relative;
  background-image: url(${reportsBG});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  
  padding-top: 300px;
  padding-left: 100px;
  box-sizing: border-box;
`;

const StyledReportText = styled.div`
 
  width: 100%;
  font-size: 24px ;
  text-align: left;
  height: 100px;
  
`;


const Reports = (props) => {


    const reports = props.obj.reports;
    console.log("Reports1 here" , reports);

    return (
        <Container className="reports-container">
            <ReportText questionCount={reports[0].questionCount} type={reports[0].type} correctCount={reports[0].correctCount}></ReportText>
            <ReportText questionCount={reports[1].questionCount} type={reports[1].type} correctCount={reports[1].correctCount}></ReportText>
            <ReportText questionCount={reports[2].questionCount} type={reports[2].type} correctCount={reports[2].correctCount}></ReportText>
            <ReportText questionCount={reports[3].questionCount} type={reports[3].type} correctCount={reports[3].correctCount}></ReportText>
        </Container>
    );
};

export default Reports;


const ReportText = (props) => {

    console.log("report text here" , props);

    return (
        <StyledReportText> {props.questionCount} of question were about {props.type}s You answered {props.correctCount} corrrectly. </StyledReportText>
    )
}
