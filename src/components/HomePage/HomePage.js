import React from 'react';
import './HomePage.css'
import {Col, Container, Row} from "react-bootstrap";
import TextCard from "./TextCard/TextCard";
import {homeCardDataList1} from "./HomeCardData";
import Section2 from "./Section2/Section2";
import InfoCard from "./InfoCard/InfoCard";

const HomePage = () => {
    return (
        <div className="">
            <div>
                <div className="su-main-banner-area">

                    <Container>
                        <Row lg={2} className="p-5">
                            {
                                homeCardDataList1.map(homeCardData => <Col className="d-flex justify-content-center"
                                                                           key={homeCardData.title}>
                                    <TextCard cardData={homeCardData} key={homeCardData.title}/>
                                </Col>)
                            }
                        </Row>
                    </Container>
                </div>
                <InfoCard/>
                <Container>
                    <Section2/>

                </Container>

            </div>
        </div>
    );
};

export default HomePage;
