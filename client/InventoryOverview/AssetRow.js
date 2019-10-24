import React from 'react'
import './AssetRow.scss'

function AssetRow(props) {
  const { chassie, current_user, previous_user, name2, manufacturer, model, os, serial_number, purchase_date, notes } = props.data
  return (
    <div className="item_row">
      <div className="item_row_chassie ">{chassie}</div>
      <div className='item_row_current_user'>{current_user}</div>
      <div className='item_row_previous_user'>{previous_user}</div>
      <div className='item_row_name2'>{name2}</div>
      <div className='item_row_manufacturer'>{manufacturer}</div>
      <div className='item_row_model'>{model}</div>
      <div className='item_row_os'>{os}</div>
      <div className='item_row_serial_number'>{serial_number}</div>
      <div className='item_row_purchase_date'>{purchase_date}</div>
      <div className='item_row_notes'>{notes}</div>
    </div>
  )
}

export default AssetRow

