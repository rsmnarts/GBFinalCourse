import axios from 'axios';

export const all = () => {
	return {
		type: 'ALL_PRODUCTS',
		payload: axios.get('http://35.187.247.31/products')
	}
}