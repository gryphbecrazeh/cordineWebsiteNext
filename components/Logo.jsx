// -----------------------------------------React-----------------------------------------
import React, { useContext } from "react";

// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";

// -----------------------------------------Resources-----------------------------------------
import LogoIcon from "../images/chrisWebsiteLogo-W.svg";

const Logo = () => {
	const { state, actions } = useContext(Context);
	let loginReady = state.searchQuery.match(/login/gim);
	const openModal = () => {
		actions({
			type: "setState",
			payload: {
				auth: { isAuth: false },
				searchQuery: ""
			}
		});
	};
	const handleLogin = () => {
		if (loginReady) openModal();
	};
	// Convert this Component into a tray with links to the virtual resume, github, codepen, and projects
	// add a tool tip to the top that explains the functionality of the icon
	// tray is collapsable
	return (
		<img
			src={LogoIcon}
			alt=""
			onClick={handleLogin}
			className="logo"
			style={{ cursor: loginReady ? "pointer" : "default" }}
		/>
	);
};
export default Logo;
