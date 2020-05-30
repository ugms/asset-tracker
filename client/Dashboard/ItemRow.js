import React from 'react'
import './ItemRow.css'

function ItemRow({ id, value }) {
  return (
    <div className="item_row">
      <div className="item_row_id ">{id}</div>
      <div className='item_row_value'>{value}</div>
    </div>
  )
}

export default ItemRow

