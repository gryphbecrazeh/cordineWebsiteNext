import "../scss/style.scss";
// -----------------------------------------Next-----------------------------------------
import Head from "next/head";
import Link from "next/link";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container, Row, Col, Button } from "reactstrap";
// -----------------------------------------React-----------------------------------------
import React from "react";
// -----------------------------------------Components-----------------------------------------
import CenteredHeading from "../components/CenteredHeading"
import Document from "../layouts/document";
// -----------------------------------------Resources-----------------------------------------
import Image from "../images/hero-bg-2.jpg"

export default () => (
	<Document>
		<Row>
			<Col>
				<CenteredHeading picture={ Image } >
					<div className="headers">
						Welcome to the landing page
					</div>
				</CenteredHeading>
			</Col>
		</Row>
	</Document>
);
