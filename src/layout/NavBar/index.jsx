import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'

const NavBar = () => {

  const activeStyle = {
    textDecoration: 'underline',
    color: 'darkblue'
  }

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
        <h2>Logo</h2>
        <ul className="nav-links">
          <li> <NavLink style={navA} to='/'>Home</NavLink> </li>
          <li> <NavLink style={navA} to='/music'>Music</NavLink> </li>
          <li> <NavLink style={navA} to='/about'>About</NavLink> </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;