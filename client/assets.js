import React from 'react'

const Assets = ({ assets }) => {
  return (
    <div>
      <h1>All Assets</h1>
      {assets.map((asset) => (
        <div className='item_row'>
          <div> {asset.chassie}</div>
          <div> {asset.cureent_user}</div>
          <div> {asset.model}</div>

        </div>


      ))}

    </div>
  )
}

export default Assets