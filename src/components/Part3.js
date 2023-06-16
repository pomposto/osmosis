import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import Part3Bg from "../assets/img/mitosis_cycle_area.svg";
import Part3Content from "../assets/img/mitosis_cycle.png";
/*import Part3Content from "../assets/img/mitosis_cycle_inactive.png";*/

import Part3ContentZoomed from "../assets/img/mitosis_cycle_zoom.png";
import VideoLeft from "../assets/img/mitosis_g2_play.png";
import VideoRight from "../assets/img/mitosis_g1_play.png";
import CloseIcon from "../assets/img/close.svg";
import NextButtonBG from'../assets/img/mitosis_nextbutton.png'

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

const StyledContentZoomed = styled.div`
  position: absolute;
  width: 1118px;
  height: 678px;
  top: 21px;
  left: 24px;
  background-image: url(${Part3ContentZoomed});
  background-position: 0px 121px;
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
  width: 100%;
  height: 100%;
  cursor: pointer;
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
  border-color: rgba(0, 0, 0, 0) transparent transparent transparent;
  cursor: pointer;
`;

const StyledVideoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-color: rgba(0, 0, 0, 0.5);*/

  display: ${(props) => (props.show ? "flex" : "none")};
  
  justify-content: center;
  align-items: center;

  
  
`;

const StyledVideoPopupContent = styled.div`
  position: relative;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: #fff;
  padding: 40px;

  -webkit-box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.56);
  -moz-box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.56);
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.56);
  
`;

const StyledVideoPopupClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-image: url(${CloseIcon});
  background-size: cover;
  cursor: pointer;
`;


const StyledBackButton = styled.div`
  position: absolute;
  top: -50px;
  right: 10px;
  width: 163px;
  height: 100px;
  -webkit-transform: rotate(180deg);
  background-repeat: no-repeat;
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);

  background-image: url(${NextButtonBG});
  cursor: pointer;

`;


const StyledZoomVideoButton = styled.div`
  position: absolute;
  top: 60px;
  left: 17px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 970px 620px 200px 430px;
 /* border-color: rgba(0,123,255,0.16) transparent transparent transparent;*/
  border-color: rgba(55,55,55,50) transparent transparent transparent;
  border-color: rgba(0,0,0,0) transparent transparent transparent;
  cursor: pointer;
`;

const Part3 = (props) => {
  console.log("part3 props : ", props);

  const { videoUrl, videoWidth, videoHeight } = props.obj;

  const [zoomed, setZoomed] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);


  const toggleZoom = () => setZoomed(!zoomed);



  function toggleVideoPopup(e,  obj) {
    setShowVideoPopup(!showVideoPopup);
  }

  function videoItemClicked(index) {
    toggleVideoPopup(true);
    setSelectedVideoIndex(index);
  }


  return (
    <StyledContainer>
      <StyledBackground />
      <StyledContent />

      <StyledVideoItemLeft  onClick={() => videoItemClicked(0)} />
      <StyledVideoItemRight  onClick={() => videoItemClicked(1)} />

      <StyledZoomButton onClick={toggleZoom} />

      <StyledContentZoomed className={'content-zoomed'} zoomed={zoomed}>
        <StyledBackButton onClick={toggleZoom} ></StyledBackButton>
        <StyledZoomVideoButton className={"content-zoomed-video-button"} onClick={() => videoItemClicked(2)} ></StyledZoomVideoButton>
      </StyledContentZoomed>

      <StyledVideoPopup show={showVideoPopup}>
        <StyledVideoPopupContent>
          {selectedVideoIndex !== null && (
            <ReactPlayer
              width={videoWidth}
              height={videoHeight}
              controls
              url={props.obj.videos[selectedVideoIndex].url}
            />
          )}

          <StyledVideoPopupClose
            className={"popup-video-close"}
            onClick={toggleVideoPopup}
          />
        </StyledVideoPopupContent>
      </StyledVideoPopup>


    </StyledContainer>
  );
};

export default Part3;