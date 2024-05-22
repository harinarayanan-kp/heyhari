import React from 'react';
import { ReactComponent as MySVG } from './assets/sad-face-22.svg';

const UnderDevelopment = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <MySVG/>
      <div className=" font-['Poppins'] text-center">Website under construction<br/> Be back with a bang!</div>
      </div>
  )
}

export default UnderDevelopment