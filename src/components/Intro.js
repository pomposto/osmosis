import styled from 'styled-components';
import React from "react";
import VideoContainer from "./VideoContainer";
import ReactPlayer from "react-player";

const StyledIntro = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/
  
  width: 1286px;
  height: 760px;
  
 /*background-color: red;*/

`;

const StyledVideoWrapper =styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    /*background-image: url("../assets/img/mitosis_intro_area.svg");*/
    background-size: 100% 100%;
    float: left;
    top:5px;
    box-sizing: border-box;
    
`;


export const Intro = (props) => {

    var obj = props.obj;
    console.log("intro obj :", obj);
    let textColor = obj.textColor;
    let bgColor = obj.bgColor;
    let videoData = props.obj.video;

    console.log("videoData.url : " , videoData.url)

    return(
      <StyledIntro>

          <StyledVideoWrapper id={"videoWrapperIntro"} >

              <ReactPlayer
                width={videoData.width}
                height={videoData.height}
                playing
                controls

                /*url={"../assets/videos/" + videoData.url}*/
               /* url={"../assets/videos/vid.mp4"}*/
               /* url={"../assets/videos/intro.mp4"}*/
                url={"../assets/videos/vid2.mp4"}
               /* url={require(`../assets/videos/${videoData.url}`).default}*/

                /*url={require("../assets/videos/vid.mp4").default}*/
              >
              </ReactPlayer>

          </StyledVideoWrapper>

      </StyledIntro>
    )
}
