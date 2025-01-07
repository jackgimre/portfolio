import React from 'react'
import img1 from '../assets/LXR/8730.jpg';

const Project = ({images, title, description, url, image}) => {
  return (
    <div className='w-[100%] bg-[#adb5bd] text-white p-4 text-[15pt] font-bold p-[1%] mb-4 flex flex-row rounded-[10px]'>
        <img src={image} className='rounded-[10px] w-[50vw] h-[50vw*1.5] border-2 border-gray'></img>
        <div className='flex flex-col pl-[1%]'>
            <h1 className='text-center text-[25pt]'>{title}</h1>
            <p className='font-normal'>{description}</p>
        </div>
    </div>
  )
}

export default Project