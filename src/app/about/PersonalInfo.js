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
        <div className="myphoto"></div>
        <div className="about-myself">I'm Mohammad Faiz, born and raised in Faizabad, Uttar Pradesh. (Interesting fact: Faizabad is also known as Ayodhya!)  While I may come across as a bit reserved at first – introverts unite! – I love a good laugh once I get to know someone. When I'm not coding or strategizing my next game plan (becoming a MERN stack developer and software engineer is the dream!), I might be curled up with a book or exploring hidden corners of the internet. My personality is a blend of seriousness and humor – it all depends on how comfortable I feel. But one thing's for sure, I'm always up for learning and growing, and I'm excited to see what the future holds! <br/>
      <strong>  "My faith as a proud Muslim motivates me to be a kind and helpful person, values that I carry into all aspects of my life, including coding and teamwork."
"In my free time, I might be found at the mosque with friends or reading about Islamic history and philosophy. But you can also find me conquering virtual quests in BGMI!"</strong>
</div>
      </div>
      <div className="heading text-center" id='About-me'>
        My Education
      </div>
      <div className='about-box text custom'>
        <div className="myeduc"></div>
        <div className="about-myself">My educational journey began at New Wave Academy, where I nurtured my curiosity from nursery all the way to class 8. In ninth grade, I transitioned to Avadh International School, where I broadened my horizons until graduation. Now, I'm immersed in the third year of my BCA program at Jhunjhunwala PG College. Programming languages ignite a passion in me, and I'm constantly seeking out new ones to master. This journey is fueled by a dream of becoming a full-stack web developer and a skilled software engineer. I believe education is a lifelong pursuit, and I'm excited to see where this path of learning takes me next!</div>
      </div>
      <div className="heading text-center" id='About-me'>
        My Hobbies
      </div>
      <div className='about-box text custom'>
        <div className="myhobbies"></div>
        <div className="about-myself">My hobbies are a whirlwind of mental challenges and physical activity! When I'm not busy coding and building awesome programs or games (think creating my own mini-world!), I'm unwinding with a thrilling adventure in BGMI or strategizing the next big attack in Clash of Clans. But sometimes, the call of competition is too strong to resist. That's when you'll find me on the field, playing cricket or football – the camaraderie with teammates and the adrenaline rush of the game are simply unbeatable. To keep my mind sharp and my body energized for all these adventures, I'm a devoted gym rat. It's the perfect way to stay focused and feeling fantastic, whether I'm conquering a coding challenge, dominating a virtual world, or crushing it on the sports field!</div>
      </div>
    </>
  );
}

export default PersonalInfo;
