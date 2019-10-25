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
	ModalFooter
} from "reactstrap";

const ImageViewModal = ({ children }) => {
	const [isOpen, toggle] = useState(false);
	const toggleModal = () => {
		toggle(!isOpen);
	};
	return (
		<div className="img-box">
			<div className="img-button-container" onClick={toggleModal}>
				{children}
			</div>
			<Modal isOpen={isOpen} toggle={toggleModal}>
				<ModalBody>Test</ModalBody>
				<ModalFooter>Test</ModalFooter>
			</Modal>
		</div>
	);
};
export default ImageViewModal;
