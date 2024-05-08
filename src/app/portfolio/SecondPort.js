import React from 'react'
// import '../components/SecondBox.css'
import './SecondPort.css'
import Link from 'next/link'
const SecondPort = () => {
  return (
    <>
   <div className='container'>
      <div className="heading text-center">
      Technologies I Know
      </div>
      <div className="main-box">
        {/* Project 1 */}
        <div></div>
        <div className="project1" >
          <div className="new-image-box">
<Link href='https://github.com/mohammadfaiz2722/NotesWebsite.github.io'>

          <div className="new-project1-image new-image">
            <div className="des"> A web application built using vanilla JavaScript, HTML, and Bootstrap that allows users to create and save notes. Users can add titles and content to their notes, which are then stored in the browser's local storage for easy access and retrieval. The intuitive interface and responsive design enhance the note-taking experience, making it convenient for users to organize their thoughts and ideas.
</div>
          </div>
</Link>
          </div>
          <div className="new-project1-des" >

            Mern Stack
          </div>
        </div>

        {/* Project 2 */}
        <div className="project2">
          <Link href='https://github.com/mohammadfaiz2722/LibraryManagement.github.io'>

          <div className="new-image-box">

          <div className="new-project2-image" >
            <div className="des">A robust web application developed using vanilla JavaScript, HTML, and Bootstrap for managing library resources efficiently. Users can input book details such as title, author, and type, with the data seamlessly stored in the browser's local storage. This system offers a user-friendly interface for adding, editing, and organizing books, empowering librarians or book enthusiasts to maintain a structured and accessible library catalog.</div>
          </div>
          </div>
          </Link>
          <div className="new-project2-des" style={{marginLeft:'6% !important'}}>
         Python
          </div>
        </div>

        {/* Project 3 */}
        <div className="project3">
          <div className="new-image-box">
            
          <div className="new-project3-image" >
            <div className="des">A text editing tool created using React and Bootstrap, empowering users to modify paragraphs effortlessly. With features for formatting text, users can customize their content as needed. Additionally, the tool provides a word count feature, allowing users to track the number of words in their paragraphs in real-time. The intuitive interface and responsive design enhance the user experience, making text editing and analysis straightforward and convenient.</div>
          </div>
          </div>
          <div className="new-project3-des" >
           Java
          </div>
        </div>
        <div className="project4">
          <div className="new-image-box">
            <Link href='https://github.com/mohammadfaiz2722/ShatabdiNews.github.io'
>
          <div className="new-project4-image" >
            <div className="des">A dynamic website leveraging the NewsAPI to deliver real-time news updates. Built using vanilla JavaScript, HTML, and Bootstrap, the site offers a clean and intuitive interface for users to stay informed. Users can access a variety of news categories, ensuring a diverse range of updates. The combination of real-time data from NewsAPI and a responsive design enhances the user experience, providing quick access to current events in an easily digestible format.</div>
          </div>
  </Link>            
          </div>
          <div className="new-project3-des" style={{marginLeft:'8% !important'}}>
            C
          </div>
        </div>
        <div className="project5">
          <Link href='https://github.com/mohammadfaiz2722/AlarmClock.github.io'>

          <div className="new-image-box">
            
          <div className="new-project5-image" >
            <div className="des">An intuitive alarm clock web application crafted using HTML, CSS, and JavaScript. Users can easily set alarms by specifying the desired time and choosing optional settings such as alarm tone or repeat frequency. The minimalist design ensures a seamless user experience, with clear visual cues for alarm status and easy-to-use controls for managing alarms. The alarm functionality is implemented using JavaScript timers, providing reliable and accurate notifications at the specified times.</div>
          </div>
          </div>
          </Link>
          <div className="new-project3-des" style={{marginLeft:'7% !important'}}>
                C++
          </div>
        </div>

          <Link className='more' href="https://images.search.yahoo.com/search/images;_ylt=Awr.05PYGTlmhagVkT5XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=Chutiye+images&fr2=piv-web&type=E211US885G0&fr=mcafee#id=11&iurl=https%3A%2F%2Fstickerly.pstatic.net%2Fsticker_pack%2FFcxo0AZ8oaXXrzH693IC9w%2FBKPI4Q%2F2%2F87e34e7c-fb5e-4b01-886a-bdb2ea67341d.png&action=click">Deep Dive in my projects</Link>
      </div>
      {/* <Footer/> */}
    </div>

    </>
  )
}

export default SecondPort
