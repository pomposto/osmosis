import React from "react";
import styled from 'styled-components';
import logo from '../assets/img/mitosis_logo.svg'

const StyledHeader = styled.div`
    position: relative;
    top: 0px;
    height: 8vh;
    background-color: #dbdbdb;
    text-align: left;

  
`;

const StyledImg = styled.img`
    position: relative;
    top: 0px;
    left: 0px;
    height: 8vh;

  
`;

export const Header = () => {

    /* logo gelecek*/

    return <StyledHeader>


            <StyledImg src={logo}/>

    </StyledHeader>
}