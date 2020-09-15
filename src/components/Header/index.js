//import react
import React from 'react';
//import icons
import PersonIcon from '@material-ui/icons/Person';
//import Icon button
import { IconButton } from '@material-ui/core';
//import Logo
import { Logo } from '../Logo';
//import the styles
import './styles.css';

//create and export header component
export const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header__icon' />
			</IconButton>
			<Logo className='header__logo' />
		</div>
	);
};
