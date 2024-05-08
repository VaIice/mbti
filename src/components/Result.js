import ResultCalculator from "../modules/ResultPage";
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import mbtiData from "../data/mbtiData";
import { useEffect } from "react";


function Result({ id }) {

    return (
        <>
            <p className="type">당신은 <span className="purple">{mbtiData[id].type}</span>입니다.</p>
            <p className="introduction">{mbtiData[id].introduction}</p>
            <br/>
        </>
    )
}

export default Result;