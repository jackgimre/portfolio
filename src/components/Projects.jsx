import React from 'react';
import Project from './Project';

import lxr1 from '../assets/LXR/forums.jpg';
import lxr2 from '../assets/LXR/bibleplans.jpg';
import lxr3 from '../assets/LXR/profile.jpg';
const stcbURL = 'https://www.facebook.com/SavetheCowboy/';
const stcbA = <a href={stcbURL} target="_blank" className="text-blue-500 underline hover:no-underline">church in Colorado</a>
const lxrDesc = <>Long X Ranch Cowboys is a subscription service for a {stcbA}. Providing a forum, interactive bible plans, and daily bible readings, this platform intends to engage the congregation and build stronger connections. User authentication, a secure payment system, input validation, and parsing bible API data are key qualities of this project.</>

const lxrImages = [lxr2, lxr1, lxr3];

const lxrStack = ['MongoDB','Express','NodeJS'];

const Projects = () => {
  return (
    <div className='bg-[#f1f1f1] h-auto flex p-4 flex-col px-[10%] items-center'>
        <h1 className='text-[#212121] text-[25pt] font-bold pt-4 text-center mx-auto mb-8'>My Work</h1>
        <Project images={lxrImages} title='Long X Ranch Cowboys' description={lxrDesc} url='https://longxranchcowboys.com' github='https://github.com/BanZ-Development/SaveTheCowBoy' stack={lxrStack}></Project>
    </div>
  )
}

export default Projects;