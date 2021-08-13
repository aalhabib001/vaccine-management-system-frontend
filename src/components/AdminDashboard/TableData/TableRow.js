import React, {useContext, useState} from 'react';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Form} from "react-bootstrap";
import './TableRow.css'
import axios from "axios";
import {AlertContext} from "../../../App";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const TableRow = (props) => {
    const {_id, fullName, phoneNo, firstDose, secondDose, firstVac, secondVac, nid} = props.vaccineData;

    const [alertData, setAlertData] = useContext(AlertContext)
    const [vaccineSave, setVaccineSave] = useState({
        doseId: null,
        vaccineDate: "",
        vaccineName: ""
    })

    const handleOnBlur = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.id);

        const vaccineSaveTemp = {...vaccineSave}
        vaccineSaveTemp[event.target.id] = event.target.value
        setVaccineSave(vaccineSaveTemp)
    }

    const classes = useStyles();
    const [vaccine1, setVaccine1] = useState('');
    const [vaccine2, setVaccine2] = useState('');


    const saveVaccineInfo1 = () => {
        vaccineSave.doseId = 1;
        console.log(vaccineSave)
        saveVaccineData()
    }

    const saveVaccineInfo2 = () => {

        vaccineSave.doseId = 2;
        console.log(vaccineSave)
        saveVaccineData()
    }

    const saveVaccineData = () => {
        setAlertData({
            isOpen: true,
            msg: "Saving Data",
            type: 'info'
        })
        axios({
            method: 'put',
            url: 'https://vaccine-ms-01.herokuapp.com/api/admin/vaccine-infos/' + _id,
            headers: {'Content-Type': 'application/json'},
            data: vaccineSave
        })
            .then(res => {
                console.log(res.data)
                // setVaccineData(res.data.data)
                props.setValue(props.value + 1);
                setAlertData({
                    isOpen: true,
                    msg: "Data Saved",
                    type: 'success'
                })
            })
            .catch(error => {
                console.log(error)
                let errorData = error.response.data
                console.log(errorData)

                setAlertData({
                    isOpen: true,
                    msg: errorData.message,
                    type: 'error'
                })
            })
    }


    const getDoseField = (dose, doseId, vaccine, vacName) => {
        if (dose == null) {
            return <div className="d-flex justify-content-start my-2">
                <div className="d-flex justify-content-start mx-0">
                    <Form.Group className="mb-0 mx-2" onBlur={handleOnBlur} controlId="vaccineDate" style={{ width: '85%' }}>
                        <Form.Control type="date" required/>
                    </Form.Group>

                </div>

                <div className="d-flex justify-content-between mx-0">
                    <Form.Group onBlur={handleOnBlur} controlId="vaccineName">
                        <Form.Select defaultValue="Vaccine">
                            <option>Vaccine</option>
                            <option>AstraZeneca</option>
                            <option>Moderna</option>
                            <option>Sinopharm</option>
                            <option>Sinovac</option>
                        </Form.Select>
                    </Form.Group>
                    {
                        (doseId === 1) ?
                            <button className="btn btn-outline-success ms-3" onClick={saveVaccineInfo1}>
                                <i className="fas fa-check-circle"/>
                            </button> :
                            <button className="btn btn-outline-danger ms-3" onClick={saveVaccineInfo2}>
                                <i className="fas fa-check-circle"/>
                            </button>
                    }
                </div>

            </div>;
        } else {
            return <div className="mx-0 d-flex justify-content-start my-3" >
                <div className="d-flex justify-content-start mx-0">
                    <p className="mx-2">Date: {dose}</p>
                </div>
                <div className="d-flex justify-content-start mx-4">
                    <p className="ms-5">Vaccine: {vacName} </p>
                </div>
            </div>;
        }
    }


    return (
        <tr>
            <td>
                <div className="d-flex justify-content-center my-3">{props.index + 1}</div>
            </td>
            <td>
                <div className="d-flex justify-content-center my-3" style={{minWidth: '180px'}}>{fullName}</div>
            </td>
            <td>
                <div className="d-flex justify-content-center my-3" style={{minWidth: '150px'}}>{nid}</div>
            </td>
            <td>
                <div className="d-flex justify-content-center my-3 align-items-center" style={{minWidth: '120px'}}><p>{phoneNo}</p></div>
            </td>
            <td>
                <div style={{minWidth: '400px'}}>{getDoseField(firstDose, 1, vaccine1, firstVac)}</div>
            </td>
            <td>
                <div style={{minWidth: '400px'}}>{getDoseField(secondDose, 2, vaccine2, secondVac)}</div>
            </td>
        </tr>
    );
};

export default TableRow;
