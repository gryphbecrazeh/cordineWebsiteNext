// -----------------------------------------React-----------------------------------------
import React from 'react';

const CenteredHeading = ({ picture, height = 'auto', children }) => {
	return (
		<div className='centeredHeading'>
			{children}
			<style jsx>{`
				.centeredHeading {
					height: ${height};
					background-image: url(${picture});
				}
			`}</style>
		</div>
	);
};
export default CenteredHeading;
