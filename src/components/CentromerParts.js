import React, {useState} from "react";
import styled from 'styled-components';


const StyledCentromerParts = styled.div`
  width: 399px;
  height: 801px;
  position: relative;
  left: 40px;
  top: 20px;
  float: left;
  display: inline-block;

`;

const StyledCentromerPartsBG = styled.div`

  position: absolute;
  
  width: 399px;
  height: 801px;
  
  
  /*background-image: url(${props => "../assets/img/" + props.bg});*/

  background-image: url(${props => require("../assets/img/" + props.bg)});
  
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const StyledSectionsContainer = styled.div`
    display: inline-block;
    float: left;
    width: 300px;
    height: 782px;
   
    top: 50px;
    left: 167px;
    
    transform-origin: 0px 0px;

  z-index: 10;

`;

const StyledSection = styled.div`
    display: block;
    float: left;
    width: 310px;
    height: 170px;
    
    
     &:nth-child(1) .selection-dom { top:0px; }
     &:nth-child(2) .selection-dom { top:-80px; }
     &:nth-child(3) .selection-dom { top:-17px; }
     &:nth-child(4) .selection-dom { top:-20px; }
     position: relative;
     cursor: pointer;

  z-index: 10;

  
`;

const StyledSectionSelect = styled.div`
  position: absolute;
  width: 175px;
  height: 200px;
  
  background: ${props => `url(${props.bg}) no-repeat top center`};
  display: ${props => (props.selected && props.selected) ? 'block' : 'none'};
  
  top: 3px;
  left: -70px;

  z-index: 10;
`;

const StyledSectionName = styled.div`
 
  color: ${props => (props.color)};
  
  padding-top: 20px; 
  font-size: 13px;
  font-size: 13px;
  position: absolute;
  top: 75px;
  left: 196px;
  width: 100px;
  font-weight: bold;
  text-align: center;
  
`;

const StyledSectionBG = styled.div`
 
    background-color:  ${props => (props.color)};

    
    position: absolute;
    left: 162px;
    top: ${props => props.index * 170 + 26}px;
    width: 140px;
    
    border-radius: 100px;
    /*clip-path: inset( -4% 0% -15% 11%);*/
    height: 140px;

    display: ${props => (props.selected) ? 'block' : 'none'};
  
  z-index: 0;

}`;


export const CentromerParts = (prop) => {

    var sections = prop.obj;
    var currentIndex = 0;

    const [background, setBackground] = useState(sections[0].bg);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const sectionClicked = function (obj, index) {
        prop.sectionClicked(obj);
        setBackground(obj.bg);
        setSelectedIndex(index);
        currentIndex = obj.index;

        console.error("selected index : " , obj.index)
        console.error("index : " , index)
    }

    return (
      <StyledCentromerParts className={'partttt-select-' + selectedIndex} id="centromerParts">

          {sections.map((section, index) => (
          <StyledSectionBG
            key={index}
            index={index}
            color={section.color}
            selected={selectedIndex === index}
            className={'section-bg' + section.bg}
          />
        ))}
         { <StyledCentromerPartsBG className={"centromer-parts-bg" + sections[selectedIndex].bg} bg={sections[selectedIndex].bg }></StyledCentromerPartsBG>}

          <StyledSectionsContainer id="sectionsContainer">


              {sections.map((section, index) => (
                <Section
                  key={index}
                  color={section.color}
                  sectionClicked={sectionClicked}
                  data={section}
                />
              ))}

          </StyledSectionsContainer>
      </StyledCentromerParts>
    )
}

const Section = (props) => {

    var obj = props.data;
    /*////////console.log("section obj :", obj);*/
    const clickHandler = function () {
        props.sectionClicked(obj, obj.index);
    }

    return (
        <StyledSection selected={props.data.selected} onClick={clickHandler}>
            <StyledSectionSelect className="selection-dom" background={obj.arrowBG} color={props.data.color}
                                 selected={props.data.selected} id={"selection_" + obj.name}></StyledSectionSelect>




            <StyledSectionName className="section-name" color={obj.textColor}>
                {obj.name}<br/>Hotspot
            </StyledSectionName>




        </StyledSection>
    )
}