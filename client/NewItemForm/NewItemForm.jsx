import React, { Component } from 'react'
import './NewItemForm.scss'
import Navbar from '../Navbar/Navbar'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      email: '',
      phoneNumber: '',
      checkoutDuration: '',
      date: '',
      reasonForCheckout: '',

    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='checkout_form_container'>
          <div className='checkout_square'>
            <h1>New Item</h1>
            <form className='checkout_form'>

              {/* Chassie */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Chassie' />

              {/* Current User */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Current User'
              />

              {/* Name2 */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Name2' />

              {/* Manufacturer */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Manufacturer' />

              {/* Model */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Model' />

              {/* Operating System */}
              <input
                className='input_field'
                type='type'
                value=''
                placeholder='Operating System' />

              {/* Serial Number*/}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Serial Number' />

              {/* Purchase Date*/}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Purcahse Date' />


              {/* Notes*/}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Notes' />

            </form>

            <button>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}


export default NewItemForm