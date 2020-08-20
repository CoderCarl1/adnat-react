import React from 'react';
import { Link } from "react-router-dom";

// NavBar displays once a user is logged in
const NavBar = () => (
    <>
        <p>Logged in as NAME <Link to="/">Log Out</Link></p> 
    </>
);

export default NavBar;
