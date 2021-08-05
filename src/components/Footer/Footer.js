import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import uuLogo from '../../images/uu-logo.png'
import './Footer.css'

const Footer = () => {
    return (
        // <div style={{backgroundColor: '#F8F9FA'}}>
        <div className="su-main-banner-area-3">
            <Container>
                {/*<div style={{marginLeft: '10rem', marginRight: '10rem', paddingBottom: '2rem', paddingTop: '2rem'}}>*/}
                <Row className=" align-items-center pt-3" lg={3} xs={1}>
                    <Col className="d-flex justify-content-center mb-2">
                        <div className=" mb-3 align-items-center">
                            <h3 className="mr-2">Vaccine Distribution System</h3>
                            <h4 className="mr-2">For Covid-19</h4>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center mb-2">
                        <Row>
                            <Col>
                                <p>Privacy Policy</p>
                                <p>Terms of service</p>
                                <p>Other Affiliates</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-center">
                            <img src={uuLogo} style={{width: '40%'}} alt="uu-logo"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h6>Supported by</h6>
                        </div>
                    </Col>
                </Row>
                <h6 className="text-center mt-5 pb-4">© 2021 Vaccine Distribution System of Covid-19</h6>
                {/*</div>*/}
            </Container>
        </div>
    );
};

export default Footer;
