import React, { Component } from 'react'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
=======
import { withRouter, Link } from 'react-router-dom'
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7
import logo from './home.svg'
import './Navbar.scss'

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
<<<<<<< HEAD
      <div >
        <div className='navbar'>
          {/* Home Logo (back to Dashboard) */}
          <Link className='navbar__home_logo' to='/Dashboard'>
            <img src={logo}></img>
=======
      <div>
        <div className='navbar'>
          {/* Home Logo (back to Dashboard) */}
          <Link className='navbar__home_logo' to='/Dashboard'>
            <img alt='home logo' src={logo} />
>>>>>>> 502f2ac932a451e5b7fb811081a1a1795a6502a7
          </Link>
          {/* Name of Page */}
          <h2 className='navbar__heading'>{navHeading}</h2>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)