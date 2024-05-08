import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import CheckIdValidity from './modules/ResultPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

function App() {

  class character {
    constructor(q, w) {
      // 자식들에 직접 각인
      this.q = q;
      this.w = w;
    }
  }

  // 부모에 각인
  character.prototype.name = 'kim';

  const nunu = new character('strike', 'snowball');
  
  // 유전자처럼 사용 가능 
  // 결과: kim
  console.log(nunu.name);

  // 동일한 코드
  const arr = [1, 2, 3, 4];
  
  Array.prototype.removeTwo = function () {
    return this.filter(item => item !== 2);
  }
  console.log(arr.removeTwo());

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
