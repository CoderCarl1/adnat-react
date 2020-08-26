import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { setAuthTokens, getAccessToken, isLoggedIn } from "axios-jwt";
import LogIn from './components/LogIn';
import PasswordReset from './components/PasswordReset';
import SignUp from './components/SignUp';
import ViewOrganisation from './components/ViewOrganisation';
import EditOrganisation from './components/EditOrganisation';
import JoinOrganisation from './components/JoinOrganisation';
import ViewShift from './components/ViewShift';
import './App.css';

function App() {
  
  const [name, setName] = useState("");
  // const [isLoggedIn, setLoggedIn] = useState("");
  // const saveName = (name) => {
  //   setName(name);
  // };

  const [sessionId, setSessionId] = useState("")
  const saveSessionId = (sessionId) => {
    setSessionId(sessionId);
  };

  useEffect(() => {
    //if (isLoggedIn) {
      axios.get('http://localhost:3000/users/me', {
              headers: {
                  "Authorization": sessionId,
                  "Content-Type": "application/json"
              }
          })
          .then(response => {
              console.log(response);
              setName(response.data.name);
    // }
  })})

  return (
    <Router>
      <div className="App">
        <h1>Adnat</h1>
          <Route path="/" render={() => (<LogIn saveSessionId={saveSessionId}/>)}  exact />
          <Route path="/password-reset" component={PasswordReset} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/view-organisation" component={ViewOrganisation} exact />
          <Route path="/edit-organisation" component={EditOrganisation} exact />
          <Route path="/join-organisation" render={() => (<JoinOrganisation name={name} sessionId={sessionId} />)} exact />
          <Route path="/view-shifts" component={ViewShift} exact />
      </div>
    </Router>
  );
}

export default App; 