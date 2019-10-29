import React from 'react';
import './AssetTable.scss'


const AssetTable = ({ assets }) => {

  return (
    <div className='table_container'>


      {/* <table> */}
      {/* Table Headers */}
      {/* <tr>
          <th>Chassie</th>
          <th>Current User</th>
          <th>Previous User</th>
          <th>Previous User</th>
          <th>Name 2</th>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>OS</th>
          <th>Serial Number</th>
          <th>Purchase Date</th>
          <th>Notes</th>
        </tr> */}

      {/* Chassie */}
      <tr>
        <td>{assets.chassie}</td>
        <td>{assets.current_user}</td>
        <td>{assets.previous_user}</td>
        <td>{assets.name2}</td>
        <td>{assets.manufacturer}</td>
        <td>{assets.manufacturer}</td>
        <td>{assets.model}</td>
        <td>{assets.os}</td>
        <td>{assets.serial_number}</td>
        <td>{assets.purchase_date}</td>
        <td>{assets.serial_notes}</td>

      </tr>

      {/* Current User */}
      {/* <tr>
        <td>{assets.current_user}</td>
      </tr> */}

      {/* Previous User */}
      {/* <tr>
        <td>{assets.previous_user}</td>
      </tr> */}

      {/*Name2*/}
      {/* <tr>
        <td>{assets.name2}</td>
      </tr> */}

      {/* Manufactuer */}
      {/* <tr>
        <td>{assets.manufacturer}</td>
      </tr> */}


      {/*Model*/}
      {/* <tr>
        <td>{assets.model}</td>
      </tr> */}

      {/*OS*/}
      {/* <tr>
        <td>{assets.os}</td>
      </tr> */}


      {/*Serial Number*/}
      {/* <tr>
        <td>{assets.serial_number}</td>
      </tr> */}


      {/*Purchase Date*/}
      {/* <tr>
        <td>{assets.purchase_date}</td>
      </tr> */}

      {/*Notes*/}
      {/* <tr>
        <td>{assets.serial_notes}</td>
      </tr> */}

      {/* </table> */}
    </div>


  )
}

export default AssetTable
