import React, { useEffect } from 'react'

import './App.css'
import { Button } from './Button/Button'
import { Header } from './Header/Header'
import { useTelegram } from './Hooks/useTelegram'

function App() {
	const { tg, onToggleButton, user } = useTelegram()

	useEffect(() => {
		tg.ready()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<React.Fragment>
			<Header />
			<div className='App'>works</div>
			<Button onClick={onToggleButton}>Toggle</Button>
			<h1>{user?.username}</h1>
		</React.Fragment>
	)
}

export default App
