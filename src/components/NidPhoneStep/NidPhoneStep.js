import React from 'react';
import {Container, Form} from "react-bootstrap";

const NidPhoneStep = (props) => {
    const handleOnBlur = props.handleOnBlur;

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
};

export default NidPhoneStep;
