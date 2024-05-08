import MyNavbar from '../components/MyNavbar';

function ErrorPage() {
    return (
        <div className="fullContainer">
            <MyNavbar />
            <p className="title">요청하신 페이지를 찾을 수 없습니다.</p>
        </div>
    )
}

export default ErrorPage;