import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './InfoPages.css';
import './AboutUs.css';
import '../css/HomePage.css';
import video1 from './videooo/video1.mp4';
import logo_transparent from '../images/acment_logo_transparent.png';
function AboutUs () {
  return (
    <div className="aboutus_body">
       <div className="about_nav">
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
       <div className='about_heading'>

       </div>
       {/* make it flex and video */}
       <div className='about_content' >
      
       <div className='content_only'>
       We are here to serve you with one of the best quality content ,which saves
           your time and gives you guidance to make your dreams come true. Inspiring you
          with our mentor and keeping your determinn consistent with their guidance is
          our goal. Let us help you with your first step towards learning with confidence.
           We are here accompanying your journey and turning it into a success. No doubts will
           remain inside you ,it will take time but surely these doubts will be reduced as concepts
           turn inside out . Always remember, if they can, so can you!We believe in your potential,
          you are much more than you know we will help to acknowledge this to you
        </div>
        <div className='video_only'>
         <video autoPlay loop muted id='video1'>
           <source src={video1} type='video/mp4'></source>
         </video>
        </div>
       </div>
    </div> 
    </div>

  );
}
   
export default AboutUs;
