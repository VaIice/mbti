import Question from "../components/Question";
import Answer from "../components/Answer";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "../components/MyNavbar";
import { useEffect } from "react";
import { initialCountAnswer, initialMyAnswer } from "../store/store";

function QuestionPage() {
    const countAnswer = useSelector(state => state.countAnswer);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initialCountAnswer());
        dispatch(initialMyAnswer());
    }, [])
    
    let now = (countAnswer / 12)*100;
    return (
        <>
        <div className="fullContainer">
            <MyNavbar />
            <ProgressBar className="progressBar" now={now} label={`${now}%`} visuallyHidden style={{ '--bs-progress-bar-bg': 'var(--color-highlight)' }} />
            <Question/>
            <Answer/>
        </div>            
        </>
    )
}

export default QuestionPage;