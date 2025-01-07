import React from 'react'
import img1 from '../assets/LXR/8730.jpg';
import ImageCarousel from './ImageCarousel';
import PropTypes from 'prop-types';

const Project = ({images, title, description, url, stack, github}) => {
  return (
    <div className='lg:w-[70%] sm:w-[100%] bg-white text-black text-[15pt] font-bold mb-4 flex flex-col rounded-[10px] h-fitcontent pb-16 border-4 border-white shadow-2xl'>
        <ImageCarousel images={images} className='w-[100%] h-[60%]'></ImageCarousel>
        <div className='flex flex-col px-[1%]'>
            <a href={url} target='_blank' className='text-blue-500 underline hover:no-underline'><h1 className='text-center text-[25pt]'>{title}</h1></a>
            <div className='flex flex-col font-normal lg:justify-around pt-2 mx-[10%]'>
                <p className='pb-4'>{description}</p>
                <ul className='list-disc pl-10'>
                    <li><a href={github} target='_blank' className='text-blue-500 underline hover:no-underline'>GitHub</a></li>
                    {stack.map((item, index)=>{
                        return <li key={index} className=''>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

Project.propTypes = {
    stack: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure images is an array of strings (URLs)
};

export default Project