// -----------------------------------------React-----------------------------------------
import React, { useState, useContext } from 'react';
// -----------------------------------------Reactstrap-----------------------------------------
import {
	Container,
	Row,
	Col,
	Button,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter
} from 'reactstrap';
// -----------------------------------------React Hooks-----------------------------------------
import Context from '../store/context';

const LoginModal = ({ isOpen = false, toggle = () => null }) => {
	const [code, getCode] = useState({});
	const { auth } = useContext(Context);
	console.log(auth);
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<ModalHeader toggle={toggle}>Test</ModalHeader>
			<ModalBody>Test</ModalBody>
		</Modal>
	);
};
export default LoginModal;
