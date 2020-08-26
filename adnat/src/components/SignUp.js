import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { setAuthTokens } from "axios-jwt";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const history = useHistory();

    const signUp = event => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/signup', {
            name: name,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
        })
        .then(response => {
            console.log(response);
            if (response.data.sessionId) {
                setAuthTokens(response.data.sessionId);
                history.push("/view-organisations");
            }
        });
    }

    return (
        <>
            <h2>Sign up</h2>

            <form onSubmit={signUp}>
                <label className="label">Name</label>
                <br/>
                <input type="text" className="input" name="name" value={name} onChange={e => setName(e.target.value)} required></input>
                <br/>
                <br/>
                <label className="label">Email</label>
                <br/>
                <input type="email" className="input" name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <br/>
                <br/>
                <label className="label">Password <br/> (6 characters minimum)</label>
                <br/>
                <input type="password" className="input" name="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <br/>
                <br/>
                <label className="label">Password confirmation</label>
                <br/>
                <input type="password" className="input" name="passwordConfirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required></input>
                <br/>
                <br/>
                <input type="submit" value="Sign up"></input>
            </form>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Log in</Link>
                    </li>
                </ul>
            </nav>
        </>
    )};

export default SignUp;
