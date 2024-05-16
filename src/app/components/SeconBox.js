import React from 'react';
import './SecondBox.css';
import Link from 'next/link';

const SecondBox = () => {
  return (
    <div className='container'>
      <div className="heading text-center">
        A glimpse of my Projects
      </div>
      <div className="main-box">
        {/* Project 1 */}
        <div className="project1">
          <div className="image-box">
            <Link href='https://github.com/mohammadfaiz2722/NotesWebsite.github.io'>
              <div className="project1-image">
                <div className="des">A web application built using vanilla JavaScript HTML and Bootstrap that allows users to create and save notes. Users can add titles and content to their notes which are then stored in the browsers local storage for easy access and retrieval. The intuitive interface and responsive design enhance the note-taking experience making it convenient for users to organize their thoughts and ideas.</div>
              </div>
            </Link>
          </div>
          <div className="project1-des">
            iNoteBook
          </div>
        </div>

        {/* Project 2 */}
        <div className="project2">
          <div className="image-box">
            <Link href='https://github.com/mohammadfaiz2722/LibraryManagement.github.io'>
              <div className="project2-image">
                <div className="des">A robust web application developed using vanilla JavaScript HTML and Bootstrap for managing library resources efficiently. Users can input book details such as title author and type with the data seamlessly stored in the browsers local storage. This system offers a user-friendly interface for adding editing and organizing books empowering librarians or book enthusiasts to maintain a structured and accessible library catalog.</div>
              </div>
            </Link>
          </div>
          <div className="project2-des">
            Library Management
          </div>
        </div>

        {/* Project 3 */}
        <div className="project3">
          <div className="image-box">
            <div className="project3-image">
              <div className="des">A text editing tool created using React and Bootstrap empowering users to modify paragraphs effortlessly. With features for formatting text users can customize their content as needed. Additionally the tool provides a word count feature allowing users to track the number of words in their paragraphs in real-time. The intuitive interface and responsive design enhance the user experience making text editing and analysis straightforward and convenient.</div>
            </div>
          </div>
          <div className="project3-des">
            Text Utility
          </div>
        </div>

        {/* Project 4 */}
        <div className="project4">
          <div className="image-box">
            <Link href='https://github.com/mohammadfaiz2722/ShatabdiNews.github.io'>
              <div className="project4-image">
                <div className="des">A dynamic website leveraging the NewsAPI to deliver real-time news updates. Built using vanilla JavaScript HTML and Bootstrap the site offers a clean and intuitive interface for users to stay informed. Users can access a variety of news categories ensuring a diverse range of updates. The combination of real-time data from NewsAPI and a responsive design enhances the user experience providing quick access to current events in an easily digestible format.</div>
              </div>
            </Link>
          </div>
          <div className="project3-des">
            Shatabdi News
          </div>
        </div>

        {/* Project 5 */}
        <div className="project5">
          <div className="image-box">
            <Link href='https://github.com/mohammadfaiz2722/AlarmClock.github.io'>
              <div className="project5-image">
                <div className="des">An intuitive alarm clock web application crafted using HTML CSS and JavaScript. Users can easily set alarms by specifying the desired time and choosing optional settings such as alarm tone or repeat frequency. The minimalist design ensures a seamless user experience with clear visual cues for alarm status and easy-to-use controls for managing alarms. The alarm functionality is implemented using JavaScript timers providing reliable and accurate notifications at the specified times.</div>
              </div>
            </Link>
          </div>
          <div className="project3-des">
            Alarm Clock
          </div>
        </div>

        <Link className='more' href="https://github.com/mohammadfaiz2722">Deep Dive in my projects</Link>
      </div>
    </div>
  );
};

export default SecondBox;
