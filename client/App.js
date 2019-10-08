import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import './styles.scss';

const App = () => {
  return (
    <Router>

      <Link to='/login'>LOGIN</Link>
      <Route path="/login" exact component={Login} />


    </Router>
  )
};


export default App