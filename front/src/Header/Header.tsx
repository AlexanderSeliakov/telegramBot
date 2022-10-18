import React from 'react'
import { Button } from '../Button/Button'

import './header.css'

export const Header = () => {
	const tg = Telegram.WebApp
	const onClose = () => {
		tg.close()
	}
	return (
		<div className='header'>
			<Button onClick={onClose}>Close</Button>
			<span className='username'>{tg?.initDataUnsafe.user?.usernames}</span>
		</div>
	)
}
