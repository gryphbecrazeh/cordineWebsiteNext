// -----------------------------------------React-----------------------------------------
import React, { useState, useContext } from 'react';
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
	return (
		<section id={id} className='featured-cards'>
			<Button className='addPost' onClick={toggleModal}>
				+
			</Button>
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
