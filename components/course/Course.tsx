'use client'

import { useState } from 'react'
import { H } from '../UI'
import { Rating } from '..'

const Course = () => {
	const [rate, setRate] = useState(2)
	
	return (
		<div>
			<H tag='h3'>Next Course</H>
			<Rating rating={rate} isEditable setRating={setRate}/>
		</div>
	)
}

export default Course