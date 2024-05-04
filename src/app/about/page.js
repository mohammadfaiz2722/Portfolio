"use client"
import React from 'react'
import './about.css'
import PersonalInfo from './PersonalInfo'
import Hamburger from '../components/Hamburger';
import Link from 'next/link';
import { useState } from 'react';
const resumePdf = '/resume.pdf';
const page = () => {
  const [mobile,setMobile]=useState(false)
  const handleClick=()=>{
    setMobile(!mobile);
    // console.log("On clicked caleed");
  
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
        <Link href="#" id='fonts3'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</Link>
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
    <div className='about-box text custom'    id='imp' >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eaque ab harum illum itaque? Maxime quam eligendi blanditiis porro, ipsum tenetur iure, dolorem nihil, quae vel pariatur beatae officia libero! Ex earum dolores ipsa eius ut, tempora vitae nesciunt eaque error saepe quae laborum voluptatibus aliquam exercitationem voluptates natus neque? Lorem ipsum dolor,
    </div>
    <PersonalInfo/>
    </>
  )
}

export default page
