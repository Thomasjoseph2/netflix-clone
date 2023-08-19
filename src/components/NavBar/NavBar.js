import React from 'react';
import "./NavBar.css";
import { NEW_AVATHAR,NETFLIX_LOGO } from '../../constants'
const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={NETFLIX_LOGO} alt="NETFLIX_LOGO" />
      <img className='avatar' src={NEW_AVATHAR} alt="NEW_AVATHAR" />
    </div>
  )
}

export default NavBar
