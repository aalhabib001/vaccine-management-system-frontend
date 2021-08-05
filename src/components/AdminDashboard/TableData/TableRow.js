import React from 'react';
import {TextField} from "@material-ui/core";

const TableRow = (props) => {
    const {id, fullName, phoneNo, firstDose, secondDose} = props.vaccineData;

    const handleOnBlur = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }

    const getDoseField = (dose, doseId) => {
        if (dose == null) {
            return <div className="d-flex justify-content-center align-items-center mx-2">
                <div>
                    <TextField
                        id={doseId}
                        margin="none"
                        variant="standard"
                        type="date"
                        onBlur={handleOnBlur}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    {
                        (doseId === "first") ?
                            <button className="btn btn-outline-success ms-3 "><i className="fas fa-check-circle"/>
                            </button> :
                            <button className="btn btn-outline-danger ms-3 "><i className="fas fa-check-circle"/>
                            </button>
                    }

                </div>

            </div>;
        } else {
            return <div className="d-flex justify-content-center align-items-center">
                <p>{dose}</p>
            </div>;
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{fullName}</td>
            <td>{phoneNo}</td>
            <td className="w-25">{getDoseField(firstDose, "first")}</td>
            <td className="w-25">{getDoseField(secondDose, "second")}</td>
        </tr>
    );
};

export default TableRow;
