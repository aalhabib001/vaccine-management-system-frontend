import React, {useState} from 'react';
import '../../VaccineCard/Stepper/Stepper.css'
import NidPhoneStep from "../../NidPhoneStep/NidPhoneStep";
import HorizontalStepper from "../../HorizontalStepper/HorizontalStepper";
import {useSnackbar} from "notistack";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

function getSteps() {
    return ['Verify NID and Phone No', 'Check Status'];
}

export default function StatusStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    const [statusData, setStatusData] = useState('')
    const [vaccineStatusData, setVaccineStatusData] = useState({
        nid: "",
        phoneNo: ""
    });

    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant, msg) => {
        enqueueSnackbar(msg, {variant});
    };

    const handleOnBlur = (event) => {
        const vaccineCardDataTemp = {...vaccineStatusData}
        vaccineCardDataTemp[event.target.id] = event.target.value
        setVaccineStatusData(vaccineCardDataTemp)
    }

    async function checkVaccineStatus(): boolean {
        console.log(vaccineStatusData)

        if (vaccineStatusData.nid && vaccineStatusData.phoneNo) {

            handleClickVariant('info', "Getting Data")

            let isOk = false;

            await axios({
                method: 'post',
                url: 'http://localhost:4200/api/vaccine/vaccine-status',
                headers: {'Content-Type': 'application/json'},
                data: vaccineStatusData
            }).then(res => {
                console.log(res.data)

                handleClickVariant('success', res.data.message)

                setStatusData(res.data.message)

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
        if (await checkVaccineStatus()) {
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
                    <div className="d-flex justify-content-center">
                        <div>
                            <h5 className="d-flex justify-content-center my-3">{statusData}</h5>
                            <h5 className="d-flex justify-content-center my-3">Go to your selected vaccine center with
                                vaccine card </h5>
                            <div className="d-flex justify-content-center my-3">
                                <Link to="/vaccine-card"><Button className="btn btn-primary">Download Vaccine Card From
                                    Here</Button></Link>
                            </div>

                        </div>
                    </div>
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

