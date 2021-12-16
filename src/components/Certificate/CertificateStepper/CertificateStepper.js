import React, {useState} from 'react';
import '../../VaccineCard/Stepper/Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import CertificateDownload from "../../CertificateDownload/CertificateDownload";
import axios from "axios";
import {useSnackbar} from "notistack";

function getSteps() {
    return ['Verify NID and Phone No', 'Download Vaccine Certificate'];
}

export default function CertificateStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [vaccineCertificateData, setVaccineCertificateData] = useState({
        nid: "",
        phoneNo: ""
    });

    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant, msg) => {
        enqueueSnackbar(msg, {variant});
    };

    const handleOnBlur = (event) => {
        const vaccineCardDataTemp = {...vaccineCertificateData}
        vaccineCardDataTemp[event.target.id] = event.target.value
        setVaccineCertificateData(vaccineCardDataTemp)
    }

    const [certificateData, setCertificateData] = useState("");

    async function checkVaccineCertificate(): boolean {
        console.log(vaccineCertificateData)

        if (vaccineCertificateData.nid && vaccineCertificateData.phoneNo) {

            handleClickVariant('info', "Getting Data")

            let isOk = false;

            await axios({
                method: 'post',
                url: 'http://localhost:4200/api/vaccine/vaccine-certificate',
                headers: {'Content-Type': 'application/json'},
                data: vaccineCertificateData
            }).then(res => {
                console.log(res.data)

                handleClickVariant('success', res.data.message)

                setCertificateData(res.data.vaccineInfo)

                isOk = true;
            })
                .catch(error => {
                    // console.log(error)
                    let errorData = error.response.data

                    handleClickVariant('error', errorData.message)

                    isOk = false;
                })

            return isOk;
        } else {
            handleClickVariant('warning', "Please Fill the input box")
        }

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
                    <CertificateDownload certificateData={certificateData}/>
                    // <StepperDownButton buttonText="Download Vaccine Certificate"/>
                );
            default:
                return 'Unknown step';
        }
    }


    return (

        <HorizontalStepper activeStep={activeStep} steps={steps} handleReset={handleReset}
                           getStepContent={getStepContent} handleBack={handleBack} handleNext={handleNext}/>

    );
}
