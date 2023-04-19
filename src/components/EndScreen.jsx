import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../redux/scoreSlice'
import { setScreen } from '../redux/quizSlice'
import stars from '../assets/stars.jpg'

function EndScreen() {
	const dispatch = useDispatch()
	const score = useSelector((store) => store.quizScore)
	const questions = useSelector((store) => store.questions)

	function restartQuiz() {
		dispatch(setScreen('mainMenu'))
		dispatch(reset())
	}

	return (
		<div className='QUIZ-CONTAINER rounded-2xl flex flex-col items-center shadow-2xl bg-white w-[24rem] h-[90vh]'>
			<img src={stars} className='rounded-2xl p-3' alt='Stars' />

			<div className='flex flex-col justify-around items-center pt-8 mt-12 bg-[#D7D0E7] w-full h-full rounded-b-2xl'>
				<div className='font-extrabold text-[#461d8d] text-2xl tracking-widest'>
					You scored <span className='text-[#ff4d00]'> {score} </span> out of <span className='text-[#ff4d00]'> {questions.length}</span>!
				</div>

				<button onClick={restartQuiz} className='btn-restart w-[10rem] mb-4'>
					Restart
				</button>
			</div>
		</div>
	)
}

export default EndScreen
