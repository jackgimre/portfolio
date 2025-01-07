import React from 'react'
import jackgimre from '../assets/jackgimre.jpg';

const Header = () => {
  return (
      <div className='flex flex-col items-center justify-center bg-[#22223b]'>
          <div className='my-4'>
            <img className='w-56 h-56 mx-auto rounded-full shadow-2xl object-cover border-2 border-white' src={jackgimre} alt="Description" />
            <h1 className='font-bold text-[25pt] text-center text-white'>Jack Gimre</h1>
            <p className='text-center text-[#adb5bd] text-[14pt]'>Software Engineer</p>
            <p className='text-center text-[#adb5bd] text-[14pt]'>Computer Science and Engineering at Geneva High School</p>
          </div>
      </div>
  )
}

export default Header