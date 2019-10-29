// -----------------------------------------Axios-----------------------------------------
import axios from "axios";

export const login = async user => {
	return await axios
		.post("/api/auth", user)
		.then(res => {
			localStorage.setItem("token", res.data.token);
			return res.data.user;
		})
		.catch(err => console.log(err));
};

export const tokenConfig = () => {
	console.log("getting token");
	// Get token from local storage
	const token = localStorage.getItem("token");
	console.log(token);
	// Headers
	const config = {
		headers: {
			"Content-type": "application/json"
		}
	};
	// If token, add to headers
	if (token) {
		config.headers["x-auth-token"] = token;
	}
	return config;
};

// Check token and load user
export const loadUser = async () => {
	console.log("loading user action");
	// User Loading
	return await axios
		.get("/api/auth/user", tokenConfig())
		.then(res => res)
		.catch(err => console.log(err));
};
