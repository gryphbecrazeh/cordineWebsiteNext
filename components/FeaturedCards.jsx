// -----------------------------------------React-----------------------------------------
import React, { useState, useContext, Fragment } from 'react';
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from 'reactstrap';
// -----------------------------------------Components-----------------------------------------
import AddPostModal from './AddPostModal';
// -----------------------------------------Resources-----------------------------------------

const FeaturedCards = ({ id, children }) => {
	let [modal, toggleModalOpen] = useState({ isOpen: false });
	let toggleModal = () => {
		toggleModalOpen({ ...modal, isOpen: !modal.isOpen });
	};
	let addPost = (
		<Fragment>
			<Button className='addPost' onClick={toggleModal}>
				+
			</Button>
		</Fragment>
	);
	return (
		<section id={id} className='featured-cards'>
			<AddPostModal isOpen={modal.isOpen} toggle={toggleModal} />
			<Container>
				<Row>
					<Col>{children}</Col>
				</Row>
				<Row>
					<Col>Output Cards</Col>
				</Row>
			</Container>
		</section>
	);
};

export default FeaturedCards;
