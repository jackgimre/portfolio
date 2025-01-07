import React from 'react'
import jackgimre from '../assets/jackgimre.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareXTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
      <div className='flex flex-col items-center justify-center bg-[#22223b]'>
          <div className='my-4'>
            <img className='w-56 h-56 mx-auto rounded-full shadow-2xl object-cover border-2 border-white' src={jackgimre} alt="Description" />
            <h1 className='font-bold text-[25pt] text-center text-white'>Jack Gimre</h1>
            <p className='text-center text-[#adb5bd] lg:text-[14pt] sm:text-[12pt]'>Software Engineer</p>
            <p className='text-center text-[#adb5bd] lg:text-[14pt] sm:text-[12pt]'>Computer Science and Engineering at Geneva High School</p>
            <div className='flex flex-row text-white justify-center text-[20pt] space-x-3 mt-2'>
              <a href='https://github.com/jackgimre' target='_blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
              <a href='https://www.linkedin.com/in/jack-gimre-499477307/' target='_blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a href='mailto:jackgimre@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
            </div>
          </div>
      </div>
  )
}

export default Header