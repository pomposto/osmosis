import {useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderThumbIcon from "../assets/img/slider.png";

const Stick = styled.div`
  width: 950px;
  height: 100px;
  /*background-color: rgba(255,59,191,0.13);*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transform-origin: 50% 50%; /* change the rotation origin */
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  will-change: transform; /* add the will-change property to optimize rendering */

`;

const StickHalf1 = styled.div`
  width: 81%;
  height: 100%;
  
  display: inline-block;
  float: left;

  /*background-color: brown;*/
`;

const StickHalf2 = styled.div`
  width: 100px;
  height: 200px;
  display: inline-block;
  float: left;
  
  background-image: url(${SliderThumbIcon});
  transform: rotate(90deg);
  transform-origin: 100% 50%; /* change the rotation origin */
  
`;



function DragRotate({onAnswerSubmitted, userInteraction, deg  }) {
  const [rotationAngle, setRotationAngle] = useState(deg);
  let currentAngle = deg;

  useEffect(() => {
    console.log("drag useeffect : ", deg);
    setRotationAngle(deg);
  }, [JSON.stringify(deg)]);



  function handleMouseDown(e) {
    console.log("userInteraction : ", userInteraction);
    if(userInteraction == false)
    {
      return;
    }
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);


  }

  function handleMouseUp(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    deg = currentAngle * (180 / Math.PI);

    let userAnswer = -1;

    if(deg > -130 && deg < -117) {
      userAnswer = 0;
    }
    else if(deg > -117 && deg < -100) {
      userAnswer = 1;
    }
    else if(deg > -100 && deg < -84) {
      userAnswer = 2;
    }
    else if(deg > -84 && deg < -55) {
      userAnswer = 3;
    }

    onAnswerSubmitted(userAnswer, deg);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    const stick = document.querySelector('.stick');
    const stickRect = stick.getBoundingClientRect();
    const centerX = stickRect.left + stickRect.width / 2;
    const centerY = stickRect.top + stickRect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const angleDeg = angle * (180 / Math.PI);

    if(angleDeg < -130 || angleDeg > -70) {
      return;
    }
    setRotationAngle(angle * (180 / Math.PI));
    currentAngle = angle;

    console.log("angle deg: ", angleDeg);

    const snappingAngles = [-125, -109, -92, -76];
    const closestAngle = snappingAngles.reduce(function(prev, curr) {
      return (Math.abs(curr - angleDeg) < Math.abs(prev - angleDeg) ? curr : prev);
    });
    if (Math.abs(closestAngle - angleDeg) < 30) {
      setRotationAngle(closestAngle);
      currentAngle = closestAngle * (Math.PI / 180);
    }

  }

  return (
    <div>
      <Stick
        className="stick"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)` }}
      >
        <StickHalf1 />
        <StickHalf2 />



      </Stick>
    </div>
  );
}

export default DragRotate;
