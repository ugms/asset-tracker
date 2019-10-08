import React, { Component } from 'react'
import './CheckoutForm.scss'
import Navbar from '../Navbar/Navbar'

class CheckoutForm extends Component {
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
        <div className='checkout_form_container'>
          <div className='checkout_square'>
            <h1>Checkout Form</h1>
            <form className='checkout_form'>

              {/* Name Field */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Name' />

              {/* Company ID Field */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Company ID'
              />

              {/* Email Address Field */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Email Address' />

              {/* Phone Number Field  */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Phone Number' />

              {/* Duration of Checkout Field */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Duration of Checkout' />

              {/* Date Field */} {/* TODO - make dropdown calendar */}
              <input
                className='input_field'
                type='type'
                value=''
                placeholder='Date' />

              {/* Reason for Checkout Field */}
              <input
                className='input_field'
                type='text'
                value=''
                placeholder='Reason for Checkout' />

            </form>

            <button>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}


export default CheckoutForm