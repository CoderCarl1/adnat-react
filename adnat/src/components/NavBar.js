import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// NavBar displays once a user is logged in
const NavBar = () => {

    
    
    return (
        <>
            <p>Logged in as NAME <Link to="/">Log Out</Link></p> 
        </>
)};

export default NavBar;
