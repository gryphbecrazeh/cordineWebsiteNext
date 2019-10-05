// -----------------------------------------Next-----------------------------------------
import Head from "next/head";
// -----------------------------------------Reactstrap-----------------------------------------
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
// -----------------------------------------React-----------------------------------------
import React from "react";

const Document=props => ( <div>
    <Head>
        <title>Christopher Cordine New York Based Web Developer</title>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        ></link>
    </Head>
    <Container fluid>
        { props.children }
    </Container>
</div>
)
export default Document