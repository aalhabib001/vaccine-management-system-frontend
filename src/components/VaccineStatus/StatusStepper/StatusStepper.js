import React from 'react';
import '../../VaccineCard/Stepper/Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import StepperDownButton from "../../HorizontalStepper/StepperDownButton";

function getSteps() {
    return ['Verify NID and Phone No', 'Check Status'];
}

export default function StatusStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleOnBlur = (event) => {
        console.log(event.target.value);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }

    function getStepContent(step) {

        switch (step) {
            case 0:
                return (
                    <NidPhoneStep handleOnBlur={handleOnBlur}/>
                );
            case 1:
                return (
                    <StepperDownButton buttonText="Download Vaccine Certificate"/>
                );
            default:
                return 'Unknown step';
        }
    }

    const handleNext = () => {
        console.log(activeStep)


        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <HorizontalStepper activeStep={activeStep} steps={steps} handleReset={handleReset}
                           getStepContent={getStepContent} handleBack={handleBack} handleNext={handleNext}/>
    );
}

