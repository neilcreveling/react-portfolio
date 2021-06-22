import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { NavHashLink } from 'react-router-hash-link';

function NavBar() {
    return (
        <Nav bg="dark" id="nav"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <NavHashLink className="homelink" to="#homepage">Home</NavHashLink>
            </Nav.Item>
            <Nav.Item>
                <NavHashLink className="aboutlink" to="#aboutpage">About</NavHashLink>
            </Nav.Item>
            <Nav.Item>
                <NavHashLink className="worklink" to="#workpage">Work</NavHashLink>
            </Nav.Item>
            <Nav.Item>
                <NavHashLink className="contactlink" to="#contactpage">Contact</NavHashLink>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;