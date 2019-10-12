import '../scss/style.scss';
// -----------------------------------------Next-----------------------------------------
import Head from 'next/head';
import Link from 'next/link';
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from 'reactstrap';
// -----------------------------------------React-----------------------------------------
import React from 'react';
// -----------------------------------------Components-----------------------------------------
import CenteredHeading from '../components/CenteredHeading';
import Document from '../layouts/document';
// -----------------------------------------Resources-----------------------------------------

export default () => {
	return (
		<Document>
			<CenteredHeading picture='https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg'>
				{/* <!--  Replace logo image with logo svg  --> */}
				<img
					src='http://cordine.site/static/media/christopher-logo-white.427e237a.png'
					class='logo'
				/>
				<Container fluid>
					<Row className='hero'>
						<div>
							<h1 className='quickSand'>
								<span style={{ color: 'white' }}>New York</span> Web Developer
							</h1>
							{/* <!--    On click, add removable tag to search of item clicked, these will be font awesome svgs, with an alt text of the text below    -->
      <p>React, Express, MongoDB, Node, Next, Redux, MySQL, Linux, PHP, Git, Bash, Magento, Wordpress, Bootstrap, Sass, etc...</p>
								<!--    Use search to immediately display related work    --> */}
							<Input type='search' placeholder='What are you looking for?' />
							<p className='subsearch'>
								Use the search bar above to immediately find{' '}
								<a href='#'>related work</a> I've done, or scroll down to view
								my featured projects and front end design.
							</p>
							{/* <!--    Enter short links here, just icons with hover text    --> */}
							<p>GitHub, Codepen, Resume, Projects</p>
						</div>
					</Row>
				</Container>
			</CenteredHeading>
		</Document>
	);
};
