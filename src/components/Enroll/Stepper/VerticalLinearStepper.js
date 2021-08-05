import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Form} from "react-bootstrap";
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Stepper.css'
import {TextField} from "@material-ui/core";

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

    const handleOnBlur = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }

    const top100Films = [
        {title: 'Bangabandhu Sheikh Mujib Medical University Hospital'},
        {title: 'Dhaka Medical College and Hospital'},
        {title: 'Combined Military Hospital (CMH)'},
        {title: 'Kurmitola General Hospital'},
        {title: 'Kuwait Bangladesh Friendship Government Hospital'},
        {title: "Shaheed Suhrawardy Medical College and Hospital"}
    ];

    function getStepContent(step) {

        switch (step) {
            case 0:
                return (
                    <Container className="su-main-banner-area-3">
                        <Form>
                            <div className="form-input">
                                <TextField
                                    id="national-id-no"
                                    label="National Id No"
                                    margin="normal"
                                    variant="standard"
                                    type="number"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="form-input">
                                <TextField
                                    id="phone-no"
                                    label="Phone No"
                                    margin="normal"
                                    variant="standard"
                                    type="number"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                        </Form>
                    </Container>
                );
            case 1:
                return (
                    <Container className="su-main-banner-area-3">
                        <Form>
                            <div className="form-input">
                                <TextField
                                    id="full-name"
                                    label="Full Name"
                                    margin="normal"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="form-input">
                                <Autocomplete
                                    freeSolo
                                    disableClearable
                                    id="vaccine-center"
                                    options={top100Films.map((option) => option.title)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Vaccine Center"
                                            margin="normal"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            InputProps={{...params.InputProps, type: 'search'}}
                                        />
                                    )}
                                />
                            </div>
                            <div className="form-input">
                                <TextField
                                    id="date-of-birth"
                                    label="Date Of Birth"
                                    margin="normal"
                                    variant="standard"
                                    type="date"
                                    defaultValue="0000-00-00"
                                    onBlur={handleOnBlur}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="form-input">
                                <TextField
                                    id="address"
                                    label="Address"
                                    margin="normal"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    multiline
                                    rows={4}
                                />
                            </div>
                        </Form>
                    </Container>
                );
            case 2:
                return (
                    <Container className="su-main-banner-area-3">
                        <Form>
                            <div className="form-input">
                                <TextField
                                    id="otp"
                                    label="OTP"
                                    margin="normal"
                                    variant="standard"
                                    type="number"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="form-input">
                                <Form.Group controlId="I Agree CheckBox">
                                    <Form.Check type="checkbox" label="I Agree the terms and conditions"/>
                                </Form.Group>
                            </div>
                        </Form>
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
