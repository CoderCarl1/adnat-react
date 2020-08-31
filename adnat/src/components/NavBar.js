import React from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name, sessionId }) => {

    const history = useHistory();
    const endSession = (sessionId) => {
        endSession(sessionId);
    }

    const logout = event => {
        //event.preventDefault();
        console.log(sessionId);
        axios.delete('http://localhost:3000/auth/logout', {
        }, {
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.data.sessionId);
            endSession(response.data.sessionId);
            history.push("/");
        })
    }
    
    return (
        <>
            <p>Logged in as {name} <Link to="/" onClick={e => logout(e.target.value)} exact>Log Out</Link></p> 
        </>
)};

export default NavBar;
