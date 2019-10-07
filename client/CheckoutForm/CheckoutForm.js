import React, { Component } from "react";
// import './CheckoutForm.scss'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      email: "",
      phoneNumber: "",
      checkoutDuration: "",
      date: "",
      reasonForCheckout: ""
    };
  }

  render() {
    return (
      <div className="CheckoutForm">
        <h1>Checkout Form</h1>
        <form>
          {/* Name Field */}
          <input type="text" value="" placeholder="Name" />
          {/* Company ID Field */}
          <input type="text" value="" placeholder="Company ID" />
          {/* Email Address Field */}
          <input type="text" value="" placeholder="Email Address" />
          {/* Phone Number Field  */}
          <input type="text" value="" placeholder="Phone Number" />
          {/* Duration of Checkout Field */}
          <input type="text" value="" placeHolder="Duration of Checkout" />
          {/* Date Field */} {/* TODO - make dropdown calendar */}
          <input type="type" value="" placeholder="Date" />
          {/* Reason for Checkout Field */}
          <input type="text" value="" placeHolder="Reason for Checkout" />
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
