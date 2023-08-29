import React from 'react'
import googleLogo from '../assets/google-logo.png'
import hero from '../assets/hero.png'
import {motion} from 'framer-motion'

export default function loginSignup() {
  return (
    <motion.div     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }} className='flex justify-center flex-col lg:flex-row'>
    <div className='flex justify-center'>
      <img src={hero} alt="" />
    </div>
    <div className='flex flex-col justify-center'>
      <div className='flex items-center justify-center text-4xl font-lato'>
        Welcome to API Hunt!
      </div>
      <div className='flex items-center justify-center w-full'>
        <motion.button   whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}} className='flex items-center justify-center border-2 w-80 border-blue-500 lg:mt-12 mt-6 px-4 py-2'>
          <motion.img whileHover={{ rotate: 360 }} onHoverStart={e => {}} onHoverEnd={e => {}} transition={{ duration: 0.3 }} className='h-8 mr-2' src={googleLogo} alt="" />
          <span className='text-xl font-lato'>Sign In with Google</span>
        </motion.button>
      </div>
    </div>
    </motion.div>
    
  )
}