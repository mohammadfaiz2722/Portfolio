"use client"
import React from 'react';
import './PersonalInfo.css';

// import '../components/FirstBox.css'

const PersonalInfo = () => {

  
  return (
    <>
    
      <div className="heading text-center" id='About-me'>
        About Me
      </div>
     
  
      <div className='about-box text custom'>
        {/* <div className="move"> */}

        <div className="head" id='head1'>Personal Info</div>
        <div className="details" style={{marginTop:'-11%'}}>My name is Mohammad Faiz, and I was born in Faiz U.P on 27th February 2003. I am passionate about coding and gaming, spending my time exploring new programming concepts and enjoying immersive gaming experiences. These hobbies fuel my curiosity and drive for learning in the ever-evolving tech landscape.

</div>
        <div className="underline"></div>
      </div>
        {/* </div> */}

      {/* Second About Box */}
      <div className='about-box text custom' style={{marginTop:"-6%"}} >
        {/* <div className="underline"></div> */}
        <div className="head " id='head2'  style={{marginTop:'-16%'}}>Educational Info</div>
        <div className="details second-last-box" style={{marginTop:'-12%'}}>I completed my schooling at Avadh International (10+2) and am currently pursuing BCA at Jhunjhunwala PG College. My programming journey has equipped me with a diverse set of languages including C, C++, Python, Java, JavaScript, and the MERN stack. These experiences have not only enriched my technical skills but also fueled my passion for problem-solving and innovation in the digital realm.</div>
        <div className="underline"></div>
      </div>
      <div className='about-box text custom' id='last-box' style={{marginTop:"-3%"}} >
        <div className="head" id='head3'style={{marginTop:'-20%'}}>Work History</div>
        <div className="details last" style={{marginTop:'-16%'}} id='last-para'>In addition to my academic pursuits, I have been actively involved in coding for approximately three years, honing my skills and delving into various programming languages and technologies. This journey has not only deepened my understanding of software development but has also allowed me to work on diverse projects, from web development to software applications. My experiences have taught me the importance of continuous learning, problem-solving, and collaboration within teams. I am eager to leverage my coding expertise and contribute meaningfully to innovative tech projects that drive positive change and user experiences.</div>
      </div>

    </>
  );
}

export default PersonalInfo;
