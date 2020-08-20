import React from 'react';
import { Link } from "react-router-dom";

// This is used to edit an organisation's name and hourly update
const EditOrganisation = () => (
    <>
        <p>Logged in as NAME <Link to="/">Log Out</Link></p> 

        <h2>Edit Organisation</h2>

        <label className="label">Name:</label> 
        <input type="text" className="input" name="name" required></input>
        <br/>
        <label className="label">Hourly rate: $ <input type="number" className="input" name="rate" required></input> per hour </label>
        <br/>
        <br/>
        <input type="submit" value="Update"></input>
        <br/>
        <Link to="/delete">Delete</Link>
    </>
);

export default EditOrganisation;
