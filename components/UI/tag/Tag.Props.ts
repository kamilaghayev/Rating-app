import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type divProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface TagProps extends divProps {
	children: ReactNode,
	className?: string,
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary',
	href?: string,
	size?: 'sm' | 'md' | 'lg',
}