// -----------------------------------------React-----------------------------------------
import React, { useState, useContext } from "react";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button, Input } from "reactstrap";
// -----------------------------------------Components-----------------------------------------
// -----------------------------------------Resources-----------------------------------------

const FeaturedCards = ({ id, children }) => {
	return (
		<section id={id} className="featured-cards">
			<Container>
				<Row>
					<Col>{children}</Col>
				</Row>
				<Row>
					<Col>Output Cards</Col>
				</Row>
			</Container>
		</section>
	);
};

export default FeaturedCards;
