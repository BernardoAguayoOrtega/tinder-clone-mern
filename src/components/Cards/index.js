//import react and its hooks
import React, { useState } from 'react';
//import TinderCard
import TinderCard from 'react-tinder-card';

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
				'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg',
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
		<div className='cards'>
			<div className='cards__cardContainer'>
				{people.map((person) => (
					<TinderCard
						className='swipe'
						key={person.name}
						preventSwipe={['upp', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}>
						{person.name}
					</TinderCard>
				))}
			</div>
		</div>
	);
};
