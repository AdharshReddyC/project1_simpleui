import React from 'react'
import {RiMenuLine, RiClosein} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_log'>
          <img src={logo} alt="logo"/>
        </div>

      </div>

    </div>
  )
}

export default Navbar