//import axios
import axios from 'axios';

//const instance
export const instance = axios.create({
	baseURL: `http://localhost:8001`,
});

//create the base url
export const getCards = '/tinder/cards';
