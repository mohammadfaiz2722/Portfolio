import React from 'react';
import './SecondPort.css';
import Link from 'next/link';

const SecondPort = () => {
  return (
    <>
      <div className='container'>
        <div className="heading text-center">
          Technologies I Know
        </div>
        <div className="flex justify-center  text-gray-500 text-sm bg-new-gray" style={{width:'101vw'}}>
        <span className="sm:hidden">Scroll to see more Technologies &rarr;</span>
      </div>
        <div className="main-box">
          
          {/* Project 1 */}
          <div className="project1">
            <div className="new-image-box">
              <Link href='https://www.mongodb.com/resources/languages/mern-stack'>
                <div className="new-project1-image new-image">
                  <div className="des">The MERN stack is a full-stack development framework used to build dynamic web applications. It comprises four key technologies: MongoDB, a NoSQL database for data storage; Express.js, a backend web application framework for Node.js; React.js, a frontend JavaScript library for building user interfaces; and Node.js, a server-side runtime environment for executing JavaScript code. Together, these technologies enable developers to create scalable and efficient web applications with a unified JavaScript-based stack.</div>
                </div>
              </Link>
            </div>
            <div className="new-project1-des">
              Mern Stack
            </div>
          </div>

          {/* Project 2 */}
          <div className="project2">
            <div className="new-image-box">
              <Link href='https://docs.oracle.com/en/java/'>
                <div className="new-project2-image">
                  <div className="des">Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Pythons extensive standard library and community-driven ecosystem make it versatile for various tasks, from web development and data analysis to artificial intelligence and automation. Its concise syntax and dynamic typing make it beginner-friendly and efficient for rapid development.</div>
                </div>
              </Link>
            </div>
            <div className="new-project2-des">
              Python
            </div>
          </div>

          {/* Project 3 */}
          <div className="project3">
            <div className="new-image-box">
              <div className="new-project3-image">
                <div className="des">Java is a high-level object-oriented programming language known for its portability and versatility It uses a write once run anywhere approach allowing developers to create applications that can run on any platform with a Java Virtual Machine . Java is commonly used for building enterprise-level applications Android apps web applications and large-scale systems due to its robustness and wide adoption.</div>
              </div>
            </div>
            <div className="new-project3-des">
              Java
            </div>
          </div>

          {/* Project 4 */}
          <div className="project4">
            <div className="new-image-box">
              <Link href='https://www.learn-c.org/'>
                <div className="new-project4-image">
                  <div className="des">C is a procedural programming language known for its speed and efficiency, widely used for system programming and developing operating systems and embedded systems. It offers low-level memory manipulation and access to hardware, making it suitable for performance-critical applications.</div>
                </div>
              </Link>
            </div>
            <div className="new-project3-des">
              C
            </div>
          </div>

          {/* Project 5 */}
          <div className="project5">
            <div className="new-image-box">
              <Link href='https://www.geeksforgeeks.org/c-plus-plus/'>
                <div className="new-project5-image">
                  <div className="des">C++ is an extension of C with object-oriented programming capabilities. It adds features like classes, inheritance, and polymorphism, enhancing code organization and reusability for large-scale software development, games, and complex applications.</div>
                </div>
              </Link>
            </div>
            <div className="new-project3-des">
              C++
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPort;
