import React, {useContext, useState} from 'react';
import '../../VaccineCard/Stepper/Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import StepperDownButton from "../../HorizontalStepper/StepperDownButton";
import CertificateDownload from "../../CertificateDownload/CertificateDownload";
import {AlertContext} from "../../../App";
import CustomizedSnackbars from "../../AlertSnackbar/AlertSnackbar";
import axios from "axios";

function getSteps() {
    return ['Verify NID and Phone No', 'Download Vaccine Certificate'];
}

export default function CertificateStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [alertData, setAlertData] = useContext(AlertContext)
    const [vaccineCertificateData, setVaccineCertificateData] = useState({
        nid: "",
        phoneNo: ""
    });

    const [certificateData, setCertificateData] = useState("");

    const handleOnBlur = (event) => {

        const vaccineCardDataTemp = {...vaccineCertificateData}
        vaccineCardDataTemp[event.target.id] = event.target.value
        setVaccineCertificateData(vaccineCardDataTemp)
    }

    async function checkVaccineCertificate(): boolean {

        setAlertData({isOpen: true, msg: "Getting Data", type: 'info'})
        let isOk = false;

        await axios({
            method: 'post',
            url: 'https://vaccine-ms-01.herokuapp.com/api/vaccine/vaccine-certificate',
            headers: {'Content-Type': 'application/json'},
            data: vaccineCertificateData
        }).then(res => {
            console.log(res.data)
            setAlertData({isOpen: true, msg: res.data.message, type: 'success'})
            setCertificateData(res.data.vaccineInfo)

            isOk = true;
        })
            .catch(error => {
                // console.log(error)
                let errorData = error.response.data

                setAlertData({isOpen: true, msg: errorData.message, type: 'error'})

                isOk = false;
            })

        return isOk;
    }

    const handleNext = async () => {
        if (await checkVaccineCertificate()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    }


    function getStepContent(step) {

        switch (step) {
            case 0:
                return (
                    <NidPhoneStep handleOnBlur={handleOnBlur}/>
                );
            case 1:
                return (
                    <CertificateDownload certificateData = {certificateData} />
                    // <StepperDownButton buttonText="Download Vaccine Certificate"/>
                );
            default:
                return 'Unknown step';
        }
    }


    return (
        <>
            <HorizontalStepper activeStep={activeStep} steps={steps} handleReset={handleReset}
                               getStepContent={getStepContent} handleBack={handleBack} handleNext={handleNext}/>
            <CustomizedSnackbars/>
        </>
    );
}
