import React from 'react'
import './AssetRow.scss'

// function assets(props) {
//   this.state = {
//     chassie: [],
//     current_user: [],
//     previous_user: [],
//     name2: [],
//     manufacturer: [],
//     model: [],
//     os: [],
//     serial_number: [],
//     pruchase_date: [],
//     notes: []
//   }

const AssetRow = ({ assets }) => {

  return (
    <div>
      <div className="item_row">
        <div className="item_row_chassie ">{assets.chassie}</div>
        <div className='item_row_current_user'>{assets.current_user}</div>
        <div className='item_row_previous_user'>{assets.previous_user}</div>
        <div className='item_row_name2'>{assets.name2}</div>
        <div className='item_row_manufacturer'>{assets.manufacturer}</div>
        <div className='item_row_model'>{assets.model}</div>
        <div className='item_row_os'>{assets.os}</div>
        <div className='item_row_serial_number'>{assets.serial_number}</div>
        <div className='item_row_purchase_date'>{assets.purchase_date}</div>
        <div className='item_row_notes'>{assets.notes}</div>
      </div>
    </div>

  )
}

export default AssetRow
