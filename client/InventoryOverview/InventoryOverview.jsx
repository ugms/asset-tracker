import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './InventoryOverview.scss'
import AssetRow from './AssetRow'

const row = {
  "chassie": "test1",
  "current_user": "test1",
  "previous_user": "test1",
  "name2": "test1",
  "manufacturer": "test1",
  "model": "test1",
  "os": "test1",
  "serial_number": "test1",
  "purchase_date": "2000-12-31",
  "notes": "test1"
}

const row2 = {
  "chassie": "DOG",
  "current_user": "CAT",
  "previous_user": "Parrot",
  "name2": "Snail",
  "manufacturer": "Slug",
  "model": "Carrot",
  "os": "test1",
  "serial_number": "test1",
  "purchase_date": "2000-12-31",
  "notes": "test1"
}

class InventoryOverview extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   : 0,
    // }
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

        <AssetRow data={row} />

        <AssetRow data={row2} />



      </div>
    )
  }
}



export default InventoryOverview