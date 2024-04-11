import cn from 'classnames'
import { TagProps } from './Tag.Props'
import styles from './Tag.module.css'
import Link from 'next/link'
const Tag = ({children, size = 'md', color = 'ghost', href, className, ...props}:TagProps) => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.gray]: color === 'gray',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary',
			[styles.sm]: size === 'sm',
			[styles.md]: size === 'md',
			[styles.lg]: size === 'lg',
		})}
			{...props}
		>
			{href ? 
				<Link href={href}>{children}</Link>
			 	: <>{children}</>
			}
		</div>
	)
}

export default Tag