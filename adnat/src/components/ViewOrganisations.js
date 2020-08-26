import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// When new member signs up they're redirected to this screen and prompted to join organisations
const ViewOrganisations = ({ name, sessionId }) => {
    const [organistations, setOrganisations] = useState("");
    const [createAndJoin, setCreateAndJoin] = useState("");
    const [OrganisationName, setName] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const history = useHistory();

    const createAndJoinOrganisation = event => {
        event.preventDefault();
        axios.post("http://localhost:3000/organisations/create_join", {
            name: OrganisationName,
            hourlyRate: hourlyRate,
        },{
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            history.push("/join-organisation");
        })
    }

    useEffect(() => {
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
    })

    return ( 
    <>
        <NavBar name={name}/>

        <p>You aren't a member of any organisations.</p>
        <p>Join an existing one or create a new one.</p>

        <h2>Organisations</h2>
        {/* <p>{organistations}</p> */}

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
        <form onSubmit={createAndJoinOrganisation}>
            <label className="label">Name:</label> 
            <input type="text" className="input" name="name" value={OrganisationName} onChange={e => setName(e.target.value)} required></input>
            <br/>
            <label className="label">Hourly rate: $</label>
            <input type="number" className="input" name="hourlyRate" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} required></input>
            <br/>
            <br/>
            <input type="submit" value="Create and Join"></input>
        </form>
    </>
)};

export default ViewOrganisations;
