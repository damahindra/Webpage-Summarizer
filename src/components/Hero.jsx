import React from 'react'

import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-row'>
        <img src={logo} alt="logo" className='w-28 object-contain' />
      </nav>
    </header>
  )
}

export default Hero