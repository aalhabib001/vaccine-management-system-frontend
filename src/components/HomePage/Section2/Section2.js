import React from 'react';
import {Col, Row} from "react-bootstrap";
import registerOnline from '../../../images/regi-online.svg'
import getSms from '../../../images/get-sms.svg'
import hospital from '../../../images/hospital.svg'

const Section2 = () => {
    return (
        <div className="my-5">
            <div className="d-flex justify-content-center my-5">
                <h3>How to Get Vaccine</h3>
            </div>
            <div className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <img className="w-50 mb-4" src={registerOnline}/>
                        <h5>Register Online</h5>
                    </Col>
                    <Col>
                        <img className="w-50 mb-4" src={getSms}/>
                        <h5>Get SMS</h5>
                    </Col>
                    <Col>
                        <img className="w-50 mb-4" src={hospital}/>
                        <h5>Go To Vaccine Center</h5>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Section2;
