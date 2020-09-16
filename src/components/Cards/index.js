//import react and its hooks
import React, { useState } from 'react';
//import TinderCard
import TinderCard from 'react-tinder-card';
//import styles
import './styles.css';

//create cards component and export it
export const Cards = () => {
	const [people, setPeople] = useState([
		{
			name: 'Hercules',
			url:
				'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*',
		},
		{
			name: 'Lucas',
			url:
				'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900',
		},
	]);

	//swipe function
	const swiped = (direction, nameToDelete) => {
		console.log(`removing ${nameToDelete}`);
		//setLastDirection(direction);
	};

	//out frame function
	const outOfFrame = (name) => {
		console.log(`${name} left the screen`);
	};

	return (
		<>
			{/*All the cards*/}
			<div className='cards'>
				<div className='cards__cardContainer'>
					{people.map((person) => (
						<TinderCard
							className='swipe'
							key={person.name}
							preventSwipe={['upp', 'down']}
							onSwipe={(dir) => swiped(dir, person.name)}
							onCardLeftScreen={() => outOfFrame(person.name)}>
							{/*Background image*/}
							<div
								className='card'
								style={{
									background: `url(${person.url}) no-repeat center center`,
								}}>
								{/*Name*/}
								<h3>{person.name}</h3>
							</div>
						</TinderCard>
					))}
				</div>
			</div>
		</>
	);
};
