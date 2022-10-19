import React, { useEffect, useState } from 'react'

import './App.css'
import { Button } from './Button/Button'
import { Header } from './Header/Header'
import { useTelegram } from './Hooks/useTelegram'

function App() {
	const { tg, onToggleButton, user } = useTelegram()

	const [name, setname] = useState(user?.usernames)

	useEffect(() => {
		console.log('useEffect')
		tg.ready()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const showUser = () => {
		console.log(user)

		setname(() => user?.usernames)
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
