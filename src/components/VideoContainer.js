import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import ReactPlayer from "react-player";


import myVideo from '../assets/videos/vid.mp4';

const StyledVideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    top: -22px;
    
    color: ${(props) => (props).textColor};
    background-color: ${(props) => (props).bgColor};
    border-radius: 10px;
    padding-top: 30px;
    
    display: flex;
    justify-content: center;
`;


export default function VideoContainer(props) {

    /*////////console.log("video obj rendered: " , myVideo);*/

    let [videoFilePath] = useState(null);

    React.useEffect(() => {
    });

    videoFilePath = props.url
    /*////////console.log("myVideo ---ss->>  : " , videoFilePath)*/

    return (
        <StyledVideoContainer id="styledVideoContainer" bgColor={props.bgColor} textColor={props.textColor}>
            <div id='videoContainer_videoWrapper'>
                <h1>{props.title} {props.index}</h1>
                <div>{props.data.video.text}</div>

                <ReactPlayer
                    width="700px"
                    height="100%"

                    playing
                    controls
                    /*url={videoFilePath}*/
                    url={'vid.mp4'}
                >
                </ReactPlayer>
            </div>
        </StyledVideoContainer>


    )

}

