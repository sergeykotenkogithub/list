import clsx from 'clsx'
import { FC, ReactNode, memo } from 'react'
import styles from './Title.module.css'

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center',
}

interface ITitle {
	children: ReactNode
	align?: TextAlign
}

const Title: FC<ITitle> = memo(props => {
	const { align = TextAlign.CENTER, children } = props
	const mods = {
		[styles[align]]: true,
	}
	return <h1 className={clsx(mods)}>{children}</h1>
})

export default Title
