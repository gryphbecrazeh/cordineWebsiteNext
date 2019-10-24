import React from "react";

const FeatureCard = ({ post, key }) => {
	let { title, technologies, description, _id } = post;
	return (
		<div className="card relative" key={`${key}`}>
			<div className="row">
				<h2 className="card-title">{title}</h2>
			</div>
			<div className="row">
				<div className="technologies">
					<span className="accent">Tech</span>nologies:{" "}
					{technologies.map((item, index) => (
						<span key={`${key}-tech-${index}`}>{item} </span>
					))}
					{/* Output technologies here, maybe in SVG's if we can get that serverside working */}
				</div>
			</div>
			<div className="row">
				<p className="description">{description}</p>
			</div>
			<div className="row">
				<div className="view-now-button">View Now</div>
			</div>
			<div className="row relative">
				<div className="active-image-container">
					{/* Output currently active image here */}
				</div>
			</div>
			<div className="row image-container">
				{/* Replace with for loop */}
				<div className="img-box"></div>
				<div className="img-box"></div>
				<div className="img-box"></div>
				<div className="img-box"></div>
				<div className="img-box"></div>
			</div>
		</div>
	);
};
export default FeatureCard;
