import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface RatingProps extends DivProps {
	rating: number
	isEditable?: boolean;
	setRating?: (rating: number) => void;
	className?: string;
}