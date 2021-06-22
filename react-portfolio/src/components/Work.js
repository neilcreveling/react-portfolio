import React, { Component } from "react";
import Project from "./Project"
import projects from "../projects"
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';



class Work extends Component {
    state = {
        projects
    };

    mapProjects = () => this.state.projects.length
        ? this.state.projects.map( project => (
            <Project
                key={project.id}
                name={project.name}
                image={project.image}
                details={project.details}
                github={project.github}
                link={project.link}
            />
        ))
        : null

    render() {
        return (
            <Jumbotron id="workpage">
            <h1>Work</h1>
            <Jumbotron className="jumbotron"
            style={{
                display: 'flex',
                flexDirection: 'column',
                jusitfyContent: 'center'
            }}>
                 {this.mapProjects()}
        </Jumbotron>
        </Jumbotron>
        )
    }
};

export default Work;