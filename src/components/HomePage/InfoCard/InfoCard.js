import React from 'react';
import {Card} from "react-bootstrap";
import './InfoCard.css'


const InfoCard = () => {
    return (
        <div className="d-flex justify-content-center main-div">
            <Card className="mb-5 card-style-2 Small shadow p-1">
                <Card.Body>
                    <div className=" justify-content-around card-div">
                        <div className="mx-4 d-flex align-items-center justify-content-around individual-data">
                            <Card.Title>Hotline</Card.Title>
                        </div>
                        <div className="vl"/>
                        <div className="mx-4 individual-data">
                            <Card.Title className="d-flex justify-content-around">333</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted d-flex justify-content-around">National Call
                                Center</Card.Subtitle>
                        </div>
                        <div className="vl"/>
                        <div className="mx-4 individual-data">
                            <Card.Title className="d-flex justify-content-around">16263</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted d-flex justify-content-around">Health Call
                                Center</Card.Subtitle>
                        </div>
                        <div className="vl"/>
                        <div className="mx-4 individual-data">
                            <Card.Title className="d-flex justify-content-around">10655</Card.Title>
                            <Card.Subtitle
                                className="mb-2 text-muted d-flex justify-content-around mx-5">IEDCR</Card.Subtitle>
                        </div>
                        <div className="vl"/>
                        <div className="mx-4 individual-data">
                            <Card.Title className="d-flex justify-content-around">09666777222</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted d-flex justify-content-around">Covid-19 Tele
                                Health</Card.Subtitle>
                        </div>
                        <div className="vl"/>
                        <div className="mx-4 d-flex align-items-center justify-content-around individual-data">
                            <Card.Title>All Call Center</Card.Title>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default InfoCard;
