import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useRoutes,
} from "react-router-dom";

import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { Intro } from "./components/Intro";
import { Part1 } from "./components/Part1";
import { Part2a } from "./components/Part2a";
import { Part2b } from "./components/Part2b";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Part5 from "./components/Part5";
import Part6 from "./components/Part6";
import Reports1 from "./components/Reports1";
import appData from "./dataset.js";
import { Content } from "./partials/Content";
import styled from "styled-components";
import appContentBG from "./assets/img/mitosis_bg.png";


const AppContent = styled.div`
  /*background-image: url(${appContentBG});*/
`;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  let dataSet = appData();

  var routes = [
    { route: "/", index: 0 },
    { route: "/Part1", index: 1 },
    { route: "/Part2a", index: 2 },
    { route: "/Part2b", index: 3 },
    { route: "/Part2c", index: 4 },
    { route: "/Part3", index: 5 },
    { route: "/Part4", index: 6 },
    { route: "/Part5", index: 7 },
    { route: "/Part5b", index: 8 },
    { route: "/Part6", index: 9 },
  ];

  let partIndex = getIndexByRoute(location.pathname);
/*  console.log("part index : " , partIndex)
  console.log("part index : " , dataSet.parts)
  console.log("location.pathname : " , location.pathname)*/
  const [obj, setObj] = useState(dataSet.parts[partIndex]);


  let [reportObj1, setReportObj1] = useState(getPartByName(dataSet.parts, "Part2c"));
  let [reportObj2, setReportObj2] = useState(getPartByName(dataSet.parts, "Part2c"));

  var Part2aObj = getPartByName(dataSet.parts, "Part2a");
  Part2aObj.questions = shuffleQuestions(Part2aObj.questions);
  Part2aObj.questions = getQuestions(Part2aObj.questions, 1, 1, 1, 1);

  var Part2bObj = getPartByName(dataSet.parts, "Part2b");
  Part2bObj.questions = shuffleQuestions(Part2bObj.questions);
  Part2bObj.questions = getQuestions(Part2bObj.questions, 1, 1, 1, 1);

  var Part5bObj = getPartByName(dataSet.parts, "Part5b");
  Part5bObj.questions = shuffleQuestions(Part5bObj.questions);
  Part5bObj.questions = getQuestions(Part5bObj.questions, 1, 1, 1, 1);

  function nextClickHandler() {
    partIndex++;
    var partsObj = dataSet.parts[partIndex];
    setObj(partsObj);

    navigate(routes[partIndex].route);
  }

  function getIndexByRoute(route) {
    return routes.findIndex((r) => r.route === route);
  }

  function getPartByName(arr, partName) {
    for (let i = 0; i < arr.length; i++) {
      const part = arr[i];

      if (part.name && part.name === partName) {
        return part; // Return the first matching part object
      }
    }

    return null;
  }

  function getQuestions(arr, telomere, euchro, centromere, hetero) {
    var newArr = [];
    var te = 0;
    var eu = 0;
    var ce = 0;
    var he = 0;

    var i = 0;
    while (te + eu + ce + he < telomere + euchro + centromere + hetero) {
      var currentQuestion = arr[i];
      if (currentQuestion.type == "Telomere") {
        if (te < telomere) {
          newArr.push(currentQuestion);
          te++;
        }
      } else if (currentQuestion.type == "Euchromatin") {
        if (eu < euchro) {
          newArr.push(currentQuestion);
          eu++;
        }
      } else if (currentQuestion.type == "Centromere") {
        if (ce < centromere) {
          newArr.push(currentQuestion);
          ce++;
        }
      } else if (currentQuestion.type == "Heterochromatin") {
        if (he < hetero) {
          newArr.push(currentQuestion);
          he++;
        }
      }
      i++;
      i = i % arr.length;
    }

    return newArr;
  }

  function shuffleQuestions(questions) {
    // Use the Fisher-Yates shuffle algorithm to shuffle the array
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions;
  }

  function onPartCompleteHandler(name, obj) {
    //console.log("Part Complete Handler generate Report : " , obj);
    switch (name) {
      case "Part2a":
        setReportObj1(obj);

        break;

      case "Part2b":
        setReportObj1(obj);
        break;

      case "Part5b":
        setReportObj2(obj);


        break;
    }
  }

  const handleResize = () => {
    const ratio = window.innerWidth / 2700;

    document.getElementById("mainApp").style.transform = "scale(" + ratio + ")";
  };
  /*handleResize();*/
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <div id="mainApp" className="App">
      <Header></Header>

      <AppContent id="appContent">
        <Routes>
          <Route path="/" element={<Intro obj={obj} />}></Route>
          <Route path="/Part1" element={<Part1 obj={obj} />}></Route>
          <Route
            path="/Part2a"
            element={
              <Part2a
                obj={obj}
                reports={reportObj1}
                onPartComplete={onPartCompleteHandler}
              />
            }
          ></Route>
          <Route
            path="/Part2b"
            element={
              <Part2b
                obj={obj}
                reports={reportObj1}
                onPartComplete={onPartCompleteHandler}
              />
            }
          ></Route>

          <Route path="/Part2c" element={<Reports1 obj={reportObj1} />}></Route>
          <Route path="/Part3" element={<Part3 obj={obj} />}></Route>
          <Route path="/Part4" element={<Part4 obj={obj} />}></Route>
          <Route path="/Part5" element={<Part5 obj={obj} />}></Route>

          <Route
            path="/Part5b"
            element={
              <Part2b
                obj={obj}
                reports={reportObj2}
                onPartComplete={onPartCompleteHandler}
              />
            }
          ></Route>

          <Route path="/Part6" element={<Part6 obj={obj} />}></Route>

        </Routes>
      </AppContent>

      <Footer
        nextClickedHandler={nextClickHandler}
        currentPartIndex={partIndex}
        parts={dataSet.parts}
      ></Footer>
    </div>
  );
}

export default App;
