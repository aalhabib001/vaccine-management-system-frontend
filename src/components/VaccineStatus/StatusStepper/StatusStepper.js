import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container, Form} from "react-bootstrap";
import '../../VaccineCard/Stepper/Stepper.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


function getSteps() {
    return ['Verify NID and Phone No', 'Check Status'];
}


export default function StatusStepper() {
    const classes = useStyles();
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
                    <Container>
                        <div className="form-2">
                            <Form className="mb-4">
                                <div className="form-input-2">
                                    <Form.Group controlId="National ID No">
                                        <Form.Label>National ID No</Form.Label>
                                        <Form.Control onBlur={handleOnBlur} type="text"
                                                      placeholder="Enter Your National ID No"
                                                      required/>
                                    </Form.Group>
                                </div>
                                <div className="form-input-2">
                                    <Form.Group controlId="Phone No">
                                        <Form.Label>Phone No</Form.Label>
                                        <Form.Control onBlur={handleOnBlur} type="text"
                                                      placeholder="Enter Your Phone No"
                                                      required/>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                    </Container>
                );
            case 1:
                return (
                    <Container>
                        <div className="d-flex justify-content-center">
                            <div className="form-input-2">
                                <button className="btn btn-primary mb-4">Download Vaccine Certificate</button>
                            </div>
                        </div>

                    </Container>
                );
            default:
                return 'Unknown step';
        }
    }

    const handleNext = () => {

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    ;

    const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    ;

    const handleReset = () => {
            setActiveStep(0);
        }
    ;

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="mb-5">
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>

                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
