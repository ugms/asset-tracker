import React from "react";
import logo from "../static/logo.svg";
import "./App.css";
import Login from "../Login/Login.jsx";
import { BrowserRouter, Route } from "react-router-dom";

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
