import React from 'react'
import { Button } from '../Button/Button'
import { useTelegram } from '../Hooks/useTelegram'

import './header.css'

export const Header = () => {
	const { onClose, user } = useTelegram()
	console.log(user)

	return (
		<div className='header'>
			<Button onClick={onClose}>Close(Header)</Button>
			<span className='username'>{user?.usernames} userNme</span>
		</div>
	)
}
