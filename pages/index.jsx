// -----------------------------------------React-----------------------------------------
import React, { useState, useContext } from "react";
// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";
// -----------------------------------------Sass-----------------------------------------
import "../scss/style.scss";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from "reactstrap";
// -----------------------------------------Components-----------------------------------------
import CenteredHeading from "../components/CenteredHeading";
import FeaturedCards from "../components/FeaturedCards";
import Document from "../layouts/document";
import Logo from "../components/Logo";
// -----------------------------------------Actions-----------------------------------------
import { getFrontEndItems } from "../actions/FrontEndActions";
// -----------------------------------------Resources-----------------------------------------

export default () => {
	const { state, actions } = useContext(Context);
	const [time, setTime] = useState("");
	let onChange = async e => {
		let val = e.target.value;
		await getFrontEndItems(val).then(res =>
			actions({
				type: "setState",
				payload: {
					searchQuery: val,
					frontEndPosts: [...res]
				}
			})
		);
	};
	if (!state.frontEndPosts.length > 0)
		getFrontEndItems()
			.then((res = []) => {
				actions({
					type: "setState",
					payload: {
						frontEndPosts: [...res]
					}
				});
			})
			.catch(err => console.log(err));
	let hours = () => new Date().getHours();
	let mins = () => new Date().getMinutes();
	let secs = () => new Date().getSeconds();
	let currentTime = () =>
		`${hours() > 9 ? "" : "0"}${hours() > 12 ? hours() - 12 : hours()}:${
			mins() > 9 ? "" : "0"
		}${mins()}:${secs() > 9 ? "" : "0"}${secs()} ${hours() > 12 ? "PM" : "AM"}`;
	let timeLoop = setInterval(() => setTime(currentTime()), 1000);
	return (
		<Document>
			<Row>
				<header>
					<CenteredHeading picture="https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260">
						{/* <!--  Replace logo image with logo svg  --> */}
						<Container fluid>
							<Row className="hero">
								<Logo />
								<div>
									<div
										style={{ position: "absolute", top: "1em", left: "1em" }}
									>
										{time}
									</div>
									<h1 className="quickSand">
										<span className="accent-2">New York</span> Web Developer
									</h1>
									{/* <!--    On click, add removable tag to search of item clicked, these will be font awesome svgs, with an alt text of the text below    -->
      <p>React, Express, MongoDB, Node, Next, Redux, MySQL, Linux, PHP, Git, Bash, Magento, Wordpress, Bootstrap, Sass, etc...</p>
								<!--    Use search to immediately display related work    --> */}
									<div className="search-container d-none d-md-block">
										<Input
											type="search"
											placeholder="What are you looking for?"
											onChange={onChange}
										/>
										<p className="subsearch">
											Use the search bar above to immediately find{" "}
											<a href="#related-work">related work</a> I've done, or
											scroll down to view my featured projects and front end
											design.
										</p>
									</div>

									{/* <!--    Enter short links here, just icons with hover text    --> */}
									<p>
										<a href="https://github.com/gryphbecrazeh">GitHub</a>,{" "}
										<a href="https://codepen.io/gryphbecrazeh">Codepen</a>,{" "}
										<a href="/projects">Projects</a>
									</p>
									<div className="resume-button">
										<a href="/resume">View Virtual Resume Now</a>
									</div>
								</div>
							</Row>
						</Container>
					</CenteredHeading>
				</header>
			</Row>
			<Row>
				<FeaturedCards id="related-work">
					<h3 className="accent quickSand mb-4">
						<em>
							<span className="accent-2">Featured</span> Work
						</em>
					</h3>
					<p className="elite">
						I dedicate an <em className="accent">absolutely massive</em> amount
						of time to studying and experimenting with my never ending list of
						technologies and design elements. I generally will not go a day
						without playing with some sort of idea, or investigating and
						attempting to recreate an interesting feature I've seen online. My
						codepen is full of random tests, and collections of forks of things
						that I felt were really cool and interesting. So much so that I've
						alloccated some space on my website to feature just that.
					</p>
					<p className="elite">
						Below you will find a lot of front end work that I have found fun
						and interesting, most of which being CSS and Bootstrap renditions of
						mockups I've made or found online. For more advanced front end work,
						feel free to check out my front-end-only react, and{" "}
						<em className="accent">full MERN stack</em> projects{" "}
						<a className="accent" href="/projects">
							here
						</a>
						.
					</p>
					<hr className="mb-5" />
				</FeaturedCards>
			</Row>
		</Document>
	);
};
