import React from 'react'
import Project from './Project'

import lxr from '../assets/LXR/forums.jpg';
const lxrDesc = 'Created for a non-denominational ranch-style church in Kiowa, Colorado, Long X Ranch Cowboys is a community subscription service.'

const Projects = () => {
  return (
    <div className='bg-white h-auto flex p-4 flex-col px-[10%]'>
        <h1 className='text-black text-[25pt] font-bold pt-4 text-center mx-auto'>My Work</h1>
        <Project image={lxr} title='Long X Ranch Cowboys' description={lxrDesc}></Project>
    </div>
  )
}

export default Projects