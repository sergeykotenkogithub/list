import { Mods } from '@/shared/types/Mods'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Button.module.css'

export enum ButtonTheme {
	Default = 'default',
	Success = 'success',
	Danger = 'danger',
}

export enum ButtonSize {
	M = 'size-m',
	L = 'size-l',
}

export enum ButtonSpace {
	Line = 'line',
	Block = 'block',
}

interface IButton {
	children: ReactNode
	link?: string
	theme?: ButtonTheme
	size?: ButtonSize
	className?: string
	space?: ButtonSpace
	onClick?: () => void
}

const Button: FC<IButton> = ({
	children,
	theme = ButtonTheme.Default,
	link = '',
	size = ButtonSize.M,
	space = ButtonSpace.Line,
	className,
	...otherProps
}) => {
	const mods: Mods = {
		[styles[theme]]: true,
		[styles[size]]: true,
		[styles[space]]: true,
	}

	return link ? (
		<a
			className={clsx(styles.button, mods, [className])}
			{...otherProps}
			href={link}
		>
			{children}
		</a>
	) : (
		<button
			type='button'
			className={clsx(styles.button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
