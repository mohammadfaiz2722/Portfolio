"use client"
import React from 'react';
import Link from 'next/link';
import './Navbar.css';
import { FaInstagram, FaGithub,FaTwitter } from 'react-icons/fa';

const resumePdf = '/resume.pdf';

const Navbar = () => {
  return (
    <>
    <nav className=" shadow dark:bg-gray-900 nav">
      <div className="container1 flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-gray-300">
      <div className='navIcons'>
        <a
          href="https://www.instagram.com/mohammadfaiz_27?igsh=MWE0ejdib2IzaDg5Zw==" 
          target="_blank"
          rel="noopener noreferrer"
          className='navIcon'
        >
          <FaInstagram size="1.3rem" color="#C13584" />
        </a>
        <a
          href="https://github.com/mohammadfaiz2722"
          target="_blank"
          rel="noopener noreferrer"
          className='navIcon'
        >
          <FaGithub size="1.3rem" color="#E5E5E5" />
        </a>
        <a
          href="https://x.com/26_FAIZU?t=_h0iEWwWJ2sERACalVHr6Q&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className='navIcon'
        >
          <FaTwitter size="1.3rem" color="#1DA1F2" />
        </a>
      </div>

      {/* <FaInstagram/> */}
        <Link href="/" id='fonts' className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Home</Link>
        <Link href="/about" id='fonts'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">About</Link>
        <Link href="/portfolio" id='fonts'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</Link>
        <Link 
        id='fonts'
          href={resumePdf}
          className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>
    </nav>
    
     
    </>
  );
};

export default Navbar;
