import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-[#A7B1B7] h-auto flex flex-row justify-evenly mb-4 pb-4'>
        <div className=''>
            <h1 className='text-white text-[25pt] font-bold pt-4 text-center'>My Skills</h1>
            <ul className='text-center text-[14pt]'>
                <li>Backend Engineering</li>
                <li>Database Engineering</li>
                <li>RESTful APIs</li>
                <li>SQL and NoSQL</li>
                <li>Mobile App Development</li>
                <li>React, React Native, NextJS</li>
            </ul>
        </div>
        <div className=''>
            <h1 className='text-white text-[25pt] font-bold pt-4 text-center'>About Me</h1>
            <p className='w-[265px] text-center text-[14pt]'>
            Hi, I'm Jack Gimre, a Backend Developer with a specialization in the <a href="https://www.oracle.com/database/mern-stack/" target="_blank" className="text-blue-500 underline hover:no-underline">MERN</a> stack. I'm eager to apply my creativity, passion, and dedication to work and internship opportunities.</p>
        </div>
    </div>
  )
}

export default AboutMe