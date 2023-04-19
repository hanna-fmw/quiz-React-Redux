import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
	name: 'quizStage',
	initialState: 'settings',
	reducers: {
		setScreen: (state, action) => {
			return (state = action.payload)
		},
	},
})

export const { setScreen } = quizSlice.actions
export default quizSlice.reducer
