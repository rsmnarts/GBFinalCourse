import axios from 'axios';

export const all = () => ({
	type: 'ALL_PRODUCTS',
	payload: axios.get('http://2429a5dd.ngrok.io/products')
})