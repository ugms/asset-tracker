import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "../Login/Login.jsx";
import Register from '../Register/Register.jsx'
import Dashboard from '../Dashboard/Dashboard.jsx'
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx'
import InventoryOverview from '../InventoryOverview/InventoryOverview.jsx'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />

        <Route exact path="/Dashboard" exact component={Dashboard} />
        <Route exact path="/Inventory-Overview" exact component={InventoryOverview} />
        <Route exact path="/Checkout-Form" exact component={CheckoutForm} />



      </Router>
    </div>


  );
}

export default App;
