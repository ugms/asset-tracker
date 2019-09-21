import React, { Component } from 'react'
import './dashboard.scss'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
}

render() {
  return (
    // Navbar

    // Dashboard Panels
    <div className='dashboard_panel'>
      <div className='checkout_panel'></div>
      <div className='inventory_panel'></div>
      <div className='reporting_panel'></div>
    </div>

    <div>
      <div className='recent_items_panel'></div>
      <div className='checked_out_panel'></div>
    </div>
  )
}


export default Dashboard