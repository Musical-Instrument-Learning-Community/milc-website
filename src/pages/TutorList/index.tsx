import React from 'react'
import { data, TutorInfo } from '../Home/components/PreviewSection/data'
import './TutorList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FilterBar} from './FilterBar/FilterBar'


library.add(faStar, faStarHalf)

interface TutorCardProps {
	key: string
	info: TutorInfo
}

const TutorCard: React.FunctionComponent<TutorCardProps> = ({ key, info }) => {
	return (
		<div className = 'TutorCardContainer'>
			<img src={info.photo} alt='tutor' />
			<div className='TutorName'>{info.name}</div>
			<div className='TutorRate'>
				<FontAwesomeIcon className='star'icon={faStar} />
				{info.rate.toFixed(2)}(10 reviews)
			</div>
			<div className ='TutorIntro'  >{info.intro} </div>
			<div className='priceTag'>
				${info.price}/h
			</div>
		</div>
	)
}

const TutorCards: React.FunctionComponent = () => {
	const cards = data.map((item:TutorInfo) => {
		// eslint-disable-next-line react/jsx-key
		return  <TutorCard   key={item.name} info={item} />

	})

	return(
		<div className='TutorCardsContainer'>
				{cards}
		</div>
	)
}


export default function TutorList() {
	return (
		<>
			<div className='Subtitle'>Tutor List</div>
			<div className='intro'>Discover Your Perfect Private Tutor in Australia</div>
			<FilterBar/>
			<TutorCards />
		</>
	)
}
