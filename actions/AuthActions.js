// -----------------------------------------Axios-----------------------------------------
import axios from 'axios';

export const login = async user => {
	return await axios
		.post('/api/auth', user)
		.then(res => {
			return res.data.user;
		})
		.catch(err => console.log(err));
};
