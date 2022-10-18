import React from 'react'
import { ButtonProps } from '../Types'

import './button.css'

export const Button = (props: ButtonProps) => {
	return (
		<button {...props} className={`button-${props.className}`}>
			{props.children}
		</button>
	)
}
