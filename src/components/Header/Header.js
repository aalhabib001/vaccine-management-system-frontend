import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link to="/"
                      className="nav-link active text-dark mr-3">
                    <Navbar.Brand href="#home" className="header-logo">Vaccine Distribution System</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="align-items-center">

                        <Link
                            style={{fontSize: '19px'}} to="/dashoboard/orders"
                            className="nav-link active text-dark mr-3">
                            Enroll
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/dashoboard/orders"
                            className="nav-link active text-dark mr-3">
                            Vaccine Card
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/dashoboard/orders"
                            className="nav-link active text-dark mr-3">
                            Certificate
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/dashoboard/orders"
                            className="nav-link active text-dark mr-3">
                            Status
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/dashoboard/orders"
                            className="nav-link active text-dark mr-3">
                            <button className="btn btn-success">Admin Login</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
