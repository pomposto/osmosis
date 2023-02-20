import React from "react";
import styled from 'styled-components';

const StyledContent = styled.div`
  position: absolute;
  width: 1309px;
  top: 78px;
  left: 28px;
  height: 600px;
  background-color: rgba(45,45,241,0.27);
  box-sizing: border-box;

`;

export const Content = () => {
    return(
        <StyledContent>
            Content işte 11
        </StyledContent>
    )

}