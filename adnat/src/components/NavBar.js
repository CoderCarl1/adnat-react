import React from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name, sessionId }) => {

    const history = useHistory();
    
    // const headers = {
    //     "Authorization": sessionId,
    //     "Content-Type": "application/json"
    // }

    const logout = () => {
        //event.preventDefault();
        axios.delete('http://localhost:3000/auth/logout', {
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
