import React, { useEffect } from 'react'

import './App.css'
import { Button } from './Button/Button'
import { Header } from './Header/Header'
import { useTelegram } from './Hooks/useTelegram'

function App() {
	const { tg, onToggleButton } = useTelegram()

	useEffect(() => {
		console.log('useEffect')
		tg.ready()
	}, [tg])

	return (
		<React.Fragment>
			<Header />
			<div className='App'>works</div>
			<Button onClick={onToggleButton}></Button>
		</React.Fragment>
	)
}

export default App
