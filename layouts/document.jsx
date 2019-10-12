import 'bootstrap/dist/css/bootstrap.min.css';
// -----------------------------------------Next-----------------------------------------
import Head from 'next/head';
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row } from 'reactstrap';
// -----------------------------------------React-----------------------------------------
import React from 'react';
// -----------------------------------------Components-----------------------------------------
import NavBar from '../components/NavBar';
const Document = props => (
	<Container fluid>
		<Row>
			<Head>
				<title>Christopher Cordine New York Based Web Developer</title>
				<link
					href='https://fonts.googleapis.com/css?family=Bangers|Oswald|Quicksand|Shadows+Into+Light|Special+Elite|Vibes&display=swap'
					rel='stylesheet'></link>
			</Head>
			{/* <NavBar /> */}
			{props.children}
		</Row>
	</Container>
);
export default Document;
