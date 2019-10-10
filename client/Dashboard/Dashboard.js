import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import ItemRow from './ItemRow'
import logo from './reporting.png'
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

            <div className="dashboard_button">
              <Link
                to="/InventoryOverview">
                See All Items
            </Link>
            </div>
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
            <div className="dashboard_button">
              <Link>See All Categories</Link>
            </div>
          </div>

          {/* Reporting */}
          <div className='gray_square reporting_square'>
            <h1 className='square_heading'>Reporting</h1>

            <img className='reporting_image' src={logo} />


            <div className="dashboard_button">
              <Link>See Reporting</Link>
            </div>
          </div>
        </div>

        <div className='squares' >

          {/* RECENT ITEMS */}
          <div>
            <div className='blue_square recent_square'>
              <h1 className='square_heading2'>Recent Items</h1>
            </div>
            <div>
              <ItemRow id='97483' value='Laptop 5' />
              <ItemRow id='28492' value='Tablet 6' />
              <ItemRow id='18297' value='Laptop 2' />
              <ItemRow id='21891' value='Laptop 7' />
              <ItemRow id='87210' value='Tablet 1' />
            </div>
          </div>

          {/* CHECKED OUT */}
          <div>
            <div className='blue_square checked_out_square'>
              <h1 className='square_heading2'>Checked Out</h1></div>
            <div>
              <ItemRow id='97483' value='Laptop 5' />
              <ItemRow id='28492' value='Tablet 6' />
              <ItemRow id='18297' value='Laptop 2' />
              <ItemRow id='21891' value='Laptop 7' />
              <ItemRow id='87210' value='Tablet 1' />
            </div>
          </div>

          {/* LOW INVENTORY */}
          <div>
            <div className='blue_square low_inventory_square'>
              <h1 className='square_heading2'>Low Inventory</h1></div>
            <div>
              <ItemRow id='97483' value='Laptop 5' />
              <ItemRow id='28492' value='Tablet 6' />
              <ItemRow id='18297' value='Laptop 2' />
              <ItemRow id='21891' value='Laptop 7' />
              <ItemRow id='87210' value='Tablet 1' />
            </div>

          </div>


        </div>

      </div>
    )
  }
}
export default Dashboard