import React from 'react';
import './HomePage.css'
import {Col, Container, Row} from "react-bootstrap";
import TextCard from "./TextCard/TextCard";
import {homeCardDataList} from "./HomeCardData";
import Section2 from "./Section2/Section2";

const HomePage = () => {
    return (
        <div>
            <div className="">
                <div className="su-main-banner-area">

                    <Container>
                        <Row lg={2} className="d-flex justify-content-lg-around p-5 ms-5">

                            {
                                homeCardDataList.map(homeCardData => <Col><TextCard cardData={homeCardData}/></Col>)
                            }

                        </Row>
                    </Container>
                </div>
                <Container>
                    <Section2/>

                </Container>

            </div>
        </div>
    );
};

export default HomePage;
