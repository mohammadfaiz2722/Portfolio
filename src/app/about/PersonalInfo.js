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
        <div className="details" style={{marginTop:'-11%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur nostrum, maiores saepe corporis sapiente deserunt repellat excepturi inventore quaerat ea itaque iure, officiis labore. Quo quas nobis totam et ea laborum pariatur, ipsum, ipsa, non quam unde dignissimos adipisci!</div>
        <div className="underline"></div>
      </div>
        {/* </div> */}

      {/* Second About Box */}
      <div className='about-box text custom' style={{marginTop:"-6%"}} >
        {/* <div className="underline"></div> */}
        <div className="head" id='head2' style={{marginTop:'-16%'}}>Personal Info</div>
        <div className="details" style={{marginTop:'-12%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur nostrum, maiores saepe corporis sapiente deserunt repellat excepturi inventore quaerat ea itaque iure, officiis labore. Quo quas nobis totam et ea laborum pariatur, ipsum, ipsa, non quam unde dignissimos adipisci!</div>
        <div className="underline"></div>
      </div>
      <div className='about-box text custom' id='last-box' style={{marginTop:"-3%"}} >
        <div className="head" id='head3'style={{marginTop:'-20%'}}>Personal Info</div>
        <div className="details" style={{marginTop:'-16%'}} id='last-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur nostrum, maiores saepe corporis sapiente deserunt repellat excepturi inventore quaerat ea itaque iure, officiis labore. Quo quas nobis totam et ea laborum pariatur, ipsum, ipsa, non quam unde dignissimos adipisci!</div>
      </div>

    </>
  );
}

export default PersonalInfo;
