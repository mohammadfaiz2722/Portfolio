"use client"
import React from 'react';
import './PersonalInfo.css';

// import ../components/FirstBox.css

const PersonalInfo = () => {

  
  return (
    <div className='wrapper'>
    
      <div className="personalheading text-center" >
        About Me
      </div>
     
      <div className="Newpersonalheading text-center" >
      Unlock the mysteries of who I am...
      </div>
     
  
      <div className='about-box port text custom'>
        <div className="myphoto"></div>
        <p className='none'><strong>About me</strong></p>
        <div className="about-myself about-mee" id="about-mee">
        I am Mohammad Faiz born and raised in Faizabad Uttar Pradesh While I may come across as a bit reserved at first introverts unite I love a good laugh once I get to know someone When Im not coding or strategizing my next game plan I might be curled up with a book or exploring hidden corners of the internet My personality is a blend of seriousness and humor it all depends on how comfortable I feel But one things for sure Im always up for learning and growing and Im excited to see what the future holds  My faith as a proud Muslim motivates me to be a kind and helpful person values that I carry into all aspects of my life including coding and teamwork <br/>

</div>

      </div>
      <div className="personalheading text-center">
        My Education
      </div>
      <div className='about-box text custom'>
        <div className="myeduc"></div>
        <div className="about-myself about-educ" id="about-educ">
  <p className='none-educ'><strong>My Education</strong></p>
  My educational journey began at New Wave Academy where I nurtured my curiosity from nursery all the way to class 8. In ninth grade I transitioned to Avadh International School where I broadened my horizons until graduation. Now Im immersed in the third year of my BCA program at Jhunjhunwala PG College. Programming languages ignite a passion in me and Im constantly seeking out new ones to master. This journey is fueled by a dream of becoming a full stack web developer and a skilled software engineer. I believe education is a lifelong pursuit and Im excited to see where this path of learning takes me next
</div>
        
      </div>
      <div className="personalheading text-center" >
        My Hobbies
      </div>
      <div className='about-box text custom'>
        <div className="myhobbies"></div>
        <div className="about-myself about-hobby" id="about-hobby">
  <p className='none-hobby'><strong>My Hobbies</strong></p>
  Prepare for a whirlwind tour through the chaos that is my life of hobbies When Im not busy conjuring code magic to create entire virtual realms Im diving headfirst into epic battles in games like BGMI or plotting strategic triumphs in Clash of Clans And let me tell you resisting the siren song of competition is about as easy as herding cats which is why youll often find me on the field dodging cricket balls or executing ninja like moves in a football match The camaraderie with teammates is fantastic even if we occasionally trip over our own feet Now to keep my mind sharper than Excalibur and my body more energized than a hyperactive Pikachu I hit the gym religiously Its where I sculpt my coding muscles hone my virtual battle skills and maybe even learn a thing or two about lifting heavy stuff Because lets face it whether Im coding my way to victory conquering digital realms or attempting to kick a ball without tripping its all about having a blast and maybe a few bruises along the way
</div>

      </div>
    </div>
  );
}

export default PersonalInfo;
