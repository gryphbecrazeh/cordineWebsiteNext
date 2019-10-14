import React from "react";
// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";
import useGlobalState from "../store/useGlobalState";

const GlobalStateInjector = ({ children }) => {
	const store = useGlobalState();
	return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default GlobalStateInjector;
