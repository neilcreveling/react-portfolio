import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
    return (
        <Jumbotron id='homepage'>
            <Container>
                <Row>
                    <Col>
                        <img id="portrait" src="./images/neil_1.jpg" alt="Neil Creveling Portrait"/>
                    </Col>
                    <Col>
                        <h1>Hi, I'm Neil.</h1>
                        <h2>I'm a full stack developer from Brooklyn, NY.</h2>
                        <h2>Learn more about me and what I do.</h2>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    )
}

export default Home;