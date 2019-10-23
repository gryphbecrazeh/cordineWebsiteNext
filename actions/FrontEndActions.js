// -----------------------------------------Axios-----------------------------------------
import axios from "axios";

export const getFrontEndItems = async () => {
	return axios
		.get("/api/frontEnd")
		.then(res => {
			let response = [];
			if (res.data.length > 0) response = [...res.data];

			return [...response];
		})
		.catch(err => console.log("err"));
};
export const addFrontEndItem = async item => {
	return await axios
		.post(`/api/frontEnd/${item._id}`, item)
		.then(res => res)
		.catch(err => console.log(err));
};
