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

	// Officially logs in the user
	const handleLogin = user => {
		actions({
			type: "setState",
			payload: {
				auth: { user: user.userName, isAuth: true, role: "admin" }
			}
		});
	};
	// Attempts a login, if it succeeds, log in, else alert the issue
	const attemptLogin = async () => {
		await login(user)
			.then(res => handleLogin(res))
			.catch(err => alert("Something went wrong"));
	};

	// Toggle is accomplished by making the active user a guest again, login modal is based on whether isAuth is true, authorized guests is the default value
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

	// Handle Updating fields entered for the log in system
	const updateField = e => {
		updateUser({ ...user, [e.target.name]: e.target.value });
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
