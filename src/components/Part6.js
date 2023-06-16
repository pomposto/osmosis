import React, {useState} from "react";
import styled from 'styled-components';
import background from "../assets/img/mitosis_situation_area.svg";
import targetsBG from "../assets/img/mitosis_target.png";
import Pagination from "./Pagination";
import ChoiceAndLightRenderer from "./ChoiceAndLightRenderer";



const StyledContainer = styled.div`
  position: relative;
  top: 70px;
  left: 100px;
  width: 1173px;
  height: 720px;

  /*background-color: rgba(255, 0, 0, 0.07);*/

`;

const StyledTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 30px;
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
    
    /*background-image: url(${background});*/
  
`;
const StyledQuestionText = styled.div`
    position: absolute;
    top:70px;
    left: 20px;
    
    width: 1000px;
    text-align: left;
   
    font-size: 24px;
    font-family: Roboto;
`;

const StyledPaginationWrapper = styled.div`
  
  position: absolute;
  bottom: 20px;
  left: 350px;
  user-select: none;
  
`;


const StyledQuestionBodyWrapper = styled.div`
  
  position: absolute;
  top: 170px;
  left: 20px;
  user-select: none;
  
`;

export const Part6 = (props) =>
{
    console.log("part6 props: ", props.obj);
  let QUESTION_SIZE = props.obj.questions.length;
  const [selectedIndex, setSelectedIndex] = useState(0);
  let [questionObject, setQuestionObject] = React.useState(props.obj.questions[selectedIndex]);

  const handlePageClick = (pageIndex) => {

    setSelectedIndex(pageIndex);
    setQuestionObject(props.obj.questions[pageIndex]);

    console.log("pageIndex : ", pageIndex);
    console.log("questionObject : ", questionObject);


  };

    return (
      <StyledContainer>
          <PartBG />
          <StyledTitle>{ questionObject.title }</StyledTitle>
          <StyledQuestionText id={"part6QuestionText"}>{ questionObject.questionText }</StyledQuestionText>

        <StyledQuestionBodyWrapper>
          <ChoiceAndLightRenderer key={selectedIndex} choices={questionObject.choices} initialLights={questionObject.lights} />
        </StyledQuestionBodyWrapper>


        <StyledPaginationWrapper>
          <Pagination pageCount={QUESTION_SIZE} selectedIndex={selectedIndex} onPageClick={handlePageClick}></Pagination>
        </StyledPaginationWrapper>

      </StyledContainer>



    )

}

export default Part6;