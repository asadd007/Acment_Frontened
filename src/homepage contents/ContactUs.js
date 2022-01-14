import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './InfoPages.css';
import './ContactUs.css';
import '../css/HomePage.css';
import email from './videooo/email.png';
import logo_transparent from '../images/acment_logo_transparent.png';
import contactus_image from './videooo/Contactus_image.jpg';
// import { IconName } from "react-icons/fa";
function ContactUs () {
  return (
    <div className="contactus_body">
       <div className="contact_nav">
       <div className="headerbox">
          <div className="logo">
            <a href="#">
              <img src={logo_transparent} />
            </a>
          </div>
          <div className="headerbox__menu">
            <ul>
              <li>
                <Link to="aboutus">About us</Link>
              </li>
              <li>
                <Link to="mentorship">Mentorship?</Link>
              </li>
              <li>
                <Link to="paynow">Pay Now</Link>
              </li>
              <li>
                <Link to="Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="aboutus">Contact us</Link>
              </li>
            </ul>
          </div>
       </div>
       {/* For spacing b/w div */}
       <div>
         <br></br>
       </div>
       <div className='heading-container' >
               <h1> Contact Us</h1>
       </div>
       <div>
         <br></br>
       </div>
       {/* make it flex and video */}
       <div className='contact_content' >
        
       <div className='contact-card-container'>
       <div className='row-1'>
         <h6>Contact Us</h6>
         <br></br>
       </div>
        <div className='row-2'>
              Have any queries? Facing any issues?Get assistance.
        </div>
        <div className='row-3'>
              <div className='row-3-col-1'>
              <img src={email} height="30px" />
              </div>
              <div className='row-3-col-2'>

               </div>
         </div>
        </div>
        <div className='request-card-container'>
         <div className='row-1'>
          
         </div>
         <div className='row-2'>

         </div>
         <div className='row-3'>

         </div>
        </div>
       </div>
    </div> 
    </div>

  );
}
   
export default ContactUs;
