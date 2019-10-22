// -----------------------------------------React-----------------------------------------
import React, { useState } from 'react';
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
	ButtonGroup,
	InputGroupAddon,
	Label
} from 'reactstrap';
// -----------------------------------------React Hooks-----------------------------------------
import Context from '../store/context';
const AddPostModal = ({ isOpen, toggle }) => {
	let [post, updatePost] = useState({
		title: '',
		technologies: [],
		description: '',
		images: [],
		repo: '',
		codePen: '',
		technology: ''
	});
	let handleUpdatePost = e => {
		updatePost({ ...post, [e.target.name]: e.target.value });
	};
	let handleAddTechnology = () => {
		let { technology, technologies } = post;
		if (technology === '') return 0;
		let updatedTechnologies = [...technologies, technology];
		updatePost({
			...post,
			technologies: updatedTechnologies,
			technology: ''
		});
	};
	let handleRemoveTechnology = e => {
		let target = e.target.getAttribute('name');
		let updatedTechnologies = post.technologies.filter(
			item => item !== target
		);
		updatePost({
			...post,
			technologies: updatedTechnologies,
			technology: ''
		});
	};
	console.log(post);
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<ModalHeader toggle={toggle}>Add a featured post</ModalHeader>
			<ModalBody>
				<Container>
					<Row>
						<Col>
							<ButtonGroup className='w-100'>
								<Button disabled>Create Front End Post</Button>
								<Button disabled>Create Project Post</Button>
							</ButtonGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<Label>Title</Label>
							<Input
								type='text'
								name='title'
								placeholder='Post Title'
								onChange={handleUpdatePost}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Label>Description</Label>
							<Input
								type='textarea'
								name='description'
								placeholder='Post Description'
								onChange={handleUpdatePost}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Label>Repo</Label>
							<Input
								type='text'
								name='repo'
								placeholder='Repository URL'
								onChange={handleUpdatePost}
							/>
						</Col>
						<Col>
							<Label>CodePen</Label>
							<Input
								type='text'
								name='codePen'
								placeholder='CodePen URL'
								onChange={handleUpdatePost}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Label>Technologies</Label>
							<div id='technology-output'>
								{post.technologies.map(item => {
									return (
										<div className='technology' name={item}>
											{item}
											<span
												className='close'
												name={item}
												onClick={
													handleRemoveTechnology
												}>
												x
											</span>
										</div>
									);
								})}
							</div>
							<InputGroup className='mt-2'>
								<Input
									type='text'
									name='technology'
									placeholder='React, Bootstrap, Css, Javascript...'
									value={post.technology}
									onChange={handleUpdatePost}
								/>
								<InputGroupAddon addonType='append'>
									<Button onClick={handleAddTechnology}>
										Add Technology
									</Button>
								</InputGroupAddon>
							</InputGroup>
						</Col>
					</Row>

					<Row>
						<Col>
							<Label>Add Images</Label>
							<Input type='file' name='images' disabled />
						</Col>
					</Row>
					<Row className='mt-5'>
						<Col>
							<Button color='success' block>
								Add Post
							</Button>
						</Col>
					</Row>
				</Container>
			</ModalBody>
		</Modal>
	);
};
export default AddPostModal;
