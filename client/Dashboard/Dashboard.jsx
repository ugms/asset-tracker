import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.scss'
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <div className='squares'>

          {/*Checkout*/}
          <div className='gray_square checkout-square'>
            <h1 className='square_heading'>Checkout</h1>

            <div className='inner_squares'>
              <div className='inner_square'></div>

              <div className='inner_square'></div>
            </div>

            <Link to="/InventoryOverview">
              <button className='see_items_button'>See All Items</button>
            </Link>
          </div>

          {/* Inventory Overview */}
          <div className='gray_square overview_sqaure'>
            <h1 className='square_heading'>Inventory Overview</h1>
            {/* Inventory Highlights */}
            <div className='inventory_inner_squares'>
              <div className='inventory_inner_square'></div>
              <div className='inventory_inner_square'></div>
              <div className='inventory_inner_square'></div>
              <div className='inventory_inner_square'></div>
            </div>
            <button className='dashboard_button'>See All Categories</button>
          </div>

          {/* Reporting */}
          <div className='gray_square reporting_square'>
            <h1 className='square_heading'>Reporting</h1>
            <div className='reporting_inner_square'></div>
            <button className='dashboard_button'>See Reporting</button>

          </div>
        </div>

        <div className='squares' >
          <div className='blue_square recent_square'>
            <h1 className='square_heading2'>Recent Items</h1></div>
          <div className='blue_square checked_out_square'>
            <h1 className='square_heading2'>Checked Out</h1></div>
          <div className='blue_square low_inventory_square'>
            <h1 className='square_heading2'>Low Inventory</h1></div>
        </div>


      </div>
    )
  }
}
export default Dashboard