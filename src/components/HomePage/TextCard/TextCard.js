import React from 'react';
import {Card} from "react-bootstrap";
import './TextCard.css'
import {Link} from "react-router-dom";

const TextCard = (props) => {
    const cardData = props.cardData;

    return (
        <Link to={cardData.link} style={{textDecoration: 'none'}}>
            <Card className="mb-5 card-style Small shadow">
                <Card.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <img src={cardData.logo} alt="logo" className="w-25"/>
                    </div>


                    <Card.Title>{cardData.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cardData.subTitle}</Card.Subtitle>

                    {/*<Card.Text>*/}
                    {/*    Some quick example text to build on the card title and make up the bulk of*/}
                    {/*    the card's content.*/}
                    {/*</Card.Text>*/}
                </Card.Body>
            </Card>
        </Link>

    );
};

export default TextCard;
