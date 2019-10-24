// -----------------------------------------React-----------------------------------------
import React, { useState, useContext, Fragment } from "react";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from "reactstrap";
// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";
// -----------------------------------------Components-----------------------------------------
import AddPostModal from "./AddPostModal";
import FeatureCard from "./FeatureCard";
// -----------------------------------------Resources-----------------------------------------

const FeaturedCards = ({ id, children }) => {
	const { state, actions } = useContext(Context);
	let [modal, toggleModalOpen] = useState({ isOpen: false });
	let toggleModal = () => {
		toggleModalOpen({ ...modal, isOpen: !modal.isOpen });
	};
	let addPost = (
		<Fragment>
			<Button className="addPost" onClick={toggleModal}>
				+
			</Button>
		</Fragment>
	);
	// console.log(state);
	return (
		<section id={id} className="featured-cards">
			{state.auth.role === "admin" ? addPost : ""}
			<AddPostModal isOpen={modal.isOpen} toggle={toggleModal} />
			<Container>
				<Row>
					<Col>{children}</Col>
				</Row>
				<Row>
					<div className="feature-card-output">
						{[...state.frontEndPosts].map(item => (
							<FeatureCard post={item} key={item._id} />
						))}
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default FeaturedCards;
