import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

// Once a user has joined an organisation they're redirected to this screen
const JoinOrganisation = () => (
    <>
        <NavBar/>

        <h2>ORGANISATIONS NAME</h2>

        <Link to="/view-shifts">View Shifts</Link> <Link to="/edit-organisation">Edit</Link>  <Link to="/leave-organisation">Leave</Link>
    </>
);

export default JoinOrganisation;
