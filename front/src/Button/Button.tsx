import React from 'react'
import { ButtonProps } from '../Types'

import './button.css'

export const Button = (props: ButtonProps) => {
	return (
		<div {...props} className={`button-${props.className}`}>
			Button
		</div>
	)
}
