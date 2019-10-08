import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div >
        <div className='navbar'>
          {/* Home Logo (back to Dashboard) */}
          <Link className='navbar__home_logo' to='/Dashboard'>
            <img src='home.svg'></img>
          </Link>
          {/* Name of Page */}
          <h2 className='navbar__heading'></h2>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)