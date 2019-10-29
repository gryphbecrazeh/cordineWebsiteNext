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
	Button,
	ButtonGroup
} from "reactstrap";

const FrontEndViewModal = ({ URL_HTML, URL_CSS, URL_JAVASCRIPT }) => {
	const [isOpen, toggle] = useState(false);
	const [view, setView] = useState("desktop");
	const toggleModal = () => {
		toggle(!isOpen);
	};
	const getView = () => {
		switch (view) {
			case "desktop":
				return "xl";
			case "mobile":
				return "md";
			default:
				return "xl";
		}
	};
	const changeView = e => {
		setView(e.target.name);
	};
	return (
		<div>
			<div className="view-now-button" onClick={toggleModal}>
				View Now
			</div>
			<Modal isOpen={isOpen} toggle={toggleModal} size={getView()}>
				<ModalBody>Front End View Modal</ModalBody>
				<ModalFooter>
					<ButtonGroup className="d-none d-lg-block w-100">
						<Button onClick={changeView} name="desktop">
							Desktop
						</Button>
						<Button onClick={changeView} name="mobile">
							Mobile
						</Button>
					</ButtonGroup>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default FrontEndViewModal;
