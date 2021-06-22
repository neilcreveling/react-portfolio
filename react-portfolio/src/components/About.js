import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';




function About() {

    return (
        <Jumbotron id="aboutpage" className="jumbotron">
                <h1>About Me</h1>
                <h2>My name is Neil Creveling and I'm a full stack developer based in Brooklyn, NY. I am currently participating in Columbia University's Full Stack Flex Bootcamp, and I also have a background in fine arts. I strive to populate the web with beautiful, user-friendly applications with a creative approach and carefully crafted code.  When I'm not busy coding, you'll find me experimenting in the kitchen, escaping the city to hike in the mountains, and playing tennis with friends.</h2>
        </Jumbotron>
    )
}

export default About;