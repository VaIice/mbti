import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function MyNavbar() {
    const navigate = useNavigate();

    const clickLogo = () => {
        navigate('/');
    }

    return (
        <img src={process.env.PUBLIC_URL + "/image/logo.png"} className="logo" onClick={clickLogo} alt="logo"></img> 
    )    
}

export default MyNavbar;