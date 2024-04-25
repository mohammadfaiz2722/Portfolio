import React from 'react';
import './SecondBox.css';
import profileImage from './project1.png';


const SecondBox = () => {
  return (
    <div className='container'>
      <div className="heading text-center">
        A glimpse of my Projects
      </div>
      <div className="main-box">
        {/* Project 1 */}
        <div className="project1" >
          <div className="project1-image">
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio sint adipisci dolore, quibusdam dolorem nihil maxime nobis animi aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, in distinctio ipsa fugit consectetur quis et ea minus sapiente reprehenderit!</div>
          </div>
          <div className="project1-des">
            iNoteBook
          </div>
        </div>

        {/* Project 2 */}
        <div className="project2">
          <div className="project2-image" style={{ backgroundImage: `url(${profileImage})` }}>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio sint adipisci dolore, quibusdam dolorem nihil maxime nobis animi aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, in distinctio ipsa fugit consectetur quis et ea minus sapiente reprehenderit!</div>
          </div>
          <div className="project2-des">
         Library Management
          </div>
        </div>

        {/* Project 3 */}
        <div className="project3">
          <div className="project3-image" style={{ backgroundImage: `url(${profileImage})` }}>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio sint adipisci dolore, quibusdam dolorem nihil maxime nobis animi aperiam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, in distinctio ipsa fugit consectetur quis et ea minus sapiente reprehenderit!</div>
          </div>
          <div className="project3-des">
            Text Utility
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SecondBox;
