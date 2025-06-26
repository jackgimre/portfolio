import React from 'react';
import ImageCarousel from './ImageCarousel';
import PropTypes from 'prop-types';

const Project = ({ images, title, description, url, stack, github }) => {
  return (
    <div className='lg:w-[70%] w-full bg-white text-black text-[15pt] mb-4 flex flex-col justify-center rounded-[10px] h-fitcontent pb-16 border-4 border-white shadow-2xl'>
      <ImageCarousel images={images} className='w-full h-[60%] self-center' />

      <div className='flex flex-col px-[1%] justify-center items-center'>
        <a href={url} target='_blank' className='text-blue-500 underline hover:no-underline'>
          <h1 className='text-center text-[25pt]'>{title}</h1>
        </a>

        <div className="w-fit mx-auto flex flex-col lg:flex-row justify-center items-start gap-8 pt-4 w-[80%]">
          <p className="text-left">{description}</p>
          <ul className="list-disc pl-5 text-left">
            <li>
              <a href={github} target="_blank" className="text-blue-500 underline hover:no-underline">
                GitHub
              </a>
            </li>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
