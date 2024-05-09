"use client"
import React from 'react'
import SecondPort from './SecondPort'
import Link from 'next/link';
import Hamburger from '../components/Hamburger';
import { useState } from 'react';
import WhereLearn from './WhereLearn';
const resumePdf = '/resume.pdf';
// import { useRouter } from 'next/navigation';
// useEffect
const page = () => {
    const [mobile,setMobile]=useState(false)
    // const router=useRouter()
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
        <Link href="/portfolio" id='fonts3'className="border-b-2 border-transparent hover:text-gray-300 dark:hover:text-gray-200 hover:border-white mx-1.5 sm:mx-6">Portfolio</Link>
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
    <div className="custom text-center">
    My skills encompass a wide range of capabilities crucial for modern development and engineering tasks. I excel in crafting robust applications and solving complex challenges. With a strong foundation in software engineering principles and a knack for problem-solving, I consistently deliver efficient and scalable solutions. My adaptability and continuous learning mindset ensure I stay effective across diverse projects and domains
    </div>
    <SecondPort/>
    <WhereLearn/>
    
    </>
  )
}

export default page
