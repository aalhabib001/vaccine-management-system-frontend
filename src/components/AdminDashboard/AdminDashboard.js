import React from 'react';
import {Container, Table} from "react-bootstrap";
import {vaccineFakeData} from "./VaccineFakeData";
import TableRow from "./TableData/TableRow";
import {Input} from "@material-ui/core";

const AdminDashboard = () => {

    const handleOnBlur = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }


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
                        vaccineFakeData.map(vaccineData => <TableRow vaccineData={vaccineData} key={vaccineData.id}/>)
                    }
                    </tbody>
                </Table>
            </Container>

        </div>
    );
};

export default AdminDashboard;
