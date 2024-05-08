import ResultPage from '../pages/ResultPage';
import { useParams } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

export default function CheckIdValidity() {
    const { id } = useParams();
    const intId = parseInt(id);
    if (intId >= 0 && intId <= 15) {
        return <ResultPage id={intId} />;
    } else {
        return <ErrorPage />
    }
}