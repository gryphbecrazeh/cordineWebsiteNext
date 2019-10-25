import React from "react";
import App from "next/app";
import GlobalStateInjector from "../components/GlobalStateInjector";
import { tokenConfig, loadUser } from "../actions/AuthActions";
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		loadUser()
			.then(res => console.log(res))
			.catch(err => console.log(err));

		return (
			<GlobalStateInjector>
				<Component {...pageProps} />
			</GlobalStateInjector>
		);
	}
}

export default MyApp;
