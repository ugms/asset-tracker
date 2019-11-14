import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "../Login/Login.jsx";
import Register from '../Register/Register.jsx'
import CheckoutFrom from '../CheckoutForm/CheckoutForm.jsx'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Checkout-Form" exact component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
