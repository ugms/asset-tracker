import React, { Component } from 'react'
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
        <div className='checkout_form_container'>
          <div className='checkout_square'>
            <h1 className='checkout_title'>Checkout Form</h1>
            <form className='checkout_form'>

              {/* Name Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
<<<<<<< HEAD
                placeholder='Name' />
=======
                placeholder='Name'
              />
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7

              {/* Company ID Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
                placeholder='Company ID'
              />

              {/* Email Address Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
<<<<<<< HEAD
                placeholder='Email Address' />
=======
                placeholder='Email Address'
              />
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7

              {/* Phone Number Field  */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
<<<<<<< HEAD
                placeholder='Phone Number' />
=======
                placeholder='Phone Number'
              />
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7

              {/* Duration of Checkout Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
<<<<<<< HEAD
                placeholder='Duration of Checkout' />

              {/* Date Field */} {/* TODO - make dropdown calendar */}
=======
                placeholder='Duration of Checkout'
              />

              {/* Date Field */} 
              {' '}
              {/* TODO - make dropdown calendar */}
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7
              <input
                className='checkout_input_field'
                type='type'
                value=''
                placeholder='Date'
              />

              {/* Reason for Checkout Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
                placeholder='Reason for Checkout'
              />

            </form>

            <button className='checkout_form_button'>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}


export default CheckoutForm