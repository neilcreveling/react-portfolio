import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Project(props) {
    console.log(props);

    const mapDetails = () => {
        console.log(props);
        return props.details.map( (detail, j) => (
        <li key={j}>{ detail }</li>
        ));
    };

    return (
        <Card id="workpage">
            <Card.Img variant="top" src={props.image} alt={props.name} href={props.link} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    { mapDetails() }
                    <Card.Link href={props.link} target="_blank" rel="noopener noreferrer">Link</Card.Link>
                    <Card.Link href={props.github} target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Project;
