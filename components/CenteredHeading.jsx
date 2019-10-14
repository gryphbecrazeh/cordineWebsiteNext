// -----------------------------------------React-----------------------------------------
import React from "react";

const CenteredHeading = ({ picture = "#", height = "auto", children }) => {
	return (
		<div
			className="centeredHeading"
			style={{ height: height, backgroundImage: `url(${picture})` }}
		>
			{children}
		</div>
	);
};
export default CenteredHeading;
