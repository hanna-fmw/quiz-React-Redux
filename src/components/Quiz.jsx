import React from 'react'
import '../App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/scoreSlice'
import { setScreen } from '../redux/quizSlice'
import jigsaw from '../assets/jigsaw.jpg'

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [optionChosen, setOptionChosen] = useState('')

	const dispatch = useDispatch()
	const questions = useSelector((store) => store.questions)

	function nextQuestion() {
		if (questions[currentQuestion].answer === optionChosen) {
			dispatch(increment())
		}

		setCurrentQuestion(currentQuestion + 1)
		console.log(questions)
		console.log(questions[currentQuestion])
	}

	function finishQuiz() {
		if (questions[currentQuestion].answer === optionChosen) {
			dispatch(increment())
		}

		dispatch(setScreen('endScreen'))
	}

	return (
		<div className='QUIZ-CONTAINER leading-6 rounded-2xl flex flex-col items-center shadow-2xl text-xs w-[24rem] h-[90vh]'>
			<img src={jigsaw} alt='Jigsaw' className='rounded-t-2xl ' />

			<div className='bg-[#41C2C8] w-full h-full rounded-b-2xl flex flex-col p-2 gap-4'>
				<div className='font-bold text-white text-base resize-none mt-1 mb-1 rounded-md text-center'>{questions[currentQuestion].prompt}</div>

				<button
					onClick={() => setOptionChosen('A')}
					className='bg-white text-start mb-1 pl-4 py-2 rounded-md focus:ring-[2px] focus:ring-pink-500 hover:border-[2px] hover:border-pink-500'>
					{questions[currentQuestion].optionA}
				</button>
				<button
					onClick={() => setOptionChosen('B')}
					className='bg-white text-start mb-1 pl-4 py-2 rounded-md focus:ring-[2px] focus:ring-pink-500 hover:border-[2px] hover:border-pink-500'>
					{questions[currentQuestion].optionB}
				</button>
				<button
					onClick={() => setOptionChosen('C')}
					className='bg-white text-start mb-1 pl-4 py-2 rounded-md focus:ring-[2px] focus:ring-pink-500 hover:border-[2px] hover:border-pink-500'>
					{questions[currentQuestion].optionC}
				</button>
				<button
					onClick={() => setOptionChosen('D')}
					className='bg-white text-start mb-1 pl-4 py-2 rounded-md focus:ring-[2px] focus:ring-pink-500 hover:border-[2px] hover:border-pink-500'>
					{questions[currentQuestion].optionD}
				</button>
				<div class='text-center pb-2 pt-2'>
					{currentQuestion === questions.length - 1 ? (
						<button onClick={finishQuiz} className='btn-finish'>
							Finish Quiz
						</button>
					) : (
						<button onClick={nextQuestion} className='btn-next'>
							Next Question
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Quiz
