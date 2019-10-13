import { useState } from "react";

const useGlobalState = () => {
	let [state, setState] = useState({
		searchQuery: "",
		auth: { user: null, isAuth: false }
	});
	const actions = action => {
		let { type, payload } = action;
		switch (type) {
			case "setState":
				return setState({ ...state, ...payload });
			default:
				return state;
		}
	};
	return { state, actions };
};

export default useGlobalState;
