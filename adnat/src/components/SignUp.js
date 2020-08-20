import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => (
    <>
        <h2>Log in</h2>

        <label className="label">Email</label>
        <br/>
        <input type="email" className="input" name="email" placeholder="Email" required></input>
        <br/>
        <label className="label">Password</label>
        <br/>
        <input type="password" className="input" name="password" placeholder="Password" required></input>
        <br/>
        <input type="checkbox" className="input" name="password"></input>
        <label className="label">Remember me</label>
        <br/>
        <input type="submit" value="Login"></input>

        {/* <nav>
            <Link to="/sign-up">Sign up</Link>
            <Link to="/reset-password">Forgot your password?</Link>
        </nav> */}
        
    </>
);

export default SignUp;
