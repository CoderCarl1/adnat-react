import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// Once a user has joined an organisation they're redirected to this screen where they can view their organisation
const ViewOrganisation = ({ name, sessionId, organisationId }) => {

    const history = useHistory();    

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }
    // sets all organisations
    const [organisations, setOrganisations] = useState([]);

    // leave organisation
    const leaveOrganisation = () => {
        axios.post("http://localhost:3000/organisations/leave", {
        }, {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            // setOrganisationId(response.data);
            history.push("/view-organisations");
        })
    }

    // gets all organisations
    useEffect(() => {
        console.log(organisations);
        axios.get("http://localhost:3000/organisations", {
            headers: headers
        })
        .then(response => {
            // console.log(response.data);
            setOrganisations(response.data);
        })
    }, [])

    return (
        <>
            <NavBar name={name}>{sessionId}</NavBar>

            {organisations.filter(organisation => organisation.id === organisationId).map(filteredName => (
                <h2>{filteredName.name}</h2>
            ))}

            <Link to={`/view-shifts/${organisationId}`}>View Shifts</Link>
            <Link to={`/edit-organisation/${organisationId}`}>Edit</Link> 
            <Link onClick={() => leaveOrganisation()}>Leave</Link>
        </>
)};

export default ViewOrganisation;
