import React from "react";
import styled from 'styled-components';
import NavigateButtonBG from'../assets/img/mitosis_progressbutton_inactive.png'
import NavigateButtonBGCompleted from'../assets/img/mitosis_progressbutton_active.png'
import NextButtonBG from'../assets/img/mitosis_nextbutton.png'
/*import {Button} from "@mui/material";*/

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 80px;


`;


const StyledButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
 
  /*background-color: rgba(182,182,231,0.11);*/
  display: flex;
  justify-content: center;
  position: relative;

`;

const StyledNavigateButton = styled.div`
  margin-left: 10px;
   background-image: url(${props => props.completed === true ? NavigateButtonBGCompleted : NavigateButtonBG});

  /*background-color: #8c8ce7;*/

  width: 40px;
  height: 40px;
  box-sizing: content-box;

 /* border: ${props => props.current === true ? "3px solid #cd8a28" : "none"};*/

  opacity: ${props => props.current === true ? "1" : "0.2"};
  border-radius: 100%;
`;

/*const StyledButton = styled(div)`*/
const StyledButton = styled.div`
  
  border-radius: 5px !important;
  height: 40px;
  width: 164px;
  
  display: block;
  position: absolute !important;
  right: 5em;
  top:0px;
  color: white;

  background-image: url(${NextButtonBG});
  font-size: 24px;
  font-weight:bold ;
  padding-top: 5px;
  text-align: center;
  
  background-repeat: no-repeat;
  font-family: Roboto;
  user-select: none;
  cursor: pointer;
  
  
`;

export const Footer = (props) => {



    function onClickHandler() {

        props.nextClickedHandler();
    }

    return(
        <StyledFooter id="footer">

            <StyledButtonContainer>
                {
                    props.parts.map(function (part)
                    {
                        /*console.error("i : " , part)*/
                        return <NavigateButton  key={part.id} index={part.id} current={ props.currentPartIndex === part.id }  completed={ part.completed }  />;
                    })
                }
            </StyledButtonContainer>

            <StyledButton onClick={onClickHandler} variant="contained">NEXT </StyledButton>

        </StyledFooter>
    )

}

export const NavigateButton = (props) => {



    return(
       <StyledNavigateButton  completed={props.completed} current={props.current}/>
    )

}