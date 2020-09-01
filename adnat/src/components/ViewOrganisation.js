import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// Once a user has joined an organisation they're redirected to this screen where they can view their organisation
const ViewOrganisation = ({ name, sessionId, organisationId }) => {

    // sets all organisations
    const [organisations, setOrganisations] = useState([]);

    // get organisations name from id
    useEffect(() => {
        console.log(organisations);
        axios.get("http://localhost:3000/organisations", {
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response.data);
            setOrganisations(response.data);
        })
    }, [])

    return (
        <>
            <NavBar name={name}>{sessionId}</NavBar>

            {organisations.filter(organisation => organisation.id === organisationId).map(filteredName => (
                <h2>{filteredName.name}</h2>
            ))}

            <Link to="/view-shifts">View Shifts</Link> <Link to="/edit-organisation">Edit</Link>  <Link to="/leave-organisation">Leave</Link>
        </>
)};

export default ViewOrganisation;
