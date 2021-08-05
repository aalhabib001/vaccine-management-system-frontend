import React from 'react';
import VerticalLinearStepper from "./Stepper/VerticalLinearStepper";
import './Stepper/Stepper.css'

const Enroll = () => {
    return (
        <div className="container-lg su-main-banner-area-2">
            <div className="d-flex justify-content-center m-5">
                <h3>Register Vaccine Here</h3>
            </div>
            <div className="stepper-mg">
                <VerticalLinearStepper/>
            </div>

        </div>
    );
};

export default Enroll;

