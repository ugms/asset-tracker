import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// import logo from "../static/logo.svg";
import Login from "../Login/Login.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" exact component={Login} />
        <Login />
      </Router>
    </div>
  );
}

export default App;
