'use client'
import cn from 'classnames'
import Star from '@/assets/star.svg'
import { RatingProps } from './Rating.Props'
import { KeyboardEvent, useEffect, useState } from 'react'
import styles from './Rating.module.css'

const Rating = ({ rating, isEditable = false, setRating, ...props}: RatingProps): JSX.Element => {
	
	const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	
	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		
		const updatedArray = ratingArr.map((r: JSX.Element, i: number) => {
			return (
				<Star
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}

					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					tabIndex={isEditable ? 0 : -1}
					onClick={() => handleClick(i+1)}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i+1, e)}
				/>
			)
		})

		setRatingArr(updatedArray)
	}

	const changeDisplay = (rate: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(rate)
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return;
		}
		setRating(i)
	}
	
	const handleClick = (rate: number) => {
		if(!isEditable || !setRating) {
			return;
		}
		setRating(rate)
	}

	return (
		<div {...props}>
			{ratingArr.map((r: JSX.Element, i: number) => {
				return <span key={i}>{r}</span>
			})}
		</div>
	)
}

export default Rating