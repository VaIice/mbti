import qnaData from '../data/qnaData';
import { useSelector, useDispatch } from 'react-redux';
import { addCountAnswer, addMyAnswer, resultDefine } from "../store/store";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import resultCalculator from '../modules/QuestionPage';
import { findResultNumber } from '../modules/QuestionPage';
import { useState } from 'react';

function Answer() {    
    const countAnswer = useSelector(state => state.countAnswer);
    const myAnswer = useSelector(state => state.myAnswer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <button key={qnaData[countAnswer].answer[0]} className='button-question button-first' onClick={async () => {
                if (countAnswer < 11) {
                    dispatch(addCountAnswer(1));   
                    dispatch(addMyAnswer(0));
                }
                else {
                    try {
                        const result = await resultCalculator(myAnswer);
                        const resultNumber = await findResultNumber(result);
                        dispatch(resultDefine(result));
                        navigate(`/result/${resultNumber}`);
                    } catch (error) {
                        // 에러 처리
                    }
                }
            }}>
                <span className="smallFont">{qnaData[countAnswer].answer[0]}</span>
            </button>
            <button key={qnaData[countAnswer].answer[1]} className='button-question button-second' onClick={async () => {
                if (countAnswer < 11) {
                    dispatch(addCountAnswer(1));   
                    dispatch(addMyAnswer(1));
                }
                else {
                    try {
                        const result = await resultCalculator(myAnswer);
                        const resultNumber = await findResultNumber(result);
                        dispatch(resultDefine(result));
                        navigate(`/result/${resultNumber}`);
                    } catch (error) {
                        // 에러 처리
                    }
                }
            }}>
                <span className="smallFont">{qnaData[countAnswer].answer[1]}</span>
            </button>
        </>
    )
}

export default Answer;