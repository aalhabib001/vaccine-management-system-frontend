import React from 'react';
import {Container, Form} from "react-bootstrap";

const NidPhoneStep = (props) => {
    const {handleOnBlur} = props;

    return (
        <Container>
            <div className="form-2 su-main-banner-area-3">
                <div className="mb-4">
                    <div className="form-input-2">
                        <Form.Group controlId="nid">
                            <Form.Label>National ID No</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="text"
                                          placeholder="Enter Your National ID No"
                                          required/>
                        </Form.Group>
                    </div>
                    <div className="form-input-2 mt-3">
                        <Form.Group controlId="phoneNo">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="text"
                                          placeholder="Enter Your Phone No"
                                          required/>
                        </Form.Group>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NidPhoneStep;
