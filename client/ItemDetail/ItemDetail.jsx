import React, { Component } from "react";
import "./ItemDetail.scss";
import Navbar from "../Navbar/Navbar";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar pageHeader="Item Details" />
        <div className="item_detail_page">
          <h1> This is the Item Detail Page!</h1>

          {/* Item Detail buttons */}
          <div className="item_detail__buttons">
            {/* Checkout button */}
            <button className="item_detail__button item_detail__buttons_checkout">
              Checkout
            </button>

            {/* Item History button */}
            <button className="item_detail__button item_detail__buttons_history">
              History
            </button>

            {/* Share button */}
            <button className="item_detail__button item_detail__buttons_share">
              Share
            </button>

            {/* Edit button */}
            <button className="item_detail__button item_detail__buttons_edit">
              Edit
            </button>

            {/* Delete button */}
            <button className="item_detail__button item_detail__buttons_delete">
              Delete
            </button>
          </div>

          {/* Item Detail Section */}
          <div className="item_detail_container" />
        </div>
      </div>
    );
  }
}

export default ItemDetail;
