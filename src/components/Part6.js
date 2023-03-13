import React, {useState} from "react";
import styled from 'styled-components';
import background from "../assets/img/mitosis_situation_area.svg";

import Dropdown from "./Dropdown";



const StyledContainer = styled.div`
  position: relative;
  top: 70px;
  left: 100px;
  width: 1173px;
  height: 720px;
  
`;

const StyledTitle = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
  font-size: 40px;
  text-align: left;

  font-family: Roboto;
  font-weight: bold;
  color: #075054;
`;

const PartBG = styled.div`
    position: absolute;
    top:0px;
    left: 0px;
    
    width: 1176px;
    height: 678px;
    
    background-image: url(${background});
  
`;
const StyledReportText = styled.div`
    position: absolute;
    top:170px;
    left: 100px;
    
    width: 1000px;
    text-align: left;
   
    font-size: 24px;
    font-family: Roboto;
`;

const DropDownWrapper = styled.div`
  position: absolute;
  top: 260px;
  left: 650px;
 /* background-color: red;*/

`;

export const Part6 = (props) =>
{
    console.log("part6 props: ", props.obj);

    return (
      <StyledContainer>
          <PartBG />
          <StyledTitle>{ props.obj.reportTitle }</StyledTitle>
          <StyledReportText>{ props.obj.reportText }</StyledReportText>
          <DropDownWrapper>
            <Dropdown></Dropdown>
          </DropDownWrapper>


      </StyledContainer>



    )

}

export default Part6;