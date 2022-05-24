import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import './Login.css'
import {useHistory, useLocation} from "react-router-dom";
import {LoginContext} from "../../App";
import axios from "axios";
import {useSnackbar} from "notistack";

const Login = () => {

    let location = useLocation();
    const history = useHistory()
    let {from} = location.state || {from: {pathname: "/"}};

    const [loginData, setLoginData] = useState({
        email: null,
        password: null,
    });
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant, msg) => {
        enqueueSnackbar(msg, {variant});
    };

    const handleLogin = async () => {
        console.log(loginData)

        if (loginData.email && loginData.password) {

            handleClickVariant('info', "Getting Data")

            let isOk = false;

            await axios({
                method: 'post',
                url: 'https://vaccine-ms-01.herokuapp.com/api/users/login',
                headers: {'Content-Type': 'application/json'},
                data: loginData
            }).then(res => {
                console.log(res.data)

                let token = res.data.data.token;

                handleClickVariant('success', res.data.message)

                setLoggedIn(token)
                localStorage.setItem('token', token)

                isOk = true;

                history.push(from)

            })
                .catch(error => {
                    // console.log(error.response)
                    let errorData = error.response.data

                    handleClickVariant('error', errorData.message)

                    isOk = false;
                })

            return isOk;
        } else {
            handleClickVariant('warning', "Please Fill the input box")
        }
    }


    const handleOnBlur = (event) => {
        const loginDataTemp = {...loginData}
        loginDataTemp[event.target.id] = event.target.value
        setLoginData(loginDataTemp)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        loginData.email = event.target.email.value
        loginData.password = event.target.password.value

        await handleLogin()
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="login-box border p-4 ">
                    <h4>Login</h4>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-input-3">

                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onBlur={handleOnBlur} placeholder="Enter email" required/>
                            </Form.Group>

                        </div>
                        <div className="form-input-3">
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" autocomplete="off" onBlur={handleOnBlur}
                                              placeholder="Password" required/>
                            </Form.Group>
                        </div>
                        <div className="form-input-3">
                            <Button className="w-100 mb-3" variant="primary" type="submit">Login</Button>
                        </div>

                    </Form>
                </div>

            </div>
        </>
    );
};

export default Login;
