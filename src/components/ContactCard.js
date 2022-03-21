import React, { useRef } from 'react';
import Input from './Input';
import "./ContactCard.css";
import emailjs from '@emailjs/browser';

function ContactCard({contactLocation, inputStyle}){





   const LOCATION = ['contact-container__footer', 'contact-container'];

   const INPUTSTYLES = 'input-footer';

   const checkLocation = LOCATION.includes(contactLocation) ? contactLocation : LOCATION[1];

   const checkInputStyles = () => {
        return false;
    }

   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rgk5c3d', 'template_2jmtov5', form.current, 'YNCVADZuwKFJz_-Nv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };


   
    return(
        <div className="contact-div">
             
            <div className={checkLocation}>
            
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className="input-row">
            <Input inputStyle={inputStyle+'_short'} placeholder='First Name' type='text' name='firstName'/>
            <Input inputStyle={inputStyle+'_short'} placeholder='Last Name' type='text' name='lastName'/>
            </div>
            <Input inputStyle={inputStyle+'_medium'} placeholder='Email' type='email' name='email'/>
            <Input inputStyle={inputStyle+'_medium'} placeholder='Subject' type='text' name='subject'/>
            <Input textarea='textarea' inputStyle={inputStyle+'_large'} placeholder='Description' name='message'/>
            <div className="submit-btn-wrapper">
            <input type='submit' className="submit-btn" value='Send Us A Message'></input>
            </div>
            </form>
            </div>
        </div>
    );
}

export default ContactCard;