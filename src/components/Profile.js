import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const clickProfile = () => {
        window.open('https://www.youtube.com/@stupidondol');
    }
    
    const clickName = () => {
        window.open('https://www.youtube.com/watch?v=FgEkAbbEkek');
    }

    return (
        <>
            <img className="profile" onClick={clickProfile} src={process.env.PUBLIC_URL + "/image/profile.jpg"} alt="logo"></img> 
            <p className="profile-name" onClick={clickProfile}><i className="fa-brands fa-youtube icon"></i> 바보온돌</p>
            <p className='content content-animation'>
                이 테스트는 유튜버 바보온돌님의 콘텐츠를 웹 사이트로 재구성한 것입니다.
            <br/>
            원본 영상을 보시려면 <span className="name" onClick={clickName}><span className="letter-space">[</span>바보온돌님의 채<span className="letter-space">널</span>]</span>을 방문해주세요.
            </p>            
        </>
    )    
}

export default Profile;