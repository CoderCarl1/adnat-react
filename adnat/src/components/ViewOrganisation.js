import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// Once a user has joined an organisation they're redirected to this screen where they can view their organisation
const ViewOrganisation = ({ name, sessionId }) => {
    //const [organisationId, setOrganisationId] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [userId, setUserId] = useState(0);

    // gets users organisation id
    // useEffect(() => {
    //     axios.get("http://localhost:3000/users/me", {
    //         headers: {
    //             "Authorization": sessionId,
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(response => {
    //         console.log(response);
    //         setOrganisationId(response.data.organisationId);
    //     })
    // })

    // get organisations name from id
    useEffect(() => {
        axios.get("http://localhost:3000/organisations", {
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response.data);
            setOrganisationName(response.data.name );
        })
    }, [userId])

    return (
        <>
            <NavBar name={name} />

            {/* <h2>{organisationId}</h2> */}
            <h2>{organisationName}</h2>

            <Link to="/view-shifts">View Shifts</Link> <Link to="/edit-organisation">Edit</Link>  <Link to="/leave-organisation">Leave</Link>
        </>
)};

export default ViewOrganisation;
