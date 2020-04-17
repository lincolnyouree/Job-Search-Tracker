import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar">
      <div className="navlogo"><a href="/"><img src="'../../navlogo.png" alt="logo" className="navimg"/></a></div>
      <div className="navlinks">
        <Link to='/addjob' className='NavBar-link'>Add Job</Link>
        <Link to='/' className='NavBar-link'>All Jobs</Link>
        <Link to='/about' className='NavBar-link'>About</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/about' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
      </div>
    </div>
    :
    <div className="NavBar">
      <div className="navlinks">
        <Link to='/login' className='NavBar-link-login'>Login</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link-signup'>Sign up</Link>
        </div>
    </div>;
  return (
    <div className='nav-container'>
      {nav}
    </div>
  );
};

export default NavBar;