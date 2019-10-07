import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class CheckoutHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />

        <h1>This is the Checkout History Page</h1>
      </div>
    );
  }
}

export default CheckoutHistory;
