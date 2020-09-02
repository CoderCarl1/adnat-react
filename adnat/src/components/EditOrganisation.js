import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// This is used to edit an organisation's name and hourly update
const EditOrganisation = ({ name, sessionId, organisationId }) => {
    
    const [organisationName, setOrganisationName] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const history = useHistory();
    console.log(organisationName);

    const setOrganisationDetails = (organisations) => {
        let organisationData = organisations.filter(organisation => organisation.id === organisationId)
        console.log(organisationData)
            setHourlyRate(organisationData[0].hourlyRate)
            setOrganisationName(organisationData[0].name)
        
    }
    

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }

    const updateOrganisation = event => {
        event.preventDefault();
        axios.put(`http://localhost:3000/organisations/${organisationId}`, {
            name: organisationName,
            hourlyRate: hourlyRate,
        },{
            headers: headers
        })
        .then(response => {
            history.push(`/view-organisation/${organisationId}`);
        })
    }

    // gets all organisations 
    useEffect(() => {
        axios.get("http://localhost:3000/organisations", {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            setOrganisationDetails(response.data);
        })
    }, [])
    
    return (
    <>
        <NavBar/> 

        <h2>Edit Organisation</h2>
        <form onSubmit={updateOrganisation}>
            <label className="label">Name:</label> 
            <input type="text" className="input" name="name" value={organisationName} onChange={e => setOrganisationName(e.target.value)} required></input>
            <br/>
            <label className="label">Hourly rate: $ <input type="number" className="input" name="hourlyRate" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} required></input> per hour </label>
            <br/>
            <br/>
            <input type="submit" value="Update"></input>
            <br/>
            <Link to="/delete">Delete</Link>
        </form>
    </>
)}; 

export default EditOrganisation;
