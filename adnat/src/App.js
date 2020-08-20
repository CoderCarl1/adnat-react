import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import PasswordReset from './components/PasswordReset';
import SignUp from './components/SignUp';
import JoinOrgansations from './components/JoinOrgansations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Adnat</h1>
          <Route path="/" component={LogIn} exact />
          <Route path="/password-reset" component={PasswordReset} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/join-organisations" component={JoinOrgansations} exact />
      </div>
    </Router>
  );
}

export default App; 