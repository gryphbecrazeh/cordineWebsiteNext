// -----------------------------------------React-----------------------------------------
import React, { useState, useContext } from "react";
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
	ModalFooter,
	Form,
	FormGroup,
	InputGroup,
	InputGroupAddon,
	Label
} from "reactstrap";
// -----------------------------------------React Hooks-----------------------------------------
import Context from "../store/context";

const LoginModal = () => {
	const [code, getCode] = useState({});
	const { state, actions } = useContext(Context);
	const { auth } = state;
	const toggle = () => {
		actions({
			type: "setState",
			payload: {
				auth: {
					user: "guest",
					isAuth: true
				}
			}
		});
	};
	return (
		<Modal isOpen={!auth.isAuth} toggle={toggle}>
			<ModalHeader toggle={toggle}>Please Log in to Continue...</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label>User</Label>
						<Input name="user" placeholder="username" type="username" />
						<Label>Password</Label>
						<Input name="pass" placeholder="password" type="password" />
					</FormGroup>
					<Button block color="warning">
						Log In
					</Button>
				</Form>
			</ModalBody>
		</Modal>
	);
};
export default LoginModal;
