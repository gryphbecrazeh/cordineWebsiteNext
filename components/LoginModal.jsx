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
// -----------------------------------------Actions-----------------------------------------
import { login } from "../actions/AuthActions";

const LoginModal = () => {
	const [user, updateUser] = useState({ userName: "", password: "" });
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
	const updateField = e => {
		updateUser({ ...user, [e.target.name]: e.target.value });
	};
	const attemptLogin = () => {
		login(user);
	};
	return (
		<Modal isOpen={!auth.isAuth} toggle={toggle}>
			<ModalHeader toggle={toggle}>Please Log in to Continue...</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label>User</Label>
						<Input
							name="userName"
							placeholder="username"
							type="username"
							onChange={updateField}
						/>
						<Label>Password</Label>
						<Input
							name="password"
							placeholder="password"
							type="password"
							onChange={updateField}
						/>
					</FormGroup>
					<Button block color="warning" onClick={attemptLogin}>
						Log In
					</Button>
				</Form>
			</ModalBody>
		</Modal>
	);
};
export default LoginModal;
