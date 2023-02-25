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

    background-image: url(${props => props.bg});
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

`;

const StyledSection = styled.div`
    display: block;
    float: left;
    width: 310px;
    height: 166px;
    
    
     &:nth-child(1) .selection-dom { top:0px; }
     &:nth-child(2) .selection-dom { top:-80px; }
     &:nth-child(3) .selection-dom { top:-17px; }
     &:nth-child(4) .selection-dom { top:-20px; }
     position: relative;
     cursor: pointer;

  
`;

const StyledSectionSelect = styled.div`
  position: absolute;
  width: 175px;
  height: 200px;
  
  /*background: ${props => `url(${props.bg}) no-repeat top center`};*/
  display: ${props => (props.selected && props.selected) ? 'block' : 'none'};
  
  top: 3px;
  left: -70px;
`;
const StyledSectionName = styled.div`
 
 color: ${props => (props.color)};
 
 padding-top: 20px; 
 font-size: 18px;
 position: absolute;
  top: 50px;
  left: 180px;
 width: 100px;
 font-weight: bold;
 text-align: center;
  
  
 
`;

export const CentromerParts = (prop) => {

    var sections = prop.obj;

    const [background, setBackground] = useState(sections[0].bg);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sectionClicked = function (obj) {
        prop.sectionClicked(obj);
        setBackground(obj.bg);
        setSelectedIndex(obj.index);
    }

    return (
        <StyledCentromerParts className={'part-select-' + selectedIndex}  id="centromerParts"   >
            {/* <StyledCromosomImage src={CromosomImage}/>*/}
            <StyledSectionsContainer id="sectionsContainer">
                <Section color={sections[0].color} sectionClicked={sectionClicked} data={sections[0]}>

                </Section>

                <Section color={sections[1].color} sectionClicked={sectionClicked} data={sections[1]}>

                </Section>

                <Section color={sections[2].color} sectionClicked={sectionClicked} data={sections[2]}>

                </Section>

                <Section color={sections[3].color} sectionClicked={sectionClicked} data={sections[3]}>

                </Section>


            </StyledSectionsContainer>
        </StyledCentromerParts>
    )
}

const Section = (props) => {

    var obj = props.data;
    /*////////console.log("section obj :", obj);*/
    const clickHandler = function () {
        props.sectionClicked(obj);
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