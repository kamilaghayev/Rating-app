import { FC } from 'react'
import cn from 'classnames'
import { ButtonProps } from './Button.Props'
import styles from './Button.module.css'
import Arrow from '@/assets/arrow.svg'

const Button: FC<ButtonProps> = ({
	children, 
	appearance = 'primary',
	arrow = 'none', 
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
			{arrow !== 'none' &&
				<Arrow className={
					cn(
						styles.arrow,
						arrow === 'down' && styles.down
					)
				}/>
			}
		</button>
	)
}

export default Button