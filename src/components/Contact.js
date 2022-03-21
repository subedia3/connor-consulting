import React from 'react';
import ContactCard from './ContactCard';
import './Contact.css'

function Contact(){
    return(
        <div className='contact-page-div' id='contact'>
          
            <div className='contat-details-container'>

           
            <h1 className='contact-title'>Please reach out if you feel we can bring value to your ideas and ambitions.  </h1>

            <ContactCard contactLocation='contact-container' inputStyle='input' />

            </div>

        </div>
    );
}

export default Contact;