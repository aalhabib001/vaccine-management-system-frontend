import React from 'react';
import {Col, Row} from "react-bootstrap";
import registerOnline from '../../../images/regi-online.svg'
import getSms from '../../../images/get-sms.svg'
import hospital from '../../../images/hospital.svg'
import './Section2.css'

const Section2 = () => {
    return (
        <div className="mb-5 su-main-banner-area-2" style={{border: '1x solid black'}}>
            <div className="header-top d-flex justify-content-center">
                <div className="d-flex justify-content-center my-5 card-border-header">
                    <h2>How to Get Vaccine</h2>
                </div>
            </div>

            <div className="m-4">
                <Row lg={4} xs={1} className="d-flex justify-content-center">
                    <Col className="card-border mb-3 card-sp">
                        <div className="d-flex justify-content-center">
                            <img className="w-50 mb-4" src={registerOnline} alt=""/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <h5>Register Online</h5>
                        </div>
                    </Col>
                    <Col className="card-border mb-3 card-sp">
                        <div className="d-flex justify-content-center">
                            <img className="w-50 mb-4" src={getSms} alt=""/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5>Get SMS</h5>
                        </div>
                    </Col>
                    <Col className="card-border mb-3 card-sp">
                        <div className="d-flex justify-content-center">
                            <img className="w-50 mb-4" src={hospital} alt=""/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5>Go To Vaccine Center</h5>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    );
};

export default Section2;
