import React, { useState } from "react";
import styled from "styled-components";


import cs from "../assets/img/cellsize_1.png";

const ChoiceAndLightRenderer = ({ choices, initialLights }) => {

  const [lights, setLights] = useState(initialLights);
  const [feedBack, setFeedback] = useState("");

  function onChoiceClick(choiceId) {
    let currentChoice =  choices.find((choice) => choice.id === choiceId);

    checkCondition(currentChoice);
  }
  function checkCondition(choice)
  {
    console.log("cnd : " , choice.check[0]);

    for(var i=0; i<choice.check[0].conditions.length; i++)
    {
      var condition = choice.check[0].conditions[i];
      var light = lights[condition.lightId];

     /* //console.error("check condition    : " , condition , "_" + i);*/


      if(condition.multi == true)
      {
        /*console.log("multi here : " , condition.feedback);*/

        var hasFalseConditions = 0;
        for(var j=0; j<condition.lightId.length; j++)
        {
          var subCondition = {};
          subCondition.lightId = condition.lightId[j];
          subCondition.statement = condition.statement[j];
          subCondition.value = condition.value[j];
          subCondition.effect = condition.effect[j];
          subCondition.feedback = condition.feedback;

          hasFalseConditions = hasFalseConditions + checkStatement(subCondition, lights[subCondition.lightId]  );

          /*console.error("*********sub stt : " ,  checkStatement(subCondition, lights[subCondition.lightId]) ,  "  sub " , subCondition );*/
        }

        /*console.error("hasFalseConditions  =  : " , hasFalseConditions , " cond : " , condition);*/

        if(hasFalseConditions == 0)
        {
          for(var j=0; j<condition.lightId.length; j++)
          {
            var subCondition = {};
            subCondition.lightId = condition.lightId[j];
            subCondition.statement = condition.statement[j];
            subCondition.value = condition.value[j];
            subCondition.effect = condition.effect[j];
            subCondition.feedback = condition.feedback;

            var currentLight = lights[subCondition.lightId];

            console.error("resolve sub effects : " , subCondition , " light : " , currentLight)
            handleStatement(subCondition, currentLight);
          }
        }

      }

      else
      {
        handleStatement(condition, light);
      }
    }
  }


  function checkStatement(condition, light)
  {
     /* console.error("------checkstatement condidion : " , condition.value , "ligth valuıe : " , light.val , "cond statement : " , condition.statement)*/

      if(condition.statement == "==")
      {
        if (light.val == condition.value)
        {

          return 0;
        }
      }

      return 1;
  }

  function handleStatement(condition, light)
  {
    switch (condition.statement)
    {
      case undefined:
        setFeedback(condition.feedback)
        break;

      case "!=":

        if (light.val != condition.value)
        {
          resolveEffect(condition, light);
          ////console.error("condition  fb  222  : " , condition.feedback);
          setFeedback(condition.feedback)
        }
        break;

      case "==":
        /*console.log("handle statement == light : " , light.val , " value  : " , condition.value);*/
        if (light.val == condition.value)
        {
          /*console.error("condition sağlandı : " , condition)*/
          resolveEffect(condition, light);

          setFeedback(condition.feedback)
        }
        break;

      case "<":
        if (light.val < condition.value)
        {
          resolveEffect(condition, light);
          ////console.error("condition  fb   : " , condition.feedback);
          setFeedback(condition.feedback)
        }
        break;

      case "all-green":

        //console.log("all green check : " , lights);

        var  green = true;

        for(var j=0; j<lights.length; j++)
        {
          if(lights[j].val != lights[j].count)
          {
            //console.log("not ready light : " , lights[j]);
            green = false;
          }
        }
        if(green)
        {
          resolveEffect(condition, light);
          ////console.error("condition  fb   : " , condition.feedback);
          setFeedback(condition.feedback)
        }
        break;

      case "all-not-green":
        var  green = true;
        for(var j=0; j<lights.length; j++)
        {
          if(lights[j].val != lights[j].count)
          {
            green = false;
          }
        }
        if(!green)
        {
          setFeedback(condition.feedback)
        }

        break;
    }


/*    console.error("0 : " , lights[0].val);
    console.error("1 : " , lights[1].val);
    console.error("2 : " , lights[2].val);

    console.error("" , lights[2].val);*/
  }

  function resolveEffect(condition, light)
  {
    let currentEffect = condition.effect;
    let currentLight = light;

    if(currentEffect == "")
    {
      return;
    }
    else if(currentEffect == "+")
    {

      if(lights[light.id].val < lights[light.id].count)
      {
        lights[light.id].val++;
      }

      setLights(lights);

      /*lights[light.id] = light;*/
     /* setLights(lights);*/

      /*//console.error("lights 2 : " , lights);*/

     /* setLights(prevLights => {
        const newLights = [...prevLights];
        const index = newLights.findIndex(l => l.id === currentLight.id);
        newLights[index] = {...newLights[index], val: currentLight.val + 1};

       /!* newLights.map(function(element){
          console.log("elemenmt : " , element);
        });*!/

        return newLights;
      });*/
    }
    else if(currentEffect == "-")
    {
      setLights(prevLights => {
        const newLights = [...prevLights];
        const index = newLights.findIndex(l => l.id === currentLight.id);
        newLights[index] = {...newLights[index], val: currentLight.val - 1};

        //console.log("update lights here  : " , newLights);

        return newLights;
      });
    }

    else if(currentEffect == "complete")
    {
      //handle complete
    }


    //update lights part  here


  }

  return (
    <Container>
      <Choices>
        {choices.map((choice) => (
          <Choice key={choice.id} onClick={() => onChoiceClick(choice.id)}>
            {choice.text}
          </Choice>
        ))}
      </Choices>

      <Lights>
        {
                  lights.map(({ id, variable, val, visible, count }) =>
                  {
                    if (!visible) {
                      return "null";
                    }
                    let filledCount = val;

                    //console.log("filledCount *************************** : " , filledCount);

                    return (
                      <LightGroup id={"light_group_" + id} key={id}>
                        <Label>{variable}</Label>


                        {Array.from({ length: count }, (_, i) => (
                          <Light
                            key={i*2}
                            isDimmed={  i >= filledCount}
                            id={"light_" + id + "_" + i + " "  + filledCount}
                          />
                        ))}

                      </LightGroup>
                    );
                })
        }

        <FeedbackText id={"feedbackText"}>{feedBack}</FeedbackText>
      </Lights>



      <Images id={"imagesss"}>
        {
                lights.map(({ id, val, images }) =>
                {
                  //console.log("images val : " , images[val]);

                  if(images[val] != "")
                  {
                    return(
                      <Image key={id}> <img src={require('../assets/img/' + images[val])} /> </Image>
                    )
                  }
                })
        }
      </Images>

    </Container>
  );
};

const Images = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  right: 86px;
  top: 0px;
  
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0px;
  top: 0px;


   /* background: ${props => `url(${props.imageBG}) no-repeat top center`};*/
`;



const FeedbackText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 350px;
  height: 50px;
  /*background-color: red;*/
  color: #c9c9c9;
  
  position: absolute;
  
  bottom: 30px;
  left: 489px;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1100px;
  height: 430px;
  padding: 20px;
  
  background-color: black;
`;

const Choices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  
  margin-right: 30px;
  float: left;
`;

const Choice = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 6px;
  border-radius: 5px;
  background-color: #eee;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;

const Lights = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
`;

const LightGroup = styled.div`
  display: block;
  margin-bottom: 10px;
  width:100%;
  
`;

const Light = styled.div`
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${({ isDimmed }) => (isDimmed ? "red" : "green")};
  
  display:inline-block ;
  float: left;
  
`;

const Label = styled.div`
  width: 200px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
  font-family: Roboto;

  color: white;
  display:inline-block ;
  float: left;
`;


export default ChoiceAndLightRenderer;
