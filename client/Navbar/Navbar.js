import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: ""
    };
  }

  render() {
    return (
      <div>
        <div className="navbar">
          {/* Home Logo (back to Dashboard) */}
          <Link className="navbar__home_logo" to="/Dashboard">
            <img src="home.svg" />
          </Link>
          {/* Name of Page */}
          <h2 className="navbar__heading">{this.state.pageHeader}</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
