import React from 'react';
import {Button, Form} from "react-bootstrap";
// import {UserContext} from "../../App";
import './Login.css'
import {Link} from "react-router-dom";

const Login = () => {

    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     photoURL: ''
    // });

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="login-box border p-4 ">
                    <h4>Login</h4>
                    <Form>
                        <div className="form-input-3">

                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>

                        </div>
                        <div className="form-input-3">
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required/>
                            </Form.Group>
                        </div>
                        <div className="form-input-3">
                            <div className="d-flex justify-content-between">
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me"/>
                                </Form.Group>
                                {/*<p className="no-button">Forget Password</p>*/}
                            </div>

                        </div>
                        <div className="form-input-3">

                            <Link to="/admin">
                                <Button className="w-100 mb-3" variant="primary" type="submit">Login</Button>
                            </Link>


                        </div>
                        {/*<div className="d-flex justify-content-start">*/}
                        {/*    <p className="mr-1 font-weight-bold">Don't have an account?</p>*/}
                        {/*    <p className="no-button">Create New One</p>*/}
                        {/*</div>*/}

                    </Form>
                </div>

            </div>
        </>
    );
};

export default Login;
