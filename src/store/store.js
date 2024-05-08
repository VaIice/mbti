import { configureStore, createSlice } from '@reduxjs/toolkit';

const myAnswer = createSlice({
    name: 'myAnswer',
    initialState: [],
    reducers: {
        addMyAnswer(state, action) {
          state.push(action.payload);
        },
        initialMyAnswer() {
          return [];
        }
    }
});

const countAnswer = createSlice({
    name: 'countAnswer',
    initialState: 0,
    reducers: {
      addCountAnswer(state) {
        return state + 1;
      },
      initialCountAnswer() {
        return 0;
      }
    }
});

const result = createSlice({
    name: 'result',
    initialState: {},
    reducers: {
      resultDefine(state, action) {
        return action.payload;
      }
    }
});


export const { addMyAnswer, initialMyAnswer } = myAnswer.actions;
export const { addCountAnswer, initialCountAnswer } = countAnswer.actions;
export const { resultDefine } = result.actions;

export default configureStore({
  reducer: {
    myAnswer: myAnswer.reducer,
    countAnswer: countAnswer.reducer,
    result: result.reducer,    
  },
});