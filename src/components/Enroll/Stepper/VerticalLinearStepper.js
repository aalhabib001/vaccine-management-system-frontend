import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Snackbar} from "@material-ui/core";
import {Alert} from "bootstrap";
import {Container, Form} from "react-bootstrap";
import './Stepper.css'

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
    return ['Verify NID and Phone No', 'Enter Personal Details', 'Confirmation'];
}


export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [open, setOpen] = React.useState(false);


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
                        <Form>
                            <div className="form-input">
                                <Form.Group controlId="National ID No">
                                    <Form.Label>National ID No</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} type="text"
                                                  placeholder="Enter Your National ID No"
                                                  required/>
                                </Form.Group>
                            </div>
                            <div className="form-input">
                                <Form.Group controlId="Phone No">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Your Phone No"
                                                  required/>
                                </Form.Group>
                            </div>
                        </Form>
                    </Container>
                );
            case 1:
                return (
                    <Container>
                        <Form>
                            <div className="form-input">
                                <Form.Group controlId="Full Name">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Your Full Name"
                                                  required/>
                                </Form.Group>
                            </div>
                            <div className="form-input">
                                <Form.Group controlId="Date of Birth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} type="date"
                                                  required/>
                                </Form.Group>
                            </div>
                            <div className="form-input">
                                <Form.Group controlId="Vaccine Center Name">
                                    <Form.Label>Vaccine Center Name</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} type="text"
                                                  placeholder="Enter Vaccine Center Name"
                                                  required/>
                                </Form.Group>
                            </div>
                            <div className="form-input">
                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control onBlur={handleOnBlur} as="textarea" rows={4}/>
                                </Form.Group>
                            </div>
                        </Form>
                    </Container>
                );
            case 2:
                return (
                    <Container>
                        <div className="form-input">
                            <Form.Group controlId="OTP">
                                <Form.Label>OTP</Form.Label>
                                <Form.Control onBlur={handleOnBlur} type="text"
                                              placeholder="Enter OTP from your Phone"
                                              required/>
                            </Form.Group>
                        </div>
                        <div className="form-input">
                            <Form.Group controlId="I Agree CheckBox">
                                <Form.Check type="checkbox" label="I Agree the terms and conditions"/>
                            </Form.Group>
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
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Vaccine Registration Completed</Typography>
                    <Button onClick={handleReset} className={classes.button} variant="contained"
                            color="primary">
                        Register Another
                    </Button>
                </Paper>
            )}
        </div>
    );
}
