// -----------------------------------------Axios-----------------------------------------
import axios from 'axios';

export const getFrontEndItems = async () => {
	return axios
		.get('/api/frontEnd')
		.then(res => {
			console.log(res.data);
			return [...res.data];
		})
		.catch(err => console.log('error', err));
};
export const addFrontEndItem = async item => {
	return await axios
		.post('/api/frontEnd', item)
		.then(res => res)
		.catch(err => console.log(err));
};
