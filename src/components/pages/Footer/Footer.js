import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa';

function Footer(){
    return(

        <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <Link to = '/'>Home</Link>
    
            </div>
            <div className='footer-link-items'>
              <Link to = '/about'>About Us</Link>
            
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <Link to = '/services'>Services</Link>
             
            </div>
            <div className='footer-link-items'>
              <Link to = '/contact'>Contact Us</Link>
      
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                
                Why Us
              </Link>
            </div>
            <small className='website-rights'>WhyUs © 2020</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to={'//www.facebook.com/WhyUs-Network-Solutions-106368424294746/?view_public_for=106368424294746'}
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='//www.instagram.com/whyus_networksolutions/?hl=en'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                target='_blank'
                aria-label='Youtube'
              >
           
       
               
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
};

export default Footer;