import React from 'react';
import { ReactComponent as MySVG } from './assets/sad-face-22.svg';
import PointerFollowDiv from './components/Pointer';

const UnderDevelopment = () => {
  return (
    <div style={{cursor:"none"}} className='flex flex-col justify-center items-center min-h-screen'>
      <PointerFollowDiv hide={false} customPointer={0} />
      <MySVG/>
      <div className=" font-['Poppins'] text-white text-center">Website under construction<br/> Be back with a bang!</div>
      </div>
  )
}

export default UnderDevelopment