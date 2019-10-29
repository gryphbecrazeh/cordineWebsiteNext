import React from "react";
import App from "next/app";
import GlobalStateInjector from "../components/GlobalStateInjector";
import { tokenConfig, loadUser } from "../actions/AuthActions";
import useGlobalState from "../store/useGlobalState";
class MyApp extends App {
	componentDidMount() {
		console.log("loading user");
		loadUser()
			.then(res =>
				useGlobalState.actions({ type: "setUser", payload: { ...res.data } })
			)
			.catch(err => console.log(err));
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<GlobalStateInjector>
				<Component {...pageProps} />
			</GlobalStateInjector>
		);
	}
}

export default MyApp;
