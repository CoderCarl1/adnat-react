import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <h1>Adnat</h1>
       <LogIn />
        <Route path="/sign-up" component={SignUp} exact />
      </div>
    </Router>
   
  );
}

export default App; 