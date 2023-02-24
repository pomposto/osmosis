import React from "react";
import styled from 'styled-components';
import NavigateButtonBG from'../assets/img/mitosis_progressbutton_inactive.png'
import NavigateButtonBGCompleted from'../assets/img/mitosis_progressbutton_active.png'
import {Button} from "@mui/material";

const StyledFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 12vh;


`;


const StyledButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
 
  background-color: rgba(182,182,231,0.11);
  display: flex;
  justify-content: center;
  position: relative;

`;

const StyledNavigateButton = styled.div`
    margin-left: 10px;
   background-image: url( ${props =>  props.completed === true ? NavigateButtonBGCompleted : NavigateButtonBG } );
   
   width: 40px;
   height: 40px;
   box-sizing: border-box;
   
   border: ${props =>  props.current === true ? "3px solid #cd8a28" : "none"};
   border-radius: 100%;
`;

const StyledButton = styled(Button)`
  
  border-radius: 5px !important;
  height: 40px;
  width: 110px;
  font-size: 18px !important;
  display: block;
  position: absolute !important;
  right: 3em;
  top:0px
  
  
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

            <StyledButton onClick={onClickHandler} variant="contained">Next <b>&nbsp;> </b> </StyledButton>

        </StyledFooter>
    )

}

export const NavigateButton = (props) => {



    return(
       <StyledNavigateButton  completed={props.completed} current={props.current}/>
    )

}