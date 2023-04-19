import { createSlice } from '@reduxjs/toolkit'

const questionsSlice = createSlice({
	name: 'questions',
	initialState: [],
	reducers: {
		addQuestion: (state, action) => {
			state.push(action.payload)
		},
	},
})

export const { addQuestion } = questionsSlice.actions
export default questionsSlice.reducer
