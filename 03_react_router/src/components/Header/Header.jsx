import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
function Header() {

  return (
    <>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? 'red' : ''} to={""}>Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'red' : ''} to={"/about"}>About</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'red' : ''} to={"/contact"}>Contact</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'red' : ''} to={"/user"}>User</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Header