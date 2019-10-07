import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import logo from "../static/logo.svg";
import Login from "../Login/Login.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
