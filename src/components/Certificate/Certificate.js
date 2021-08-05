import React from 'react';
import CertificateStepper from "./CertificateStepper/CertificateStepper";

const Certificate = () => {
    return (
        <div className="container-lg su-main-banner-area-3">
            <div className="d-flex justify-content-center m-5">
                <h3>Download Vaccine Certificate Here</h3>
            </div>
            <div className="vc-1">
                <CertificateStepper/>
            </div>
        </div>
    );
};

export default Certificate;
