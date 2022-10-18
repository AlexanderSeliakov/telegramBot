// export type ReactNode = {
// 	children: React.ReactNode
// }

// export type ButtonProps = {
// 	children: React.ReactNode
// }

export interface ReactNode {
	children?: React.ReactNode
}

export interface ButtonProps extends ReactNode {
	className?: string
	onClick?: () => void
}
