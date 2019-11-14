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
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

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
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

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
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

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
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1
              <input
                className='checkout_input_field'
                type='type'
                value=''
<<<<<<< HEAD
                placeholder='Date' />
=======
                placeholder='Date'
              />
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

              {/* Reason for Checkout Field */}
              <input
                className='checkout_input_field'
                type='text'
                value=''
<<<<<<< HEAD
                placeholder='Reason for Checkout' />
=======
                placeholder='Reason for Checkout'
              />
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

            </form>

            <button className='checkout_form_button'>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}


export default CheckoutForm