import React from 'react';
import VerticalLinearStepper from "./Stepper/VerticalLinearStepper";
import {Container} from "react-bootstrap";

const Enroll = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center m-5">
                <h3>Register Vaccine Here</h3>
            </div>
            <div className="m-5">
                <VerticalLinearStepper/>
            </div>

        </Container>
    );
};

export default Enroll;
