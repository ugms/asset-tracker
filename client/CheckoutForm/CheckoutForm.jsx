import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import './CheckoutForm.scss'

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
        <div>
          <Navbar />
        </div>

        <div className='checkout_form_container'>
          <div className='checkout_square'>
            <h1 className='checkout_title'>Checkout Form</h1>
            <form className='checkout_form' state={this.state} onChange={state => this.setState(state)}>

              {/* Name Field */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.name}
                onChange={this.handleChange}
                placeholder='Name'
              />

              {/* Company ID Field */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.id}
                onChange={this.handleChange}
                placeholder='Company ID'
              />

              {/* Email Address Field */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.email}
                onChange={this.handleChange}
                placeholder='Email Address'
              />

              {/* Phone Number Field  */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.phoneNumber}
                onChange={this.handleChange}
                placeholder='Phone Number'
              />

              {/* Duration of Checkout Field */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.checkoutDuration}
                onChange={this.handleChange}
                placeholder='Duration of Checkout'
              />

              {/* Date Field */}
              {' '}
              {/* TODO - make dropdown calendar */}
              <input
                className='checkout_input_field'
                type='type'
                value={this.date}
                onChange={this.handleChange}
                placeholder='Date'
              />

              {/* Reason for Checkout Field */}
              <input
                className='checkout_input_field'
                type='text'
                value={this.reasonForCheckout}
                onChange={this.handleChange}
                placeholder='Reason for Checkout'
              />

            </form>

            <button className='checkout_form_button'>Checkout</button>
          </div>
        </div>


      </div >
    )
  }
}


export default CheckoutForm