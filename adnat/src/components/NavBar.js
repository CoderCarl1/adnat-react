import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name }) => {

    // useEffect(() => {
    //     const token = getToken();
    //     // .then((response) => {(axios.get('http://localhost:3000/users/me', {
    //     //         headers: {
    //     //             "Authorisation": response,
    //     //             "Content-Type": "application/json"
    //     //         }
    //     //     }).then(response => {
    //     //         console.log(response);
    //     //     })
    //     // )})
        
    // }) 
    
    return (
        <>
            <p>Logged in as {name} <Link to="/">Log Out</Link></p> 
        </>
)};

export default NavBar;
