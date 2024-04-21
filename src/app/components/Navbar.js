  // components/CustomNavbar.js
  import React from 'react';
  import Image from 'next/image'; // Import the Image component from Next.js
  import profileImage from './profile2.jpg'; // Import the image file using a relative path
  import './Navbar.css';
  // import resumePdf from './resume.pdf';
  const resumePdf = '/resume.pdf';

  const Navbar = () => {
    return (
      <nav className="bg-semi-black shadow dark:bg-gray-900">
        <div className="container flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-gray-300">
          {/* Display the profile image using the Next.js Image component */}
          <div className="rounded-full overflow-hidden h-12 w-12 mr-2">
            <Image src={profileImage} width={100} height={100} alt="Profile Image" />
          </div>

          <a href="#" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Home</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">About</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</a>
          <a href={resumePdf} download="resume.pdf" className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Resume</a>
        </div>
      </nav>
    );
  };

  export default Navbar;
