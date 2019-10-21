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
