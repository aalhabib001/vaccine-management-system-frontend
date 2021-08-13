import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {AlertContext} from "../../App";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();

    const [alertData, setAlertData] = useContext(AlertContext)


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertData({isOpen: false});
    };

    return (
        <div className={classes.root}>
            <Snackbar open={alertData.isOpen} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertData.type}>
                    {alertData.msg}
                </Alert>
            </Snackbar>
            {/*<Alert severity="error">This is an error message!</Alert>*/}
            {/*<Alert severity="warning">This is a warning message!</Alert>*/}
            {/*<Alert severity="info">This is an information message!</Alert>*/}
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </div>
    );
}
