import React, { useEffect, setState } from 'react';
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

  // Store loggedInUser name in local storage
  function setLoggedInUser(user) {
    user ? localStorage.setItem("loggedInUser", user) : localStorage.removeItem("loggedInUser")
  }
  // Get loggedInUser from localStorage
  function getLoggedInUser(){
    return localStorage.getItem("loggedInUser")
  }

  


  // const [name, setName] = setState("");
  // const saveName = (name) => {
  //   setName(name);
  // };

  const saveToken = (userToken) => {
    setAuthTokens(userToken);
  };

  const getToken = () => {
    getAccessToken();
  };

  useEffect(() => {
    if (isLoggedIn) {
      const token = getToken();
      axios.get('http://localhost:3000/users/me', {
              headers: {
                  "Authorisation": token,
                  "Content-Type": "application/json"
              }
          })
          // .then(response => {
          //     console.log(response);
          // })
    }
  })

  return (
    <Router>
      <div className="App">
        <h1>Adnat</h1>
          <Route path="/" render={() => (<LogIn saveToken={saveToken}/>)}  exact />
          <Route path="/password-reset" component={PasswordReset} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/view-organisation" component={ViewOrganisation} exact />
          <Route path="/edit-organisation" component={EditOrganisation} exact />
          <Route path="/join-organisation" render={() => (<JoinOrganisation getToken={getToken}/>)} exact />
          <Route path="/view-shifts" component={ViewShift} exact />
      </div>
    </Router>
  );
}

export default App; 