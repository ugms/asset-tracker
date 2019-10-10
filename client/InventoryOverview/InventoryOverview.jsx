import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './InventoryOverview.scss'


class InventoryOverview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />

        {/* Category Section */}
        <div className='category_container'>
          <div className='categories'>

          </div>
        </div>

        {/* Inventory Overview Buttons */}
        <div className='inventory_overview_buttons'>
          <button>New Item</button>
          <button>Share</button>
          <button>Print</button>
        </div>

        {/* Search */}


      </div>
    )
  }
}



export default InventoryOverview