import { FC } from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.Props'
import styles from './Button.module.css'

const Button: FC<ButtonProps> = ({
	children, 
	appearance = 'primary', 
	className,
	...props
}) => {
	const btnStyle = appearance === 'ghost' ? styles.ghost : styles.primary;

	return (
		<button
			className={
				cn(
					styles.button, 
					className, 
					btnStyle
				)
			}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button