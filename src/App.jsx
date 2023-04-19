import './App.css'

import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import Settings from './components/Settings'
import { useSelector } from 'react-redux'

function App() {
	let screen = useSelector((store) => store.quizStage)

	return (
		<div>
			{screen === 'quiz' && <Quiz />}
			{screen === 'mainMenu' && <MainMenu />}
			{screen === 'endScreen' && <EndScreen />}
			{screen === 'settings' && <Settings />}
		</div>
	)
}

export default App
