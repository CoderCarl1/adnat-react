import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => (
    <>
        <h2>Sign up</h2>

        <label className="label">Name</label>
        <br/>
        <input type="text" className="input" name="usersname" required></input>
        <br/>
        <br/>
        <label className="label">Email</label>
        <br/>
        <input type="email" className="input" name="email" required></input>
        <br/>
        <br/>
        <label className="label">Password <br/> (6 characters minumum)</label>
        <br/>
        <input type="password" className="input" name="password" required></input>
        <br/>
        <br/>
        <label className="label">Password confirmation</label>
        <br/>
        <input type="password" className="input" name="password" required></input>
        <br/>
        <br/>
        <input type="submit" value="Sign up"></input>

        <nav>
            <ul>
                <li>
                    <Link to="/">Log in</Link>
                </li>
            </ul>
        </nav>
    </>
);

export default SignUp;
