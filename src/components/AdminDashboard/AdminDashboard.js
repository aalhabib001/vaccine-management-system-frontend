import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import TableRow from "./TableData/TableRow";
import {Input} from "@material-ui/core";
import axios from "axios";
import {useSnackbar} from "notistack";

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

    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant, msg) => {
        enqueueSnackbar(msg, {variant});
    };

    useEffect(() => {

        handleClickVariant('info', "Data Loading from Internet")

        axios({
            method: 'get',
            url: 'https://vaccine-ms-01.herokuapp.com/api/admin/vaccine-infos',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                console.log(res.data)
                setVaccineData(res.data.data)

                handleClickVariant('success', "Data Loaded from Internet")

            })
            .catch(error => {
                let errorData = error.response.data
                console.log(errorData)

                handleClickVariant('error', errorData.message)
            })

    }, [value])



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
                                                                          key={vaccineInfo._id} index={index}
                                                                          setValue={setValue} value={value}/>)
                    }
                    </tbody>
                </Table>


            </Container>

        </div>
    );
};

export default AdminDashboard;

