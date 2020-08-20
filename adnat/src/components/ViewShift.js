import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

// Once a user joins an organisation they're redirected to this screen
const ViewShift = () => (
    <>
        <NavBar/>

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
);

export default ViewShift;
