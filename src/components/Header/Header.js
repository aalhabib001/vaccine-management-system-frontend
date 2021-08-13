import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Header.css'
import {Link} from "react-router-dom";
// import logo from "../../images/LOGO.png"
import logo from "../../images/logo-2.png"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top">
            <Container>
                <Link to="/"
                      className="nav-link active text-dark logo-div-2">

                    <Navbar.Brand href="#home" className="header-logo">
                        <img className="header-logo-img" src={logo} alt="logo"/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="align-items-center">
                        <Link
                            style={{fontSize: '19px'}} to="/"
                            className="nav-link active text-dark mr-3">
                            Home
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/enroll"
                            className="nav-link active text-dark mr-3">
                            Enroll
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/vaccine-card"
                            className="nav-link active text-dark mr-3">
                            Vaccine Card
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/certificate"
                            className="nav-link active text-dark mr-3">
                            Certificate
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/status"
                            className="nav-link active text-dark mr-3">
                            Status
                        </Link>
                        <Link
                            style={{fontSize: '19px'}} to="/login"
                            className="nav-link active text-dark mr-3">
                            <button className="btn btn-primary">Admin Login</button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
