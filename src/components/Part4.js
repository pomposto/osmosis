import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Part4Bg from "../assets/img/mitosis_disorders.svg";
import VideoButtonBg from "../assets/img/mitosis_textvideo_play.png";
import VideoButtonBgConmpleted from "../assets/img/mitosis_textvideo_play_completed.png";
import Part4Content from "../assets/img/mitosis_cycle_zoom_slider.png";
import ReactPlayer from "react-player";
import CloseIcon from "../assets/img/close.svg";


const StyledContainer = styled.div`
  position: relative;
  top: 70px;
  left: 100px;
  width: 1156px;
  height: 710px;
  
`;
const StyledBackground = styled.div`
  position: absolute;
  width: 1177px;
  height: 710px;
  background-image: url(${Part4Bg});
  
`;

const StyledTitle = styled.div`
  position: absolute;
  font-size: 50px;
  text-align: left;
  margin-top: 65px;
  margin-left: 20px;
  font-family: Roboto;
  font-weight: bold;
  color: #075054;
`;

const StyledVideoButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
 /* background-color: rgba(255,59,191,0.13);*/
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  
  padding-left: 7px;
  
  top:180px
`;

const StyledContent = styled.div`


  position: absolute;
  width: 1088px;
  height: 393px;
  top: 310px;
  left: 60px;
  
  background-size: 100% 100%;
  background-position: 1px 1px;
  background-repeat: no-repeat;


  background-image: url(${Part4Content});
`;

const StyledVideoButton = styled.div`
  width: 235px;
  height: 89px;
  
  box-sizing: border-box;
  margin-right: 40px;
  cursor: pointer;

  background-image: url(${VideoButtonBg});
  ${({ completed }) => completed && `
    background-image: url(${VideoButtonBgConmpleted});
  `}
  
  font-family: Roboto;
  font-size: 24px;
  padding-left: 20px;
  text-align: left;
  line-height: 100px;
  overflow: visible;

  display: flex;
  align-items: center;
  justify-content: left;
  
 
`;

const StyledVideoButtonText = styled.div`
  width: 100px;
  height: 20px;
  line-height: 30px;
  padding-top: 11px;
 

  display: flex;
  align-items: center;
  justify-content: center;
 
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

const Part4 = (props) => {
  const [obj, setObj] = useState(props.obj);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  function toggleVideoPopup(e,  obj) {
    setShowVideoPopup(!showVideoPopup);
  }
  const handleClick = (index) => {
    const newVideos = obj.videos.map((video, i) =>
    {
      if (i === index) {
        props.obj.videos[i].completed = true;
        return { ...video, completed: true };
      }

      return video;
    });

    setObj({ ...obj, videos: newVideos });

    toggleVideoPopup(true);
    setSelectedVideoIndex(index);

  };

  return (
    <StyledContainer>
      <StyledBackground />
      <StyledTitle>Mitosis Disorders</StyledTitle>
      <StyledContent />
      <StyledVideoButtonContainer className={'video-button-container'}>
        {obj.videos.map((video, index) => (

          <StyledVideoButton
            completed={video.completed}
            key={video.id}
            onClick={() => handleClick(index)}
            className={'video-button'}
          >

            <StyledVideoButtonText class='video-button-text'>
              {  `${video.name}`}
            </StyledVideoButtonText>

          </StyledVideoButton>

        ))}
      </StyledVideoButtonContainer>


      <StyledVideoPopup show={showVideoPopup}>
        <StyledVideoPopupContent>
          {selectedVideoIndex !== null && (
            <ReactPlayer
              width={props.obj.videos[selectedVideoIndex].width}
              height={props.obj.videos[selectedVideoIndex].height}
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

export default Part4;
