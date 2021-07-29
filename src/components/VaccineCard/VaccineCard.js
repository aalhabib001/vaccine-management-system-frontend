import React from 'react';
import VerticalLinearStepper from "../Enroll/Stepper/VerticalLinearStepper";
import VaccineCardStepper from "./Stepper/VaccineCardStepper";

const VaccineCard = () => {
    return (
        <div className="container-lg">
            <div className="d-flex justify-content-center m-5">
                <h3>Download Vaccine Card Here</h3>
            </div>
            <div className="stepper-mg">
                <VaccineCardStepper/>
            </div>

        </div>
    );
};

export default VaccineCard;
