"use client"
import React, { useState } from 'react'; // Import useState
import SecondPort from './SecondPort';
import Link from 'next/link';
import Hamburger from '../components/Hamburger';
import WhereLearn from './WhereLearn';
const resumePdf = '/resume.pdf';
import './port.css';

function Page() {
  const [mobile, setMobile] = useState(false); // State for mobile menu visibility

  const handleClick = () => {
    setMobile(!mobile); // Toggle mobile menu visibility
  };

  return (
    <>
      <div className="ham" onClick={handleClick}>
        <Hamburger />
      </div>
      <div className={`mobile-menu ${mobile ? 'show' : ''}`}>
        <div className="close-cross" onClick={handleClick}>
          &times;
        </div>
        <Link href="/" id="fonts1" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">
          Home
        </Link>
        <Link href="/about" id="fonts2" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">
          About
        </Link>
        <Link href="/portfolio" id="fonts3" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">
          Portfolio
        </Link>
        <Link
          id="fonts4"
          href={resumePdf}
          className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>
      <div className="custom text-center">
        {/* Your content here */}
        My skills encompass a wide range of capabilities crucial for modern development and engineering tasks. I excel in crafting robust applications and solving complex challenges. With a strong foundation in software engineering principles and a knack for problem-solving, I consistently deliver efficient and scalable solutions. My adaptability and continuous learning mindset ensure I stay effective across diverse projects and domains.
      </div>
      <SecondPort />
      <WhereLearn />
    </>
  );
}

export default Page;
