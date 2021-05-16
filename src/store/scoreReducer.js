import { createReducer } from '@reduxjs/toolkit';

import { setStep, getQuestions } from './actions';

import { questions } from '../utils/data.json';

const initialState = {
  step: 0,
  questionList: questions.sort((a, b) => b.score - a.score),
  currentScore: 0,
};

const scoreReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStep, (state, action) => {
      state.currentScore = state.questionList[action.payload].score;
      state.step += 1;
    })
    .addCase(getQuestions, (state) => {
      state.questionList = questions;
    })
    .addDefaultCase((state) => state);
});

export default scoreReducer;
