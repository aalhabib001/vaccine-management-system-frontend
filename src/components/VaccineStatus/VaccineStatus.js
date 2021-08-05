import React from 'react';
import StatusStepper from "./StatusStepper/StatusStepper";

const VaccineStatus = () => {
    return (
        <div className="container-lg su-main-banner-area-3">
            <div className="d-flex justify-content-center m-5">
                <h3>Check Vaccine Status Here</h3>
            </div>
            <div className="vc-1">
                <StatusStepper/>
            </div>
        </div>
    );
};

export default VaccineStatus;
