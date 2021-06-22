import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Contact() {
    return (
        <Jumbotron id="contactpage" className="jumbotron">
        <h1>Contact Me</h1>
        <ul>
                <li><a href="tel:1-585-478-8852">(585)-478-8852</a></li>
                <li><a href="https://github.com/neilcreveling">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/neil-creveling-9007a7131/">LinkedIn</a></li>
                <li><a href="CrevelingResume_03_2021.pdf">Resume</a></li>
        </ul>
</Jumbotron>
    )
}

export default Contact;
