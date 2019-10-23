import React from "react";

const FeatureCard = ({ post }) => {
	let { title, technologies } = post;
	return (
		<div className="card relative">
			<div className="row">
				<h2 className="card-title">{title}</h2>
			</div>
			<div className="row">
				<div className="technologies">
					{technologies.map(item => (
						<div>{item}</div>
					))}
					{/* Output technologies here, maybe in SVG's if we can get that serverside working */}
				</div>
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
