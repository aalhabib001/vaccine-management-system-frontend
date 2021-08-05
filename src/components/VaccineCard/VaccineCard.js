import React from 'react';
import VaccineCardStepper from "./Stepper/VaccineCardStepper";

const VaccineCard = () => {
    return (
        <div className="container-lg su-main-banner-area-3">
            <div className="d-flex justify-content-center m-5">
                <h3>Download Vaccine Card Here</h3>
            </div>
            <div className="vc-1">
                <VaccineCardStepper/>
            </div>

        </div>
    );
};


export default VaccineCard;
