import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMobile, faServer } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import Disclosure from './Disclosure';

const AboutMe = () => {
  return (
    <div className='bg-[#264653] h-auto flex flex-col md:flex-row gap-4 pb-6 lg:justify-evenly sm:justify-center'>
        <div className='space-y-2 flex flex-col items-center justify-center'>
            <h1 className='text-white text-[25pt] font-bold pt-4 text-center'>My Skills</h1>
            <Disclosure
              title="Backend Development"
              content="Experience building scalable APIs, services, and application logic."
            />
            <Disclosure
              title="Database Design"
              content="Proficient in both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) systems."
            />
            <Disclosure
              title="API Development"
              content="Skilled in designing and implementing RESTful APIs."
            />
            <Disclosure
              title="Mobile Development"
              content="Building cross-platform apps using React Native."
            />
            <Disclosure
              title="Frontend Frameworks"
              content="Comfortable with React, Next.js, and full-stack integration."
            />
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white text-[25pt] font-bold pt-4 text-center'>About Me</h1>
            <p className='sm:text-[12pt] w-[265px] lg:text-[14pt]  text-center  text-[#adb5bd]'>
            Hi, I'm Jack Gimre, a Backend Developer with a specialization in the <a href="https://www.oracle.com/database/mern-stack/" target="_blank" className="text-blue-500 underline hover:no-underline">MERN</a> stack. I'm eager to apply my creativity, passion, and dedication to work and internship opportunities.</p>
        </div>
    </div>
  )
}

export default AboutMe