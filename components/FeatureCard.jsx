// -----------------------------------------React-----------------------------------------
import React, { Fragment } from "react";
// -----------------------------------------Components-----------------------------------------
import ImageViewModal from "../components/ImageViewModal";
import FrontEndViewModal from "../components/FrontEndViewModal";

const FeatureCard = ({ post, key }) => {
	let { title, technologies, description, _id } = post;
	let authActions = (
		<Fragment>
			<ul className="auth-post-actions">
				<li>Edit</li>
				<li>Delete</li>
			</ul>
		</Fragment>
	);
	return (
		<div className="card relative" key={`${key}`}>
			{authActions}
			<div className="row">
				<h2 className="card-title">{title}</h2>
			</div>
			<div className="row">
				<div className="technologies">
					<span className="accent">Tech</span>:{" "}
					{technologies.map((item, index) => (
						<span key={`${key}-tech-${index}`}>{item} </span>
					))}
				</div>
			</div>
			<div className="row">
				<p className="description">{description}</p>
			</div>
			<div className="row">
				{/* Exchange element below for View Now Modal
				createElement("div") element.innerHTML=item.html element.style=item.style||+=item.style needs default style that clears all style
				or create iframe element, and link to a stylesheet that was added and written to specific area on the server */}
				<FrontEndViewModal />
				{/* <div className="view-now-button">View Now</div> */}
			</div>
			<div className="row relative">
				<div className="active-image-container">
					{/* images need a viewImage modal, all images onClick open viewImageModal supplying their image to the component as props */}
					{/* Output currently active image here */}
				</div>
			</div>
			<div className="row image-container">
				{/* Replace with for loop */}
				<ImageViewModal></ImageViewModal>
				<ImageViewModal></ImageViewModal>
				<ImageViewModal></ImageViewModal>
				<ImageViewModal></ImageViewModal>
				<ImageViewModal></ImageViewModal>
			</div>
		</div>
	);
};
export default FeatureCard;
