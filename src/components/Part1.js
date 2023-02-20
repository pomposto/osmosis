import React from "react";
import styled from 'styled-components';
import {CentromerParts} from "./CentromerParts";
import VideoContainer from "./VideoContainer";
import backgroundVideoArea from '../assets/img/mitosis_videoarea.svg';


const StyledPart1 = styled.div`
  position: relative;
  /*background-color: rgba(255,127,80,0.49);*/
  
  width: 1286px;
  height: 821px;
  
  
  
`;

const StyledVideoWrapper =styled.div`
    width: 830px;
    height: 700px;
    position: relative;
    display: inline-block;
    /*background-image: url("../assets/img/mitosis_intro_area.svg");*/
    background-size: 100% 100%;
    
    float: left;
    top:5px;
    box-sizing: border-box;
    
    background-image: url(${backgroundVideoArea});
    background-position: 0px 0px;
    background-repeat: no-repeat;
    
`;

export const Part1 = (props) => {
    ////console.log("Part 1 props  : " , props);

    var currentSectionIndex = 0;

//Update child components prop and rerender from parent component in react
    let [currentSection, setCurrentSection] = React.useState(props.obj.sections[currentSectionIndex]);
    currentSection = props.obj.sections[currentSectionIndex];

    let [title, setTitle] = React.useState(props.obj.sections[currentSectionIndex].name);
    let [index, setIndex] = React.useState(1);
/*
    let [bgImage, setBgImage] = React.useState(props.obj.sections[currentSectionIndex].bg);
*/
    /*let [bgColor, setColor] = React.useState(props.obj.sections[currentSectionIndex].color);*/
    let [textColor, setTextColor] = React.useState(props.obj.sections[currentSectionIndex].textColor);
    let [url, setUrl] = React.useState(props.obj.sections[currentSectionIndex].video.url);


    let sectionClicked = function (obj) {

        currentSection = obj;
        setCurrentSection(obj);
        setIndex(index);
        setTitle(obj.name);
       /* bgImage = obj.bg;*/
       /* setBgImage(bgImage);*/
       /* bgColor = obj.color;*/
        /*setColor(bgColor);*/
        textColor = obj.textColor;
        setTextColor(textColor);

        props.obj.sections.forEach((item, i) => {
            item.selected = false;
        });

        obj.selected = true;
        obj.completed = true;

        /*console.error("props now : " , props.obj.sections)*/

    }

    return(
        <StyledPart1 id={"part1"} >

           <CentromerParts id="centromerParts_1" sectionClicked={sectionClicked} obj={props.obj.sections }></CentromerParts>

           <StyledVideoWrapper id={"videoWrapper"}>
               <VideoContainer id="videoContainer" textColor={textColor}   index={index} title={title}  url={url} data={currentSection}/>
           </StyledVideoWrapper>

        </StyledPart1>
    )

}