import React from 'react';
import App from 'next/app';
// -----------------------------------------React Hooks-----------------------------------------
import Context from '../store/context';
import state from '../store/globalState';
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Context.Provider value={state}>
				<Component {...pageProps} />
			</Context.Provider>
		);
	}
}

export default MyApp;
