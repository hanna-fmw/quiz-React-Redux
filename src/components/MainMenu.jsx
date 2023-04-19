import { useDispatch, useSelector } from 'react-redux'
import { setScreen } from '../redux/quizSlice'
import study from '../assets/study.jpg'

function MainMenu() {
	const dispatch = useDispatch()

	return (
		<div className='MAINMENU-CONTAINER rounded-2xl flex flex-col items-center shadow-2xl bg-white w-[24rem] h-[90vh]'>
			<img src={study} className='img-main rounded-2xl p-3' alt='Teacher' />

			<div className='flex flex-col justify-around items-center pt-8 mt-12 bg-[#D7D0E7] w-full h-full rounded-b-2xl'>
				<h2 className='font-extrabold text-[#461d8d] text-2xl tracking-widest'>Learn & Grow</h2>
				<div className='flex flex-col pb-4 mt-20 gap-5'>
					<button
						onClick={() => {
							dispatch(setScreen('quiz'))
						}}
						className='btn-quiz'>
						Start Quiz
					</button>
					<button
						onClick={() => {
							dispatch(setScreen('settings'))
						}}
						className='btn-settings'>
						Back to Settings
					</button>
				</div>
			</div>
		</div>
	)
}

export default MainMenu
