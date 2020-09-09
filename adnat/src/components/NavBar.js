import React from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name, sessionId }) => {

    const history = useHistory();

    const logout = () => {
        console.log(sessionId);
        axios.delete("http://localhost:3000/auth/logout", {
            headers: {
                "Authorization": sessionId,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log(response);
            history.push("/");
        })
    }
    
    return (
        <>
            <p>Logged in as {name} <Link onClick={() => logout()}>Log Out</Link></p> 
        </>
)};

export default NavBar;