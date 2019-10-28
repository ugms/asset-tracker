import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './InventoryOverview.scss'
// import AssetRow from './AssetRow.jsx'
import Table from './Table.jsx'

class InventoryOverviewTest extends Component {
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

        {/* Category Section */}
        <div className='category_container'>
          <div className='categories'>

          </div>
        </div>

        {/* Inventory Overview Buttons */}
        <div className='inventory_overview_buttons'>
          <div className='inventory_overview_button new_item_button'>
            <Link
              to="/New-Item-Form">
              New Item
            </Link>
          </div>

          <div className='inventory_overview_button share_button'>
            <Link
              to="/New-Item-Form">
              Share
            </Link>
          </div>

          <div className='inventory_overview_button print_button'>
            <Link
              to="/New-Item-Form">
              Print
            </Link>
          </div>

        </div>

        {/* Search */}
        <Table />
        {/* {this.state.assets.map((item) => {
          return <AssetRow key={item.id} assets={item} />
        })} */}
      </div>
    )
  }
}



export default InventoryOverviewTest

