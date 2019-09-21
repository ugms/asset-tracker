import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '/Dashboard/Dashboard'


import './styles.scss';

const Index = () => {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Dashboard />
    </div>
  )

};
ReactDOM.render(<Index />, document.getElementById('root'));
