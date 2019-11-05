import React, { Component } from 'react'
import './NewItemForm.scss'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      email: '',
      phoneNumber: '',
      new_itemDuration: '',
      date: '',
      reasonFornew_item: '',

    }
  }

  render() {
    return (
      <div>

        <div className='new_item_form_container'>
          <div className='new_item_square'>
            <h1 className='new_item_title'>New Item</h1>
            <form className='new_item_form'>

              {/* Chassie */}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Chassie' />

              {/* Current User */}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Current User'
              />

              {/* Name2 */}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Name2' />

              {/* Manufacturer */}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Manufacturer' />

              {/* Model */}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Model' />

              {/* Operating System */}
              <input
                className='new_item_input_field'
                type='type'
                value=''
                placeholder='Operating System' />

              {/* Serial Number*/}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Serial Number' />

              {/* Purchase Date*/}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Purcahse Date' />


              {/* Notes*/}
              <input
                className='new_item_input_field'
                type='text'
                value=''
                placeholder='Notes' />

            </form>

            <button className='new_item_form_button'>Create<br /> New Item</button>
          </div>
        </div>
      </div>
    )
  }
}


export default NewItemForm