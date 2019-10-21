// -----------------------------------------Axios-----------------------------------------
import axios from "axios";

export const login = user => {
	axios
		.post("/api/auth", user)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};
