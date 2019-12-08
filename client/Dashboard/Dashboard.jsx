import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.scss'
import ItemRow from './ItemRow'
import logo from './reporting.png'
import logo1 from './laptop.svg'
import logo2 from './tablet.svg'
import Navbar from '../Navbar/Navbar.jsx'
class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className='squares'>

          {/*Checkout*/}
          <div className='gray_square checkout-square'>
            <h1 className='square_heading'>Checkout</h1>
            <div className='inner_squares'>
              <div className='inner_square'>
                <img className='laptop_logo' src={logo1} />

              </div>

              <div className='inner_square'>
                <img className='tablet_logo' src={logo2} />

              </div>
            </div>

            <div className="dashboard_button" >
              <Link className='dashboard_link'
                to="/Checkout-Form">
                Checkout Item
            </Link>
            </div>
          </div>

          {/* Inventory Overview */}
          <div className='gray_square overview_sqaure'>
            <h1 className='square_heading inventory_overview_heading'>Inventory Overview</h1>
            {/* Inventory Highlights */}
            <div className='inventory_inner_squares'>
              <div className='inventory_inner_square'>Office Supplies</div>
              <div className='inventory_inner_square'>Computers</div>
              <div className='inventory_inner_square'>Miscellaneous</div>
            </div>
            <div className="dashboard_button">
              <Link className='dashboard_link'
                to="/Inventory-Overview">
                See All  Items
            </Link>
            </div>
          </div>

          {/* Reporting */}
          <div className='gray_square reporting_square'>
            <h1 className='square_heading reporting_heading'>Reporting</h1>

            <img className='reporting_image' src={logo} />


            <div className="dashboard_button">
              <Link className='dashboard_link'>See Reporting</Link>
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