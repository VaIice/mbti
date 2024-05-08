import mbtiData from "../data/mbtiData";

const resultCalculator = (myAnswer) => {
    const mbti = [['I', 'E'], ['S', 'N'], ['F', 'T'], ['P', 'J']];

    return new Promise((resolve, reject) => {
        let count0 = 0;
        let count1 = 0;
        let result = '';
        for (let i = 0, j = 0 ; i < 12; i++) {
            if (i % 3 === 2) {
                count0 > count1 ? result += mbti[j][0] : result += mbti[j][1];
                count0 = count1 = 0;
                j++;
            }
            myAnswer[i] ? count1++ : count0++;
        }
        resolve(result);
    });
}

export const findResultNumber = (result) => {
    return mbtiData.find(mbti => mbti.type === result).id;
}

export default resultCalculator;