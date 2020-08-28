import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const LogIn = ({ saveSessionId }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const saveSession = (sessionId) => {
        saveSessionId(sessionId);
    }

    const login = event => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/login', {
            email: email,
            password: password,
        })
        .then(response => {
            if (response.data.sessionId) {
                saveSession(response.data.sessionId);
                history.push("/view-organisation");
            }
        })
    }

    return (
        <>
            <h2>Log in</h2>

            <form onSubmit={login}>
                <label className="label">Email</label>
                <br/>
                <input type="email" className="input" name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <br/>
                <br/>
                <label className="label">Password</label>
                <br/>
                <input type="password" className="input" name="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <br/>
                <br/>
                <input type="checkbox" className="checkbox" name="password"></input>
                <label className="label">Remember me</label>
                <br/>
                <br/>
                <input type="submit" value="Login"></input>
            </form>
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
    )};

export default LogIn;
