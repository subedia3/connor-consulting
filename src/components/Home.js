import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';
import Contact from './Contact';
import { HashLink as Link } from 'react-router-hash-link';
import IconCard from './IconCard';


function Home(){
    return(
        <div className='page-container-background'>
            <div className='page-container'>
            
                <div className='navbar'>
                    <div className='navbar-logo-container'>
                        <div className='navbar-logo-wrapper'>
                            <img className='navbar-logo' src={logo}></img>
                        </div>
                        <h1 className='navbar-logo-title'>CSA</h1>
                    </div>
                    <Link  style={{ textDecoration: 'none' }} smooth to='#contact'>
                        <button className='contact-btn'>Contact Us</button>
                    </Link>
                </div>

                <div className='intro-container'>
                    <div className='logo-title-container'>
                    <h1 className='logo-title'>Crypto Solutions and Advisory</h1>
                    </div>
                    <h1 className='slogan-title'>Your gateway into the Digital Assest Ecosystem</h1>
                </div>

            </div>


                <div className='para-container'>
                    <IconCard />
                </div>



        </div>
    );
}

export default Home;