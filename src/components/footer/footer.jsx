import React from 'react';
import './footer.css';
import Logo from './assets/logo.png';
import facebookIcon from './assets/facebook.png';
import gmailIcon from './assets/gmail.png';
import instagramIcon from './assets/instagram.png';
import whatsappIcon from './assets/whatsapp.png';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_inner_container m-5 row d-flex justify-content-center align-items-center'>
                {/* Left Container */}
                <div className='left-container col-lg-3 col-sm-12 me-lg-5 mb-5'>
                    <div className='logo-container'>
                        <img src={Logo} alt='Logo' />
                    </div>

                    <p className='paragraph-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magnaaliqua.
                    </p>

                    <h4 className='social-header'>Social Links</h4>

                    <div className='sociallinks-container'>
                        <img src={instagramIcon} alt='Instagram' />
                        <img src={facebookIcon} alt='Facebook' />
                        <img src={gmailIcon} alt='Gmail' />
                        <img src={whatsappIcon} alt='WhatsApp' />
                    </div>
                </div>

                {/* Center Container */}
                <div className='center-container col-lg-3 col-sm-12 me-lg-5 mb-5'>
                    <h4 className='social-header company'>Company</h4>

                    <div className='center-container-list'>
                        <ul>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy policy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Right Container */}
                <div className='right-container col-lg-3 col-sm-12 me-lg-5 mb-5'>
                    <h4 className='social-header'>Join Us</h4>

                    <div className='input-container'>
                        <input placeholder='ENTER YOUR EMAIL' className='footer-input' />
                        <input placeholder='ENTER YOUR CONTACT NUMBER' className='footer-input' />
                    </div>

                    <div className='button-container'>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
