"use client"
import React from 'react'
import './about.css'
import PersonalInfo from './PersonalInfo'
import Link from 'next/link';
import Hamburger from '../components/Hamburger';
import { useState } from 'react';
const resumePdf = '/resume.pdf';
const page = () => {
  const [mobile,setMobile]=useState(false)
  const handleClick=()=>{
    setMobile(!mobile);
  
  }
  return (
    <>

     <div className="ham" onClick={handleClick}>
          <Hamburger/>
        </div>
    <div className={`mobile-menu ${ mobile?' show' :''}`}>
      <div className="close-cross" onClick={handleClick}>
      &times;

      </div>
      <Link href="/" id='fonts1' className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Home</Link>
        <Link href="/about" id='fonts2'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">About</Link>
        <Link href="portfolio" id='fonts3'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</Link>
        <Link 
        id='fonts4'
          href={resumePdf}
          className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Resume
        </Link>
      </div>
    <div className='about-box text custom' id='imp' >
    Explore my world as Mohammad Faiz, a driven MERN Stack Developer and Computer Applications enthusiast. Journey through my professional and educational endeavors, discovering a passion for web development and a commitment to crafting innovative solutions. Let's connect and innovate together!
    </div>
    <PersonalInfo/>
    </>
  )
}

export default page
