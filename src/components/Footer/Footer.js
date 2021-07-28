import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import uuLogo from '../../images/uu-logo.jpg'

const Footer = () => {
    return (
        <div style={{backgroundColor: '#F8F9FA'}} >
            <Container>
                {/*<div style={{marginLeft: '10rem', marginRight: '10rem', paddingBottom: '2rem', paddingTop: '2rem'}}>*/}
                <Row className=" align-items-center">
                    <Col>
                        <div className="d-flex mb-3">
                            <h3 className="mr-2">Vaccine Distribution System</h3>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <p>Privacy Policy</p>
                                <p>Terms of service</p>
                                <p>Other Affiliates</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src={uuLogo} style={{width: '35%'}} alt="uu-logo"/>
                    </Col>
                </Row>
                <h6 className="text-center mt-5 pb-4">© 2021 Vaccine Distribution System of Covid-19</h6>
                {/*</div>*/}
            </Container>
        </div>
    );
};

export default Footer;
