import React from 'react';
import { Link } from "react-router-dom";

const LogIn = () => (
    <>
        <h2>Log in</h2>

        <label className="label">Email</label>
        <br/>
        <input type="email" className="input" name="email" placeholder="Email" required></input>
        <br/>
        <br/>
        <label className="label">Password</label>
        <br/>
        <input type="password" className="input" name="password" placeholder="Password" required></input>
        <br/>
        <br/>
        <input type="checkbox" className="input" name="password"></input>
        <label className="label">Remember me</label>
        <br/>
        <br/>
        <input type="submit" value="Login"></input>

        <nav>
            <ul>
                <li>
                    <Link to="/sign-up">Sign up</Link>
                </li>
                <li>
                    <Link to="password-reset">Forgot your password?</Link>
                </li>
            </ul>
        </nav>
    </>
);

export default LogIn;
