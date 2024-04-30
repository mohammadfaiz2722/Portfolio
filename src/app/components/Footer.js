// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Facebook, Instagram, Twitter } from 'react-feather';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
       <div className="bottom-box">
            <div className="icons">
                <div className="leo">
                    <Link href="/">
                <Facebook/>
                    </Link>


                </div>
                <div className="leo">
                <Link href="https://www.instagram.com/mohammadfaiz_27?igsh=MWE0ejdib2IzaDg5Zw==" target='_blank'>
                <Instagram/>
                    </Link>


                </div>
                <div className="leo">
                <Link href="https://x.com/26_FAIZU?t=_h0iEWwWJ2sERACalVHr6Q&s=09" target='_blank'>
                <Twitter/>
                    </Link>


                </div>
           
            </div>
            <div className="copyright">

        <p className='para'>&copy; {new Date().getFullYear()} Mohammad Faiz. All Rights Reserved.</p>
            </div>

       <div className="love">
        <p>Made by ME with ❤️</p>
       </div>
       </div>
        </footer>
    );
};

export default Footer;
