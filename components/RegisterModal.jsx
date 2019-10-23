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

const RegisterModal = () => {
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
	const attemptRegister = () => {
		console.log("Attempting register");
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
						<Label>First Name</Label>
						<Input
							name="firstName"
							placeholder="first name"
							type="text"
							onChange={updateField}
						/>
						<Label>Last Name</Label>
						<Input
							name="lastName"
							placeholder="last name"
							type="text"
							onChange={updateField}
						/>
						<Label>Date of Birth</Label>
						<Input name="dateBirth" type="date" onChange={updateField} />
						<Label>Email</Label>
						<Input
							name="email"
							placeholder="email@domain.com"
							type="email"
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
					<Button block color="warning" onClick={attemptRegister}>
						Register
					</Button>
				</Form>
			</ModalBody>
		</Modal>
	);
};
export default RegisterModal;
