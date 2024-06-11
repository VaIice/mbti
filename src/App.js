import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import CheckIdValidity from './modules/ResultPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<QuestionPage />} />
        <Route path="/result/:id" element={<CheckIdValidity />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>       
    </BrowserRouter>
  );
}

export default App;
