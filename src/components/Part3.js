import React, { useState, useEffect } from "react";

import Part3Bg from '../assets/img/mitosis_cycle_area.svg';
import Part3Content from '../assets/img/mitosis_cycle_inactive.png';
import Part3ContentZoomed from '../assets/img/mitosis_cycle_zoom.png';
import VideoLeft from '../assets/img/mitosis_g2_play.png';
import VideoRight from '../assets/img/mitosis_g1_play.png';

import styled from "styled-components";


const StyledContainer = styled.div`
  position: relative;
  top: 70px;
  left: 100px;
  width: 1156px;
  height: 710px;
`;

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${Part3Bg});
`;

const StyledContent = styled.div`
  position: absolute;
  width: 802px;
  height: 604px;
  top: 50px;
  left: 200px;
  background-image: url(${Part3Content});
`;

const SyledContentZoomed = styled.div`
  position: absolute;
  width: 1118px;
  height: 678px;
  top: 21px;
  left: 24px;
  background-image: url(${Part3ContentZoomed});
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-color: #fffefd;

  display: ${(props) => (props.zoomed ? "block" : "none")};
`;

const StyledVideoItemLeft = styled.div`
  position: absolute;
  top: 450px;
  left: 40px;
  width: 245px;
  height: 129px;

  background-image: url(${VideoLeft});
`;

const StyledVideoItemRight = styled.div`
  position: absolute;
  top: 430px;
  left: 690px;
  width: 385px;
  height: 189px;

  background-image: url(${VideoRight});
`;

const StyledVideoButton = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 50px;

  background-color: red;
`;

const StyledZoomButton = styled.div`
  position: absolute;
  top: 60px;
  left: 307px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 300px 220px 130px 170px;
  border-color: rgba(0, 123, 255, 0.16) transparent transparent transparent;
  cursor: pointer;

`;


const Part3 = (props) => {

  console.log("props.obj 3 : ", props.obj);

   let [zoomed, setZoomed] = useState(false);

  return (

    <StyledContainer>
      <StyledBackground></StyledBackground>
      <StyledContent>

      </StyledContent>

      <StyledVideoItemLeft>
        {/*<StyledVideoButton></StyledVideoButton>*/}
      </StyledVideoItemLeft>

      <StyledVideoItemRight>
        {/*<StyledVideoButton></StyledVideoButton>*/}
      </StyledVideoItemRight>

      <StyledZoomButton onClick={() => setZoomed(!zoomed)}></StyledZoomButton>

      <SyledContentZoomed zoomed={zoomed}></SyledContentZoomed>

    </StyledContainer>

  );
};

export default Part3;