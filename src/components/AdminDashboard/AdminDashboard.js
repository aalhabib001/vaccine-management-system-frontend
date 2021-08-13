import React, {useContext, useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import {vaccineFakeData} from "./VaccineFakeData";
import TableRow from "./TableData/TableRow";
import {Input} from "@material-ui/core";
import axios from "axios";
import CustomizedSnackbars from "../AlertSnackbar/AlertSnackbar";
import {AlertContext} from "../../App";

const AdminDashboard = () => {

    const handleOnBlur = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }

    const [value, setValue] = useState(1);
    const [vaccineData, setVaccineData] = useState([]);

    useEffect(() => {

        setAlertData({
            isOpen: true,
            msg: "Data Loading from Internet",
            type: 'info'
        })

        axios({
            method: 'get',
            url: 'https://vaccine-ms-01.herokuapp.com/api/admin/vaccine-infos',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                console.log(res.data)
                setVaccineData(res.data.data)
                setAlertData({
                    isOpen: true,
                    msg: "Data Loaded from Internet",
                    type: 'success'
                })
            })
            .catch(error => {
                let errorData = error.response.data
                console.log(errorData)

                setAlertData({
                    isOpen: true,
                    msg: errorData.message,
                    type: 'error'
                })
            })

    }, [value])

    const [alertData, setAlertData] = useContext(AlertContext)


    return (
        <div className="su-main-banner-area-2">
            <div className="d-flex justify-content-center m-3">
                <h3>Registered Vaccine Users</h3>
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-center">#</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">Full Name</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">NID</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">Phone No</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">1st Dose</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">2nd Dose</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="d-flex justify-content-center">#</div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">
                                <Input
                                    placeholder="Search By Name"
                                    id="byName"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                        </th>
                        <th>
                            <div className="d-flex justify-content-center">
                                <Input
                                    placeholder="Search By Phone"
                                    id="byPhone"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                        </th>
                        {/*<th/>*/}
                        {/*<th/>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        vaccineData.map((vaccineInfo, index) => <TableRow vaccineData={vaccineInfo}
                                                                          key={vaccineInfo._id} index={index} setValue={setValue} value={value} />)
                    }
                    </tbody>
                </Table>

                <CustomizedSnackbars/>

            </Container>

        </div>
    );
};

export default AdminDashboard;
