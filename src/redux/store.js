import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './scoreSlice'
import quizReducer from './quizSlice'
import questionsReducer from './questionsSlice'

export const store = configureStore({
	reducer: {
		quizScore: scoreReducer,
		quizStage: quizReducer,
		questions: questionsReducer,
	},
})
