// -----------------------------------------React-----------------------------------------
import React, { useState } from "react";
// -----------------------------------------Reactstrap-----------------------------------------
import {
	Container,
	Row,
	Col,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	Button
} from "reactstrap";

const FrontEndViewModal = ({ URL_HTML, URL_CSS, URL_JAVASCRIPT }) => {
	const [isOpen, toggle] = useState(false);
	const toggleModal = () => {
		toggle(!isOpen);
	};
	return (
		<div>
			<Button onClick={toggleModal}>View Now</Button>
			<Modal isOpen={isOpen} toggle={toggleModal}>
				<ModalBody>Test</ModalBody>
				<ModalFooter>Test</ModalFooter>
			</Modal>
		</div>
	);
};

export default FrontEndViewModal;
