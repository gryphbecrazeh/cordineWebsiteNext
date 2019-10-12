let state = {
	auth: {},
	searchQuery: ''
};
let actions = ({ action, payload }) => {
	switch (action) {
		case 'search':
			state.searchQuery = payload;
		default:
			return state;
	}
};

export default state;
