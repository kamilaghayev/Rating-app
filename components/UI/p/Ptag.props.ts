import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type ptag = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export interface PtagProps extends ptag {
	children: ReactNode,
	className?: string,
	size?: 'sm' | 'md' | 'lg',
}