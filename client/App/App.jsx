import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "../Login/Login.jsx";
import Register from '../Register/Register.jsx'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" exact component={Login} />
<<<<<<< HEAD
=======
        <Route path="/Register" exact component={Register} />
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1
      </Router>
    </div>
  );
}

export default App;
