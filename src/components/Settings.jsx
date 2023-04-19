import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScreen } from '../redux/quizSlice'
import { addQuestion } from '../redux/questionsSlice'

function Settings() {
	const dispatch = useDispatch()
	const questionsArr = useSelector((store) => store.questions)

	const [questionNum, setQuestionNum] = useState(1)
	const [prompt, setPrompt] = useState('')
	const [optionA, setOptionA] = useState('')
	const [optionB, setOptionB] = useState('')
	const [optionC, setOptionC] = useState('')
	const [optionD, setOptionD] = useState('')
	const [answer, setAnswer] = useState('')

	const [showAlert, setShowAlert] = useState(false)

	const newItem = {
		prompt: prompt,
		optionA: optionA,
		optionB: optionB,
		optionC: optionC,
		optionD: optionD,
		answer: answer,
	}

	function addNewQuestion() {
		const input = prompt.trim().toLowerCase()
		input === '' ? handleShowAlert() : dispatch(addQuestion(newItem))
		setPrompt('')
		setOptionA('')
		setOptionB('')
		setOptionC('')
		setOptionD('')
		setAnswer('')
		setQuestionNum((prev) => prev + 1)
	}

	function handleShowAlert() {
		setShowAlert(true)
	}

	function handleOnClose() {
		setShowAlert(false)
	}

	function resetAll() {
		window.location.reload(false)
	}

	return (
		<div className='SETTINGS-CONTAINER bg-[#D7D0E7] leading-6 rounded-2xl flex flex-col items-center shadow-2xl p-4 text-xs w-[24rem] relative'>
			<div className='flex mb-2'>
				<div className='absolute top-5 left-6'>
					<button
						onClick={resetAll}
						className='btn-reset border-none text-center decoration-none text-white py-1 px-1 rounded-md text-xs leading-none font-semibold cursor-pointer'>
						Reset
					</button>
				</div>
				<h2 className='tracking-wider text-[#461d8d] font-extrabold text-2xl'>Settings</h2>
			</div>

			<div className='rounded-2xl p-2 w-full'>
				<div className='mb-4'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter a Question <span className='text-gray-700 text-[9px] tracking-normal '>(max 80 characters)</span>
					</span>
					<textarea
						onChange={(e) => setPrompt(e.target.value)}
						type='text'
						value={prompt}
						spellCheck='false'
						maxlength='80'
						placeholder='What is the capital of Sweden?'
						className='w-[100%] p-2 bg-white rounded-md mt-1 font-normal text-xs focus:outline-none resize-none overflow-hidden:'
					/>
				</div>
				<div className='mb-4'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter Option A <span className='text-gray-700 text-[9px] tracking-normal '>(max 50 characters)</span>
					</span>
					<textarea
						onChange={(e) => setOptionA(e.target.value)}
						type='text'
						value={optionA}
						spellCheck='false'
						maxlength='80'
						placeholder='Madrid'
						className='w-[100%] p-2 bg-white rounded-md mt-1 font-normal text-xs focus:outline-none resize-none'
					/>
				</div>

				<div className='mb-4'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter Option B <span className='text-gray-700 text-[9px] tracking-normal '>(max 50 characters)</span>
					</span>
					<textarea
						onChange={(e) => setOptionB(e.target.value)}
						type='text'
						value={optionB}
						spellCheck='false'
						maxlength='80'
						placeholder='London'
						className='w-[100%] p-2 bg-white rounded-md mt-1 font-normal text-xs focus:outline-none resize-none'
					/>
				</div>
				<div className='mb-4'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter Option C <span className='text-gray-700 text-[9px] tracking-normal '>(max 50 characters)</span>
					</span>
					<textarea
						onChange={(e) => setOptionC(e.target.value)}
						type='text'
						value={optionC}
						spellCheck='false'
						maxlength='80'
						placeholder='Stockholm'
						className='w-[100%] p-2 bg-white rounded-md mt-1 font-normal text-xs focus:outline-none resize-none'
					/>
				</div>
				<div className='mb-4'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter Option D <span className='text-gray-700 text-[9px] tracking-normal '>(max 50 characters)</span>
					</span>
					<textarea
						onChange={(e) => setOptionD(e.target.value)}
						type='text'
						value={optionD}
						spellCheck='false'
						maxlength='80'
						placeholder='Berlin'
						className='w-[100%] p-2 bg-white rounded-md mt-1 font-normal text-xs focus:outline-none resize-none'
					/>
				</div>
				<div className='mb-4 flex gap-4 items-center'>
					<span className='text-black text-xs font-bold tracking-widest'>
						Enter Correct Answer <br />
						<span className='text-gray-700 text-[9px] tracking-normal '>(uppercase A, B, C or D)</span>
					</span>

					<input
						onChange={(e) => setAnswer(e.target.value)}
						type='text'
						value={answer}
						spellCheck='false'
						maxlength='1'
						placeholder='C'
						className='w-[10%] p-1 text-center bg-white rounded-md mt-1 font-normal text-xs focus:outline-none placeholder:text-center'
					/>
				</div>
				<div className='flex justify-center gap-8 mt-4 items-center'>
					<button onClick={addNewQuestion} className='btn-add-q text-white py-3 px-6 rounded-2xl text-xs leading-none font-semibold'>
						Add Question
					</button>

					<div className='count text-white py-2 px-3 rounded-full text-xs leading-none font-bold'>{questionsArr.length}</div>

					<button
						onClick={() => {
							const arrLength = questionsArr.length
							!arrLength ? handleShowAlert() : dispatch(setScreen('mainMenu'))
						}}
						className='btn-go-quiz text-white py-3 px-6 rounded-2xl text-xs leading-none font-semibold'>
						Go to Quiz
					</button>
					{showAlert && (
						<div className='alert'>
							<div className='alert-content'>
								<span className='close' onClick={handleOnClose}>
									&times;
								</span>
								<div>
									Click <span className='font-extrabold'>Reset</span> to reset the form settings. Fill in the fields and click{' '}
									<span className='font-extrabold'>Add question</span> to add each new question. Click{' '}
									<span className='font-extrabold'>Go to Quiz</span> when you´re ready to challenge a friend!
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Settings
