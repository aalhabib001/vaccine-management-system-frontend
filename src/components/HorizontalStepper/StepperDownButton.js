import React from 'react';
import {Container} from "react-bootstrap";

const StepperDownButton = (props) => {
    return (
        <Container>
            <div className="d-flex justify-content-center">
                <div className="form-input-2">
                    <button className="btn btn-primary mb-4">{props.buttonText}</button>
                </div>
            </div>

        </Container>
    );
};

export default StepperDownButton;
