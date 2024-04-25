"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import './FirstBox.css';
// import profileImage from './profile3.jpg';
import Hamburger from './Hamburger';
const resumePdf = '/resume.pdf';
const FirstBox = () => {
  const [mobile,setMobile]=useState(false)
  const [cross,setCross]=useState(mobile)
  const handleClick=()=>{
    setMobile(!mobile);
    console.log("On clicked caleed");
  
  }
  const handleCross=()=>
  {
    setMobile(false)
    setCross(mobile)
  }
  return (
    <>
    <div className="container custom">
      <h7 className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis soluta consequuntur dicta repellendus inventore nemo quis ratione quod delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus distinctio esse, beatae sit rerum unde nesciunt maiores eius quas placeat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quos reprehenderit magnam aut fuga eligendi molestiae aliquid eveniet eaque iusto!
      </h7>
    </div>
    <div className="ham" onClick={handleClick}>
          <Hamburger/>
        </div>
    <div className={`mobile-menu ${ mobile?' show' :''}`}>
      <div className="close-cross" onClick={handleCross}>
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
