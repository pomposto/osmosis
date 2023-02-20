import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Routes, Route, Link, NavLink, useNavigate, useLocation } from "react-router-dom";


import {Header} from "./partials/Header";
import {Footer} from "./partials/Footer";
import {Intro} from "./components/Intro";
import {Part1} from "./components/Part1";
import {Part2a} from "./components/Part2a";
import {Part2b} from "./components/Part2b";
import appData from "./dataset.js"
import {Content} from "./partials/Content";
import styled from "styled-components";
import appContentBG from './assets/img/mitosis_bg.png';

const AppContent = styled.div`
/*background-image: url(${appContentBG});*/
`;


function App() {
    const navigate = useNavigate();
    const location = useLocation();

    let dataSet = appData();


    /*////console.log("loc : " , location.pathname)*/

    var routes =
        [
            {'route':'/' , index:0},
            {'route':'/Part1' , index:1},
            {'route':'/Part2a' , index:2},
            {'route':'/Part2b' , index:3},
        ]

    let partIndex = getIndexByRoute(location.pathname);
    /*////console.log("part index : " , partIndex)*/
    const [obj, setObj] = useState(dataSet.parts[partIndex]);

    /*////console.log("dataset part2a : " , getPartByName(dataSet.parts, "Part2a"))*/

    let Part2aObj = getPartByName(dataSet.parts, "Part2a");
    Part2aObj.questions = shuffleQuestions(Part2aObj.questions);
    let Part2bObj = getPartByName(dataSet.parts, "Part2b");
    Part2bObj.questions = shuffleQuestions(Part2bObj.questions);

    
    function nextClickHandler() {

        partIndex++;
        var partsObj = dataSet.parts[partIndex];
        setObj(partsObj)
       /* ////console.log("partsObj : " , partsObj)*/

        navigate(routes[partIndex].route);

    }

    function getIndexByRoute(route) {
        return routes.findIndex(r => r.route === route);
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


    function shuffleQuestions(questions) {
        // Use the Fisher-Yates shuffle algorithm to shuffle the array
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        return questions;
    }

    function onPartCompleteHandler() {
        ////console.log("Part Complete Handler generate Report")
    }

  return (
    <div className="App">

        <Header></Header>

        <AppContent id='appContent'>
            <Routes>
                <Route path="/" element={ <Intro obj={obj}/> }></Route>
                <Route path="/Part1" element={ <Part1 obj={obj} /> }></Route>
                <Route path="/Part2a" element={ <Part2a obj={obj} onPartComplete={onPartCompleteHandler} /> }></Route>
                <Route path="/Part2b" element={ <Part2b obj={obj} /> }></Route>
            </Routes>
        </AppContent>

        <Footer nextClickedHandler={nextClickHandler} currentPartIndex={partIndex} parts={dataSet.parts}></Footer>



    </div>
  );
}

export default App;
