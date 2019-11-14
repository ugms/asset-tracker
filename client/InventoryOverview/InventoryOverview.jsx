import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './InventoryOverview.scss'
// import AssetRow from './AssetRow.jsx'
// import Table from './Table.jsx'
import AssetTable from './AssetTable.jsx'

class InventoryOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/assets')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ assets: data })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  render() {
    return (
      <div>
        <Navbar />

        {/* Inventory Overview Buttons */}
        <div className='inventory_overview_buttons'>
          {/* New Item Button */}
          <div className='inventory_overview_button new_item_button'>
            <Link
              to="/New-Item-Form">
              New Item
            </Link>
          </div>

          {/* Share Button */}
          <div className='inventory_overview_button share_button'>
            <Link
              to="/New-Item-Form">
              Share
            </Link>
          </div>

          {/* Print Button*/}
          <div className='inventory_overview_button print_button'>
            <Link
              to="/New-Item-Form">
              Print
            </Link>
          </div>

        </div>

        <div className='inventory_body'>

          {/* Category Section */}
          <div className='category_container'>
            <div className='categories'>
            </div>
          </div>

          {/* ITEM TABLE */}
          <div className='item_table_container'>
            {this.state.assets.map((item) => {
              return <AssetTable key={item.id} assets={item} />
            })}
          </div>

        </div>

      </div>
    )
  }
}



export default InventoryOverview


// const row = {
//   "chassie": "test1",
//   "current_user": "test1",
//   "previous_user": "test1",
//   "name2": "test1",
//   "manufacturer": "test1",
//   "model": "test1",
//   "os": "test1",
//   "serial_number": "test1",
//   "purchase_date": "2000-12-31",
//   "notes": "test1"
// }

// const row2 = {
//   "chassie": "DOG",
//   "current_user": "CAT",
//   "previous_user": "Parrot",
//   "name2": "Snail",
//   "manufacturer": "Slug",
//   "model": "Carrot",
//   "os": "test1",
//   "serial_number": "test1",
//   "purchase_date": "2000-12-31",
//   "notes": "test1"
// }