import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import './TableRow.css'

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
    const {id, fullName, phoneNo, firstDose, secondDose, firstVac, secondVac} = props.vaccineData;


    const handleOnBlur = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        // const newServiceTemp = {...newService}
        // newServiceTemp[event.target.id] = event.target.value
        // setNewService(newServiceTemp)
    }

    const classes = useStyles();
    const [vaccine1, setVaccine1] = useState('');
    const [vaccine2, setVaccine2] = useState('');

    const handleChange = (event) => {
        if (event.target.name === 1) {
            setVaccine1(event.target.value)
        } else {
            setVaccine2(event.target.value)
        }
    };

    const getDoseField = (dose, doseId, vaccine, vacName) => {
        if (dose == null) {
            return <div className="d-flex justify-content-center  mx-2">
                <div className="d-flex justify-content-center  mx-2">
                    <TextField
                        id="1"
                        margin="none"
                        variant="standard"
                        type="date"
                        onBlur={handleOnBlur}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <FormControl className={classes.formControl} style={{ margin: '0', marginLeft: '15px' }}>
                        <Select
                            labelId="demo-simple-select-label"
                            name={doseId}
                            value={vaccine}
                            displayEmpty
                            onChange={handleChange}

                        >
                            <MenuItem value="" disabled>
                                Vaccine
                            </MenuItem>
                            <MenuItem value={'Moderna'}>Moderna</MenuItem>
                            <MenuItem value={'Pfizer'}>Pfizer</MenuItem>
                            <MenuItem value={'AstraZeneca'}>AstraZeneca</MenuItem>
                            <MenuItem value={'Sinopharm'}>Sinopharm</MenuItem>
                            <MenuItem value={'Sinovac'}>Sinovac</MenuItem>
                            <MenuItem value={'Sputnik'}>Sputnik-V</MenuItem>
                            <MenuItem value={'Janssen'}>Janssen</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    {
                        (doseId === 1) ?
                            <button className="btn btn-outline-success ms-3 "><i className="fas fa-check-circle"/>
                            </button> :
                            <button className="btn btn-outline-danger ms-3 "><i className="fas fa-check-circle"/>
                            </button>
                    }


                </div>

            </div>;
        } else {
            return <div className="mx-2 my-2">
                <div className="d-flex mx-2">
                    <p className="mx-2 ">Date: {dose}</p>
                    <p className="ms-5">Vaccine: {vacName} </p>
                </div>
            </div>;
        }
    }


    return (
        <tr>
            <td><div className="d-flex justify-content-center my-2">{id}</div></td>
            <td><div className="d-flex justify-content-center my-2" style={{ minWidth: '150px' }}>{fullName}</div></td>
            <td><div className="d-flex justify-content-center my-2" style={{ minWidth: '120px' }}><p>{phoneNo}</p></div></td>
            <td className="">{getDoseField(firstDose, 1, vaccine1, firstVac)}</td>
            <td className="">{getDoseField(secondDose, 2, vaccine2, secondVac)}</td>
        </tr>
    );
};

export default TableRow;
