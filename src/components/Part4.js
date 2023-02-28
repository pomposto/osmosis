import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Part4Bg from "../assets/img/mitosis_disorders.svg";
import VideoButtonBg from "../assets/img/mitosis_textvideo_play.png";
import VideoButtonBgConmpleted from "../assets/img/mitosis_textvideo_play_completed.png";
import Part4Content from "../assets/img/mitosis_cycle_zoom_slider.png";


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
  background-color: rgba(255,59,191,0.13);
  display: flex;
  justify-content: center;
  align-items: center;
  
  top:180px
`;

const StyledContent = styled.div`
  position: absolute;
  width: 990px;
  height: 368px;
  top: 310px;
  left: 60px;
  background-image: url(${Part4Content});
  background-size: 100% 100% ;
  /*border: 2px solid;*/
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

 
`;

const Part4 = (props) => {
  const [obj, setObj] = useState(props.obj);

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
            {`Video ${video.id}`}
          </StyledVideoButton>
        ))}
      </StyledVideoButtonContainer>


    </StyledContainer>
  );
};

export default Part4;
