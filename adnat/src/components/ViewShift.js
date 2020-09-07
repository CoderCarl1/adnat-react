import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';

// Once a user joins an organisation they're redirected to this screen
const ViewShift = ({ name, sessionId, organisationId }) => {

    const history = useHistory();

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }

    // sets all organisations
    const [organisations, setOrganisations] = useState([]);
    
    // set all shifts
    const [shifts, setShifts] = useState([]);

    // gets all shifts
    useEffect(() => {
        axios.get("http://localhost:3000/shifts", {
            headers: headers
        })
        .then(response => {
            setShifts(response.data);
        })
    }, [])

    return (
        <>
            <NavBar name={name}>{sessionId}</NavBar> 

            {organisations.filter(organisation => organisation.id === organisationId).map(filteredName => (
                <h2>{filteredName.name}</h2>
                ))}
            <h2>ORGANISATIONS NAME</h2>

            <h4>Shifts</h4>

            <tr>
                <td>Employee name</td>
                <td>Shift date</td>
                <td>Start time</td>
                <td>Finish time</td>
                <td>Break length (minutes)</td>
                <td>Hours Worked</td>
                <td>Shift cost</td>
            </tr>
            
        </>
)};

export default ViewShift;
