// -----------------------------------------Axios-----------------------------------------
import axios from "axios";

export const getFrontEndItems = () => {
	axios
		.get("/api/frontEnd")
		.then(res => {
			return [...res.data];
		})
		.catch(err => console.log("error", err));
};
export const addFrontEndItem = item => {
	axios
		.post("/api/frontEnd", item)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};
