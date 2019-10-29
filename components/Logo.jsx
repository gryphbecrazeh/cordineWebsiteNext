// -----------------------------------------React-----------------------------------------
import React, { useContext } from "react";

// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";

// -----------------------------------------Reactstrap-----------------------------------------
import { Tooltip } from "reactstrap";

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
		else window.location = "/";
	};
	// Convert this Component into a tray with links to the virtual resume, github, codepen, and projects
	// add a tool tip to the top that explains the functionality of the icon
	// tray is collapsable
	return (
		<div className="tray d-none d-md-block" id="logo-tray">
			<img src={LogoIcon} alt="" onClick={handleLogin} className="logo" />
			<ul>
				<li className="tray-item">
					<a name="resume" href="/resume">
						Virtual Resume
					</a>
				</li>
				<li className="tray-item">
					<a name="github" href="https://github.com/gryphbecrazeh">
						Github
					</a>
				</li>
				<li className="tray-item">
					<a name="codepen" href="https://codepen.io/gryphbecrazeh">
						Codepen
					</a>
				</li>
				<li className="tray-item">
					<a name="projects" href="/projects">
						Projects
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Logo;
