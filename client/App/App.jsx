import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NewItemForm from '../NewItemForm/NewItemForm.jsx'


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/New-Item-Form" exact component={NewItemForm} />

      </Router>
    </div>

  );
}

export default App;
