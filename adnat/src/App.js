import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import PasswordReset from './components/PasswordReset';
import SignUp from './components/SignUp';
import ViewOrganisation from './components/ViewOrganisation';
import EditOrganisation from './components/EditOrganisation';
import JoinOrganisation from './components/JoinOrganisation';
import ViewShift from './components/ViewShift';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Adnat</h1>
          <Route path="/" component={LogIn} exact />
          <Route path="/password-reset" component={PasswordReset} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/view-organisation" component={ViewOrganisation} exact />
          <Route path="/edit-organisation" component={EditOrganisation} exact />
          <Route path="/join-organisation" component={JoinOrganisation} exact />
          <Route path="/view-shifts" component={ViewShift} exact />
      </div>
    </Router>
  );
}

export default App; 