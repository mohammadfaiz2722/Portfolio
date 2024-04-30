// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Facebook, Instagram, Twitter } from 'react-feather';
const Footer = () => {
    return (
        <footer>
       <div className="bottom-box">
            <div className="icons">
                <div className="leo">
                <Facebook/>

                </div>
                <div className="leo">
                <Instagram/>

                </div>
                <div className="leo">
                <Twitter/>

                </div>
           
            </div>

        <p className='para'>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
       </div>
        </footer>
    );
};

export default Footer;
