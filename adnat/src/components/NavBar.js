import React from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name, sessionId }) => {

    const history = useHistory();
    
    const endSession = (sessionId) => {
        endSession(sessionId);
    }

    const logout = (e) => {
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
            if (response.data);
            endSession(response.data);
            history.push("/");
        })
    }
    
    return (
        <>
            <p>Logged in as {name} <Link exact to="/" onClick={logout}>Log Out</Link></p> 
        </>
)};

export default NavBar;
