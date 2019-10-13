// -----------------------------------------Sass-----------------------------------------
import "../scss/style.scss";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from "reactstrap";
// -----------------------------------------React-----------------------------------------
import React, { useContext } from "react";
// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";
// -----------------------------------------Components-----------------------------------------
import CenteredHeading from "../components/CenteredHeading";
import Document from "../layouts/document";
// -----------------------------------------Resources-----------------------------------------

export default () => {
	const { state, actions } = useContext(Context);
	console.log(state);
	let onChange = e => {
		console.log(e.target.value);
	};
	// 4117x2745
	// 2058 x 1372
	return (
		<Document>
			<Row>
				<header>
					<CenteredHeading picture="https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
						{/* <!--  Replace logo image with logo svg  --> */}
						<Container fluid>
							<Row className="hero">
								<img
									src="http://cordine.site/static/media/christopher-logo-white.427e237a.png"
									className="logo"
								/>

								<div>
									<h1 className="quickSand">
										<span style={{ color: "white" }}>New York</span> Web
										Developer
									</h1>
									{/* <!--    On click, add removable tag to search of item clicked, these will be font awesome svgs, with an alt text of the text below    -->
      <p>React, Express, MongoDB, Node, Next, Redux, MySQL, Linux, PHP, Git, Bash, Magento, Wordpress, Bootstrap, Sass, etc...</p>
								<!--    Use search to immediately display related work    --> */}
									<div className="search-container">
										<Input
											type="search"
											placeholder="What are you looking for?"
											onChange={onChange}
										/>
									</div>
									<p className="subsearch">
										Use the search bar above to immediately find{" "}
										<a href="#">related work</a> I've done, or scroll down to
										view my featured projects and front end design.
									</p>
									{/* <!--    Enter short links here, just icons with hover text    --> */}
									<p>
										<a href="https://github.com/gryphbecrazeh">GitHub</a>,{" "}
										<a href="https://codepen.io/gryphbecrazeh">Codepen</a>,{" "}
										<a href="/">Download Resume</a>,{" "}
										<a href="/projects">Projects</a>
									</p>
								</div>
							</Row>
						</Container>
					</CenteredHeading>
				</header>
			</Row>
			<Row>
				<section id="related-work">Test</section>
			</Row>
		</Document>
	);
};
