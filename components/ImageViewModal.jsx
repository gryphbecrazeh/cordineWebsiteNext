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
			<Modal isOpen={isOpen} toggle={toggleModal} size="lg">
				<ModalBody>Test</ModalBody>
				<ModalFooter>Image View Modal</ModalFooter>
			</Modal>
		</div>
	);
};
export default ImageViewModal;
