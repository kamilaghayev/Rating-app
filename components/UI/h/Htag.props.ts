import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type hProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
export interface HtagProps extends hProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
	children: ReactNode
}