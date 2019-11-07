import React, { Component } from 'react'
import './NewItemForm.scss'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chassie: '',
      current_user: '',
      name2: '',
      manufacturer: '',
      model: '',
      os: '',
      serial_number: '',
      purchase_date: '',
      notes: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    const change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    return (
      <div>

        <div className='new_item_form_container'>
          <div className='new_item_square'>
            <h1 className='new_item_title'>New Item</h1>
            <form className='new_item_form' state={this.state} onChange={state => this.setState(state)}>

              {/* Chassie */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.chassie}
                placeholder='Chassie'
              />

              {/* Current User */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.current_user}
                placeholder='Current User'
              />

              {/* Name2 */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.name2}
                placeholder='Name2'
              />

              {/* Manufacturer */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.manufacturer}
                placeholder='Manufacturer'
              />

              {/* Model */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.model}
                placeholder='Model'
              />

              {/* Operating System */}
              <input
                className='new_item_input_field'
                type='type'
                value={this.os}
                placeholder='Operating System'
              />

              {/* Serial Number */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.serial_number}
                placeholder='Serial Number'
              />

              {/* Purchase Date */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.purchase_date}
                placeholder='Purcahse Date'
              />

              {/* Notes */}
              <input
                className='new_item_input_field'
                type='text'
                value={this.notes}
                placeholder='Notes'
              />

            </form>

            <button className='new_item_form_button'>
              Create
              <br />

              New Item
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default NewItemForm