import { createSlice } from '@reduxjs/toolkit'

const scoreSlice = createSlice({
	name: 'quizScore',
	initialState: 0,
	reducers: {
		increment: (state) => {
			return (state += 1)
		},
		reset: (state) => {
			return (state = 0)
		},
	},
})

export const { increment, reset } = scoreSlice.actions
export default scoreSlice.reducer
