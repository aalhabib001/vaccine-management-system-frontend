import React, {useContext, useState} from 'react';
import './Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import StepperDownButton from "../../HorizontalStepper/StepperDownButton";
import {Button} from "bootstrap";
import VaccineCardDownload from "../../VaccineCardDownload/VaccineCardDownload";
import axios from "axios";
import {AlertContext} from "../../../App";
import CustomizedSnackbars from "../../AlertSnackbar/AlertSnackbar";


function getSteps() {
    return ['Verify NID and Phone No', 'Download Card'];
}

export default function VaccineCardStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [alertData, setAlertData] = useContext(AlertContext)
    const [vaccineCardData, setVaccineCardData] = useState({
        nid: "",
        phoneNo: ""
    });

    const [cardData, setCardData] = useState("");

    const handleOnBlur = (event) => {

        const vaccineCardDataTemp = {...vaccineCardData}
        vaccineCardDataTemp[event.target.id] = event.target.value
        setVaccineCardData(vaccineCardDataTemp)
    }

    async function checkVaccineCard(): boolean {

        setAlertData({isOpen: true, msg: "Getting Data", type: 'info'})
        let isOk = false;

        await axios({
            method: 'post',
            url: 'https://vaccine-ms-01.herokuapp.com/api/vaccine/vaccine-card',
            headers: {'Content-Type': 'application/json'},
            data: vaccineCardData
        }).then(res => {
            console.log(res.data)
            setAlertData({isOpen: true, msg: res.data.message, type: 'success'})
            setCardData(res.data.vaccineInfo)

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
        if (await checkVaccineCard()) {
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
                    // <StepperDownButton buttonText="Download Vaccine Card" onClick={ window.open('http://www.google.com', '_blank')}/>);
                    <VaccineCardDownload cardData={cardData}/>
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
