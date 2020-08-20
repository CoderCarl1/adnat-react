import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;