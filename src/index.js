//import react
import React from 'react';
//import render method from react dom
import { render } from 'react-dom';
//import global styles
import './GlobalStyles.css';
//import App component
import { App } from './App';
//import service worker
import * as serviceWorker from './serviceWorker';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

//use service worker
serviceWorker.register();
