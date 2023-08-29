import React from 'react'
import googleLogo from '../assets/google-logo.png'
import hero from '../assets/hero.png'

export default function loginSignup() {
  return (
    <div className='flex flex-col lg:flex-row'>
    <div>
      <img src={hero} alt="" />
    </div>
      <div className='lg:pt-32 flex flex-col'>
      <div className='flex items-center justify-center text-4xl font-lato'>
        Welcome to API Hunt!
      </div>
     <div className='flex items-center justify-center w-full'>
       <button className='flex items-center justify-center border-2 w-80 border-blue-500 mt-20 px-4 py-2'>
        <img className='h-8 mr-2' src={googleLogo} alt="" />
        <span className='text-xl font-lato'>Sign In with Google</span>
      </button>
     </div>
    </div>
    </div>
    
  )
}