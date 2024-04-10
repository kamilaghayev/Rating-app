import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type ButtonHTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export interface ButtonProps extends ButtonHTMLProps {
	children: ReactNode;
	className?: string;
	appearance?: "primary" | "ghost";
}