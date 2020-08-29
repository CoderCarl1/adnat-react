import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = ({ name }) => {

    const history = useHistory();

    const logout = event => {
        event.preventDefault();
        axios.delete('http://localhost:3000/auth/logout')
        .then(reponse => {
            history.push("/");
        })
    }
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
            <p>Logged in as {name} <Link onClick={logout}>Log Out</Link></p> 
        </>
)};

export default NavBar;
