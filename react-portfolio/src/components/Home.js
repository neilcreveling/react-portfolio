import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
    return (
        <Jumbotron id="homepage">
        <img src="images/neil_1.jpeg" alt="Neil Creveling Portrait"/>
        <h1>Hi, I'm Neil.</h1>
        <h2>I'm a full stack developer from Brooklyn, NY.</h2>
        <h2>Learn more about me and what I do.</h2>
</Jumbotron>
    )
}

export default Home;