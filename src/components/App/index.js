//import React
import React from 'react';
//import Header component
import { Header } from '../Header';
//import cards
import { Cards } from '../Cards';

//export and create app component
export const App = () => {
	return (
		<>
			{/*Header*/}
			<Header />
			{/*Tinder cards*/}
			<Cards />
			{/*Swipe buttons*/}
		</>
	);
};
