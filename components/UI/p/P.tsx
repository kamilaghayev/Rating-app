import { PtagProps } from './Ptag.props'
import cn from 'classnames'
import styles from "./Ptag.module.css"
const P = ({ size = 'md', children, className, ...props }: PtagProps) => {

	const pSize = size === 'sm' ? styles.sm : size === 'md' ? styles.md : styles.lg;
	return (
		<p className={
			cn(
				pSize,
				className
			)
		}
			{...props}
		>
			{children}
		</p>
	)
}

export default P