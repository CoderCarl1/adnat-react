import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// Once a user has joined an organisation they're redirected to this screen
const JoinOrganisation = ({ name, sessionId }) => {
let organisations = ""; 

    useEffect(() => {
        axios.get("http://localhost:3000/organisations" , {
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            organisations = response.data;
        })
    })

    return (
        <>
            <NavBar name={name} />

            <h2>{organisations}</h2>

            <Link to="/view-shifts">View Shifts</Link> <Link to="/edit-organisation">Edit</Link>  <Link to="/leave-organisation">Leave</Link>
        </>
)};

export default JoinOrganisation;
