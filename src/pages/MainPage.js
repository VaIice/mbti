import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import { initialCountAnswer, initialMyAnswer } from "../store/store";
import { useEffect } from "react";

function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clickStartButton = () => {
        navigate("/test");
    }
    
    useEffect(() => {
        dispatch(initialCountAnswer());
        dispatch(initialMyAnswer());
    }, [])

    return (
        <div className="fullContainer">
            <MyNavbar />
            <p className="title">로스트아크 <span className="purple">MBTI</span>별 유형 테스트</p>
            <p className="content">본 테스트는 유튜버 바보온돌님의 콘텐츠를 웹 사이트로 제작하여 만들었습니다.
                                    <br/><span className="purple-less">MBTI별</span> 모험가 유형을 정확하게 판별하는 것은 아니며,
                                    <br/>정확한 결과를 제공하기보다는 재미와 즐거움을 목적으로 제작되었습니다.
                                    <br/>양해 부탁드립니다 :)</p>
            <button className="button-main" onClick={clickStartButton}><span>시작하기</span></button>
        </div>
    )
}

export default MainPage;