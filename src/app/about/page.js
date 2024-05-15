"use client"
import React, { useState } from 'react';
import './about.css';
import PersonalInfo from './PersonalInfo';
import Link from 'next/link';
import Hamburger from '../components/Hamburger';
// import '../globals.css'


const resumePdf = '/resume.pdf';
const Page = () => {
  const [mobile, setMobile] = useState(false);

  const handleClick = () => {
    setMobile(!mobile);
    console.log("Clicked");console.log(mobile);

  };

  return (
    <>
      <div className="ham" onClick={handleClick}>
        <Hamburger/>
      </div>
      <div className={`mobile-menu${mobile ? ' show' : ''}`}>
        <div className="close-cross" onClick={handleClick}>
          &times;
        </div>
        <Link href="/" className="menu-link">Home</Link>
        <Link href="/about" className="menu-link">About</Link>
        <Link href="portfolio" className="menu-link">Portfolio</Link>
        <Link href={resumePdf} target="_blank" rel="noopener noreferrer" className="menu-link">Resume</Link>
      </div>
      <div className='about-box text custom' id='imp'>
        Explore my world as Mohammad Faiz a driven MERN Stack Developer and Computer Applications enthusiast. Journey through my professional and educational endeavors discovering a passion for web development and a commitment to crafting innovative solutions. Lets connect and innovate together.
      </div>
      <PersonalInfo/>
    </>
  );
};

export default Page;
