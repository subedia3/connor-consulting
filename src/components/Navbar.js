import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';


function Navbar(){
    return(
        <div className='navbar'>
        <div className='navbar-logo-container'>
            <div className='navbar-logo-wrapper'>
                <img className='navbar-logo' src={logo}></img>
            </div>
            <h1 className='navbar-logo-title'>CSA</h1>
        </div>
        <button className='contact-btn'>Contact Us</button>
    </div>
    );
}

export default Navbar;