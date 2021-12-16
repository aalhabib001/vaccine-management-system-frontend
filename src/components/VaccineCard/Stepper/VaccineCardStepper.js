import React, {useState} from 'react';
import './Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import VaccineCardDownload from "../../VaccineCardDownload/VaccineCardDownload";
import axios from "axios";
import {useSnackbar} from "notistack";


function getSteps() {
    return ['Verify NID and Phone No', 'Download Card'];
}

export default function VaccineCardStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [vaccineCardData, setVaccineCardData] = useState({
        nid: "",
        phoneNo: ""
    });

    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant, msg) => {
        enqueueSnackbar(msg, {variant});
    };

    const [cardData, setCardData] = useState("");

    const handleOnBlur = (event) => {

        const vaccineCardDataTemp = {...vaccineCardData}
        vaccineCardDataTemp[event.target.id] = event.target.value
        setVaccineCardData(vaccineCardDataTemp)
    }

    async function checkVaccineCard(): boolean {

        if(vaccineCardData.nid && vaccineCardData.phoneNo){

            handleClickVariant('info', "Getting Data")

            let isOk = false;

            await axios({
                method: 'post',
                url: 'http://localhost:4200/api/vaccine/vaccine-card',
                headers: {'Content-Type': 'application/json'},
                data: vaccineCardData
            }).then(res => {
                console.log(res.data)

                handleClickVariant('success', res.data.message)

                setCardData(res.data.vaccineInfo)

                isOk = true;
            })
                .catch(error => {
                    // console.log(error)
                    let errorData = error.response.data

                    handleClickVariant('error', errorData.message)

                    isOk = false;
                })

            return isOk;
        }
        else {
            handleClickVariant('warning', "Please Fill the input box")
        }


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

        <HorizontalStepper activeStep={activeStep} steps={steps} handleReset={handleReset}
                           getStepContent={getStepContent} handleBack={handleBack} handleNext={handleNext}/>

    );
}
