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
import FeaturedCards from "../components/FeaturedCards";
import Document from "../layouts/document";
// -----------------------------------------Resources-----------------------------------------

export default () => {
	const { state, actions } = useContext(Context);
	console.log(state);
	let onChange = e => {
		console.log(e.target.value);
	};
	return (
		<Document>
			<Row>
				<header>
					<CenteredHeading picture="https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260">
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
				<FeaturedCards id="related-work">
					<h2>Featured Work</h2>
					<p>
						I like to be constantly busy, and frequently work on several
						projects at a time, and am always writing, working out ideas, and
						prototyping for proof of concept. I've listed a few of my favorite
						work below. These range from a basic HTML and CSS templating, to
						full stack applications with a clear goal in mind.
					</p>
					<p>
						Culpa minim nulla sit elit. Sit dolore sint minim cillum. Elit
						ullamco deserunt sit proident aliquip fugiat aute dolor. Sit
						pariatur laborum duis ad eu qui deserunt irure laborum irure id
						reprehenderit mollit magna. Fugiat deserunt mollit aute voluptate
						pariatur aliquip ullamco cupidatat nulla eiusmod.
					</p>
				</FeaturedCards>
			</Row>
		</Document>
	);
};
