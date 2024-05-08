import 'bootstrap/dist/css/bootstrap.min.css';
import Result from "../components/Result";
import MyNavbar from '../components/MyNavbar';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const { Kakao } = window;

function ResultPage({ id }) {
    const navigate = useNavigate();

    const clickRestart = () => {
        navigate('/test');
    }
    const realUrl = 'https://vaiice.github.io/mbti/';

    useEffect(() => {
        Kakao.cleanup();
        Kakao.init(process.env.REACT_APP_API_KEY);
        Kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            objectType: 'feed',
            content: {
                title: '로스트아크 MBTI',
                description: '#로스트아크 #MBTI',
                imageUrl: 'https://github.com/VaIice/mbti/assets/141003473/0328f1ef-2a47-43b3-8265-464531ef1105',
                link: {
                    // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                    mobileWebUrl: realUrl,
                    webUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: realUrl,
                        webUrl: realUrl,
                    },
                }
            ],
        });
    }, []);


    return (
        <div className="fullContainer">
            <MyNavbar />
            <Result id={id} />
            <Profile />
            <button className="button-main button-restart" onClick={clickRestart}><span className="smallFont">다시하기</span></button>
            <button id="kakaotalk-sharing-btn" className="button-main button-share"><span className="smallFont">공유하기</span></button>
        </div>
    )
}

export default ResultPage;