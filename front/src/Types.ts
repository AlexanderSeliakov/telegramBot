import { TelegramWebApps } from 'telegram-webapps-types'
export interface ReactNode {
	children?: React.ReactNode
}
export interface ButtonProps extends ReactNode {
	className?: string
	onClick?: () => void
}
export type TelegramHook = () => {
	onClose: () => void
	onToggleButton: () => void
	tg: TelegramWebApps.WebApp
	user: TelegramWebApps.WebAppUser | undefined
}
