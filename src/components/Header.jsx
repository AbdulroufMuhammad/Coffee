import React from 'react';
import logo from '../assets/logo.png'
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <header className='absolute z-20 flex flex-row justify-center gap-6 items-center'>
      <div className="logo">
        <img src={logo} width={80} alt="logo" className='ml-4' />
      </div>
      <div className="py-4 mt-2">
        <motion.h1 
        initial={{x: 500, delay: 2}}
        animate={{x: 0}}
        className='text-white text-3xl font-mono font-bold '>Coffee Joint</motion.h1>
      </div>
    </header>
  )
}

export default Header;