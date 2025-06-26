import React from 'react';
import Project from './Project';

import lxr1 from '../assets/LXR/forums.jpg';
import lxr2 from '../assets/LXR/bibleplans.jpg';
import lxr3 from '../assets/LXR/profile.jpg';

import blackjack1 from '../assets/blackjack/blackjack1.png';
import blackjack2 from '../assets/blackjack/blackjack2.png';
import blackjack3 from '../assets/blackjack/blackjack3.png';
const stcbURL = 'https://www.facebook.com/SavetheCowboy/';
const stcbA = <a href={stcbURL} target="_blank" className="text-blue-500 underline hover:no-underline">church in Colorado</a>
const lxrDesc = <>Long X Ranch Cowboys is a subscription service for a {stcbA}. Providing a forum, interactive bible plans, and daily bible readings, this platform intends to engage the congregation and build stronger connections. User authentication, a secure payment system, input validation, and parsing bible API data are key qualities of this project.</>
const lxrImages = [lxr2, lxr1, lxr3];
const lxrStack = ['MongoDB','Express','NodeJS'];

const blackjackURL = 'https://github.com/jackgimre/blackjack';
const blackjackDesc = <>
  A mobile app built with React Native to help players improve their blackjack skills through a user-friendly and simple interface. It features deck count customization and real-time card counting settings to enhance training and strategy.</>;
const blackjackImages = [blackjack1, blackjack2, blackjack3];
const blackjackStack = ['React Native', 'Expo', 'JavaScript'];

const Projects = () => {
  return (
    <div className='bg-[#f1f1f1] h-auto flex p-4 flex-col px-[10%] items-center'>
        <h1 className='text-[#212121] text-[25pt] font-bold pt-4 text-center mx-auto mb-8'>My Work</h1>
        <Project images={lxrImages} title='Long X Ranch Cowboys' description={lxrDesc} url='https://longxranchcowboys.com' github='https://github.com/BanZ-Development/SaveTheCowBoy' stack={lxrStack}></Project>
        <Project images={blackjackImages} title="Jack's Blackjack Trainer" description={blackjackDesc} url={blackjackURL} github={blackjackURL} stack={blackjackStack}></Project>
    </div>
  )
}

export default Projects;