// -----------------------------------------Axios-----------------------------------------
import axios from "axios";

export const login = async user => {
	console.log("logging in");

	return await axios
		.post("/api/auth", user)
		.then(res => {
			console.log(res);
			localStorage.setItem("token", res.data.user.token);
			return res.data.user;
		})
		.catch(err => console.log(err));
};

export const handleConnection = () => {
	let token = localStorage.getItem("token");
};
