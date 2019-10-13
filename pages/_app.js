import React from "react";
import App from "next/app";
import GlobalStateInjector from "../components/GlobalStateInjector";
class MyApp extends App {
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
