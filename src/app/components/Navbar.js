import React from 'react';
import Image from 'next/image';

import './Navbar.css';

const resumePdf = '/resume.pdf';

const Navbar = () => {
  return (
    <>
    <nav className="bg-semi-black shadow dark:bg-gray-900">
      <div className="container1 flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-gray-300">
        {/* <div className="rounded-full overflow-hidden h-12 w-12 mr-2">
          <Image src={profileImage} width={100} height={100} alt="Profile Image" />
        </div> */}
        <a href="#" id='fonts' className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Home</a>
        <a href="#" id='fonts'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">About</a>
        <a href="#" id='fonts'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</a>
        {/* Open resume PDF in a new window on click */}
        <a 
        id='fonts'
          href={resumePdf}
          className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
    
     
    </>
  );
};

export default Navbar;
