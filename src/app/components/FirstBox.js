"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import './FirstBox.css';
// import profileImage from './profile3.jpg';
import Hamburger from './Hamburger';
const resumePdf = '/resume.pdf';
const FirstBox = () => {
  const [mobile,setMobile]=useState(false)
  const handleClick=()=>{
    setMobile(!mobile);
    console.log("On clicked caleed");
  
  }
  
  return (
    <>
    <div className="container custom">
      <h7 className="text">
      I'm Mohammad Faiz, a MERN Stack Developer and Bachelor of Computer Applications student. I'm passionate about web development, specializing in MongoDB, Express.js, React.js, and Node.js. Eager to solve challenges and create user-centric applications.


      </h7>
    </div>
    <div className="ham" onClick={handleClick}>
          <Hamburger/>
        </div>
    <div className={`mobile-menu ${ mobile?' show' :''}`}>
      <div className="close-cross" onClick={handleClick}>
      &times;

      </div>
      <a href="#" id='fonts1' className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Home</a>
        <a href="#" id='fonts2'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">About</a>
        <a href="#" id='fonts3'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</a>
        <a 
        id='fonts4'
          href={resumePdf}
          className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Resume
        </a>
      </div>
    </>
  );
};

export default FirstBox;
