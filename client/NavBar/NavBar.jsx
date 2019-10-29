import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from './home.svg'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.location)
    // Remove / and split pathname to render Nav Bar Heading
    const navName = this.props.location.pathname.replace(/\//g, '')
    const navHeading = navName.split('-').join('  ')

    return (
      <div >
        <div className='navbar'>
          {/* Home Logo (back to Dashboard) */}
          <Link className='navbar__home_logo' to='/Dashboard'>
            <img src={logo}></img>
          </Link>
          {/* Name of Page */}
          <h2 className='navbar__heading'>{navHeading}</h2>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)