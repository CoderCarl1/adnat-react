import React from 'react';
import { Link } from "react-router-dom";

// Once a user joins an organisation they're redirected to this screen
const ViewShift = () => (
    <>
        <p>Logged in as NAME <Link to="/">Log Out</Link></p> 

        <h2>ORGANISATIONS NAME</h2>

        <h4>Shifts</h4>

        <Link to="/view-shifts">View Shifts</Link> <Link to="/edit-organisation">Edit</Link>  <Link to="/leave-organisation">Leave</Link>
    </>
);

export default ViewShift;
