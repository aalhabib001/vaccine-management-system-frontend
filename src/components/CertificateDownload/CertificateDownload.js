import React from 'react';
import bdGovt from "../../images/bd-govt.png";
import uuLogo from "../../images/uu-logo.png";
import siteLogo from "../../images/LOGO.png";
import {Button, Col, Container, Row} from "react-bootstrap";
import QRCode from 'qrcode.react';
import './CertificateDownload.css'

const CertificateDownload = (props) => {
    const {
        address,
        dateOfBirth,
        fullName,
        nid,
        phoneNo,
        vaccineCenter,
        firstDose,
        secondDose,
        firstVac,
        secondVac
    } = props.certificateData

    return (
        <Container>

            <div className="section-to-print ">
                <div className="border-div m-1 p-4">
                    <div className="d-flex align-items-start justify-content-center mb-4">
                        <div className="d-flex justify-content-start" style={{width: '15%'}}>
                            <img src={bdGovt} style={{width: '80%'}} className="img-thumbnail" alt="bdGovt"/>
                        </div>
                        <div className="mt-3" style={{width: '70%'}}>
                            <h4 className="d-flex justify-content-center">Govt Of The People's Republic Of
                                Bangladesh</h4>
                            <h5 className="d-flex justify-content-center">Covid-19 Vaccine Certificate</h5>
                            {/*<h5 className="d-flex justify-content-center">Vaccine Distribution System</h5>*/}
                            <h6 className="d-flex justify-content-center">Supported By: Uttara University</h6>
                        </div>
                        <div className="d-flex justify-content-end" style={{width: '15%'}}>
                            <img src={uuLogo} style={{width: '80%'}} className="img-thumbnail" alt="uuLogo"/>
                        </div>
                    </div>
                    <div className=" row">
                        <div className="p-2 m-1 border-div-2 col-sm-6" style={{width: '', height: ''}}>
                            <div className="d-flex justify-content-center mt-3">
                                <h5>Personal Information</h5>
                            </div>
                            <hr/>
                            <div>
                                <h6>Name: {fullName}</h6>
                                <h6>Phone: {phoneNo}</h6>
                                <h6>NID: {nid}</h6>
                                <h6>Date of Birth: {dateOfBirth}</h6>
                                <h6>Vaccine Center: {vaccineCenter}</h6>
                                <h6>Address: {address}</h6>
                            </div>
                        </div>
                        <div className="p-2 m-1 border-div-2 col-sm-6" style={{width: ''}}>
                            <div className="d-flex justify-content-center mt-3">
                                <h5>Vaccine Information</h5>
                            </div>
                            <hr/>
                            <div className="my-0 py-0 align-items-center">
                                <div className="d-flex justify-content-center">
                                    <div className="w-50 d-flex justify-content-center align-items-center">
                                        <h6>1st dose: </h6>
                                        <h6 className="ms-1"><strong>{firstDose}</strong></h6>
                                    </div>
                                    <div className="vl-1"/>
                                    <div className="w-50 d-flex justify-content-center align-items-center">
                                        <h6>Vaccine : </h6>
                                        <h6 className="ms-1"><strong>{firstVac}</strong></h6>
                                    </div>
                                </div>
                                <hr/>
                                <div className=" d-flex justify-content-center">
                                    <div className="w-50 m-1 d-flex justify-content-center align-items-center">
                                        <h6>2nd dose: </h6>
                                        <h6 className="ms-1"><strong>{secondDose}</strong></h6>
                                    </div>
                                    <div className="vl-1"/>
                                    <div className="w-50 m-1 d-flex justify-content-center align-items-center">
                                        <h6>Vaccine : </h6>
                                        <h6 className="ms-1"><strong>{secondVac}</strong></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Row className="d-flex justify-content-around">
                        <Col sm={1} md={2}>
                            <div className="d-flex justify-content-center mt-3">
                                <h6>Verify:</h6>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <QRCode value={"Name: "+ fullName +"\nNid: "+ nid + "\nPhone: "+ phoneNo} />
                            </div>
                        </Col>
                        <Col sm={1} md={2}>
                            <div className="d-flex justify-content-center mt-3">
                                <h6>IT Infrastructure From:</h6>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <img src={siteLogo} style={{ minWidth: '250px' }} className="img-thumbnail" alt="siteLogo"/>
                            </div>
                        </Col>
                    </Row>

                </div>

            </div>
            <div className="d-flex justify-content-center m-5">
                <Button onClick={window.print} className="btn btn-warning">Print</Button>
            </div>
        </Container>
    );
};

export default CertificateDownload;
