import qnaData from '../data/qnaData';
import { useSelector } from 'react-redux';

function Question() {
    const countAnswer = useSelector(state => state.countAnswer);

    return (
        <div className='question' key={qnaData[countAnswer].question}>
            <span>Q{countAnswer + 1}. {qnaData[countAnswer].question}</span>
        </div>
    )
}

export default Question;