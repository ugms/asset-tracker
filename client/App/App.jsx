import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import logo from "../static/logo.svg";
import Login from '../Login/Login.jsx';
import Dashboard from '../Dashboard/Dashboard.js';
import InventoryOverview from '../InventoryOverview/InventoryOverview.jsx'
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx'
import NewItemForm from '../NewItemForm/NewItemForm.jsx'
import InventoryOverviewTest from '../InventoryOverview/InventoryOverviewTest.jsx'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/Login" exact component={Login} />
        <Route exact path="/Dashboard" exact component={Dashboard} />
        <Route exact path="/Inventory-Overview" exact component={InventoryOverview} />
        <Route exact path="/Checkout-Form" exact component={CheckoutForm} />
        <Route exact path="/New-Item-Form" exact component={NewItemForm} />
        <Route exact path="/Inventory-Overview-Test" exact component={InventoryOverviewTest} />

      </Router>
    </div >


  );
}

export default App;
