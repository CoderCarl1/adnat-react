import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import LogIn from './components/LogIn';
import PasswordReset from './components/PasswordReset';
import SignUp from './components/SignUp';
import ViewOrganisations from './components/ViewOrganisations';
import ViewOrganisation from './components/ViewOrganisation';
import EditOrganisation from './components/EditOrganisation';
// import JoinOrganisation from './components/JoinOrganisation';
import ViewShift from './components/ViewShift';
import './App.css';

function App() {
  
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [organisationId, setOrganistationId] = useState("");
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
              setOrganistationId(response.data.organisationId);
              setUserId(response.data.id);
    // }
  })})

  return (
    <Router>
      <div className="App">
        <h1 className="mainHeading">Adnat</h1>
          <Route path="/" render={() => (<LogIn saveSessionId={saveSessionId} organisationId={organisationId} />)}  exact />
          <Route path="/password-reset" component={PasswordReset} exact />
          <Route path="/sign-up" render={() => (<SignUp saveSessionId={saveSessionId}/>)} exact />
          <Route path="/view-organisations" render={() => (<ViewOrganisations name={name} sessionId={sessionId} />)} exact />
          <Route path="/view-organisation/:id" render={() => (<ViewOrganisation name={name} sessionId={sessionId} organisationId={organisationId} /> )} exact />
          <Route path="/edit-organisation/:id" render={() => (<EditOrganisation name={name} sessionId={sessionId} organisationId={organisationId} /> )} exact />
          {/* <Route path="/join-organisation" render={() => (<JoinOrganisation name={name} sessionId={sessionId} />)} exact /> */}
          <Route path="/view-shifts/:id" render={() => (<ViewShift name={name} sessionId={sessionId} organisationId={organisationId} userId={userId} /> )}exact />
      </div>
    </Router>
  );
}

export default App; 