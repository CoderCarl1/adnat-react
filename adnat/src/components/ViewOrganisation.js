import React from 'react';
import { Link } from "react-router-dom";

// When new member signs up they're redirected to this screen and prompted to join organisations
const ViewOrganisation = () => (
    <>
        <p>Logged in as NAME <Link to="/">Log Out</Link></p> 

        <p>You aren't a member of any organisations.</p>
        <p>Join an existing one or create a new one.</p>

        <h2>Organisations</h2>

        <ul>
            <li>
                Bob's Burgers <Link to="/edit-organisation">Edit</Link> <Link to="/join-organisation">Join</Link>
            </li>
            <li>
                Moe's Tavern <Link to="/edit-organisation">Edit</Link> <Link to="/join-organisation">Join</Link>
            </li>
            <li>
                Sally's Sandwiches <Link to="/edit-organisation">Edit</Link> <Link to="/join-organisation">Join</Link>
            </li>
        </ul>

        <h2>Create Organisation</h2>

        <label className="label">Name:</label> 
        <input type="text" className="input" name="name" required></input>
        <br/>
        <label className="label">Hourly rate: $</label>
        <input type="number" className="input" name="rate" required></input>
        <br/>
        <br/>
        <input type="submit" value="Create and Join"></input>
    </>
);

export default ViewOrganisation;
