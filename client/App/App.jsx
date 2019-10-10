import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import logo from "../static/logo.svg";
import Login from '../Login/Login.jsx';
import Dashboard from '../Dashboard/Dashboard.js';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>


        <Route exact path="/Login" exact component= />


        <Route exact path="/Dashboard" exact component= />



      </Router>
    </div >


  );
}

export default App;
