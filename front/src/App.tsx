import React, { useEffect, useState } from 'react'

import './App.css'
import { Button } from './Button/Button'
import { Header } from './Header/Header'
import { useTelegram } from './Hooks/useTelegram'

function App() {
	const { tg, onToggleButton, user } = useTelegram()

	const [name, setname] = useState('')
	useEffect(() => {
		console.log('useEffect')
		tg.ready()
	}, [tg])

	const showUser = () => {
		setname((prevState: string) => user?.usernames || '')
	}
	return (
		<React.Fragment>
			<Header />
			<div className='App'>works</div>
			<Button onClick={onToggleButton}>Toggle</Button>
			<h1>{name}</h1>
			<Button onClick={showUser}>Show Name</Button>
		</React.Fragment>
	)
}

export default App
