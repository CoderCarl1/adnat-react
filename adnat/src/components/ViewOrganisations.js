import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

// When new member signs up they're redirected to this screen and prompted to join organisations
const ViewOrganisations = ({ name, sessionId }) => {
    const [organisations, setOrganisations] = useState([]);
    // const [createAndJoin, setCreateAndJoin] = useState("");
    const [organisationName, setName] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    // const [joinOrganisation, setJoinOrganisation] = useState("");
    const [organisationId, setOrganisationId] = useState("");
    const history = useHistory();

    const headers = {
        "Authorization": sessionId,
        "Content-Type": "application/json"
    }

    // (value={organisationId} onChange={e => setOrganisationId(e.target.value)})

    // joins an organisation 
    const joinOrganisation = (organisationIdSupplied) => {
        // set organisationId
        // setOrganisationId(organisationIdSupplied);
        // event.preventDefault();
        console.log(organisationId);
        axios.post("http://localhost:3000/organisations/join", {
            id: organisationId,      
            // name: organisationName,
            // hourlyRate: hourlyRate,
        }, {
            headers: headers
        })
        .then(response => {
            history.push("/view-organisation");
        })
    }

    //edit an organisation


    // create and join new organisations
    const createAndJoinOrganisation = event => {
        event.preventDefault();
        axios.post("http://localhost:3000/organisations/create_join", {
            name: organisationName,
            hourlyRate: hourlyRate,
        },{
            headers: headers
        })
        .then(response => {
            history.push("/view-organisation");
        })
    }

    // gets list of all available organisations 
    useEffect(() => {
        axios.get("http://localhost:3000/organisations", {
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            setOrganisations(response.data);
        })
    }, [])

    return ( 
    <>
        <NavBar name={name}/>

        <p>You aren't a member of any organisations.</p>
        <p>Join an existing one or create a new one.</p><br/>

        <h2>Organisations</h2><br/>

        <ul>
        {organisations.map((organisation, key)=>(
            <li key={key}>{organisation.name} Organisation Id:{organisation.id}<Link to="/edit-organisation">Edit</Link> <Link to="/view-organisation">Join</Link></li>
        ))}
        </ul>

        {/* <p>{organisations.map((organisation, key)=>(
            <p key={key}>{organisation.name}</p>
            ))}
        </p> */}

        <br/>
        <br/>
        <ul>
            <li>
                 Bob's Burgers <Link to="/edit-organisation">Edit</Link> <Link to="/view-organisation" onClick={joinOrganisation(1)}>Join</Link>
            </li>
            <li>
                Moe's Tavern <Link to="/edit-organisation">Edit</Link> <Link to="/view-organisation">Join</Link>
            </li>
            <li>
                Sally's Sandwiches <Link to="/edit-organisation">Edit</Link> <Link to="/view-organisation">Join</Link>
            </li>
        </ul>

        <br/>
        <br/>
        <h2>Create Organisation</h2>
        <form onSubmit={createAndJoinOrganisation}>
            <label className="label">Name:</label> 
            <input type="text" className="input" name="name" value={organisationName} onChange={e => setName(e.target.value)} required></input>
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
