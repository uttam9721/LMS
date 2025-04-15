import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from './../../components/students/Companies';
const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies />
    </div>
  )
}

export default Home
