import { useState } from 'react';
import styled from 'styled-components';

const Stick = styled.div`
  width: 950px;
  height: 50px;
  background-color: rgba(255,59,191,0.13);
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
  width: 70%;
  height: 100%;
  
  display: inline-block;
  float: left;

  /*background-color: brown;*/
`;

const StickHalf2 = styled.div`
  width: 30%;
  height: 100%;
  display: inline-block;
  float: left;
  background-color: #622a11;
`;



function DragRotate() {
  const [rotationAngle, setRotationAngle] = useState(-90);

  function handleMouseDown(e) {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseUp(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    const stick = document.querySelector('.stick');
    const stickRect = stick.getBoundingClientRect();
    const centerX = stickRect.left + stickRect.width / 2;
    const centerY = stickRect.top + stickRect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    setRotationAngle(angle * (180 / Math.PI));
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
