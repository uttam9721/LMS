import React from 'react'
import { assets } from './../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <>
<div
  className='flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'
  style={{ fontSize: '50px' }}
>
  <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
    Empower your future with the courses designed to
    <span className='text-blue-600'> fit your choice.</span>
    <img
      src={assets.sketch}
      alt="sketch"
      className='md:block hidden absolute -bottom-7 right-0'
      aria-hidden="true"
    />
  </h1>

  {/* Medium and Up Screen */}
  <p className='text-gray-500 mx-auto hidden md:block max-w-2xl text-sm md:text-base'>
    We bring together world-class instructors, interactive content, and a supportive community
    to help you achieve your personal and professional goals.
  </p>

  {/* Small Screens */}
  <p className='text-gray-500 mx-auto md:hidden max-w-sm text-sm'>
    We bring together world-class instructors to help you achieve your professional goals.
  </p>
</div>
  <SearchBar />
</>
  )
}

export default Hero
