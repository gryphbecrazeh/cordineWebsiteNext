import React from "react";

const FeatureCard = () => {
	return (
		<div class="card relative">
			<div class="row">
				<h2 class="card-title">
					Title for Front End Development Card
					{/* Output feature title */}
				</h2>
			</div>
			<div class="row">
				<div class="technologies">
					React, Javacript, Bootstrap, Sass
					{/* Output technologies here, maybe in SVG's if we can get that serverside working */}
				</div>
				<div class="view-now-button">View Now</div>
			</div>
			<div class="row relative">
				<div class="active-image-container">
					{/* Output currently active image here */}
				</div>
			</div>
			<div class="row image-container">
				{/* Replace with for loop */}
				<div class="img-box"></div>
				<div class="img-box"></div>
				<div class="img-box"></div>
				<div class="img-box"></div>
				<div class="img-box"></div>
			</div>
		</div>
	);
};
export default FeatureCard;
