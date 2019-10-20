// -----------------------------------------React-----------------------------------------
import React, { useContext } from "react";

// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";

// -----------------------------------------Resources-----------------------------------------
import LogoIcon from "../images/chrisWebsiteLogo-W.svg";

const Logo = () => {
	const { state, actions } = useContext(Context);
	const handleLogin = () => {
		console.log(state.searchQuery.match(/login/gim));
		console.log("login");
	};
	return <img src={LogoIcon} alt="" onClick={handleLogin} className="logo" />;
};
export default Logo;
