import React, { useState, useEffect } from 'react';
import "../App.css";

const PointerFollowDiv = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='pointer'
      style={{
        position: 'fixed',
        left: `${position.x -15}px`,
        top: `${position.y -15}px`,
        width: '30px',
        height: '30px',
        // backgroundColor: 'black'
      }}
    ></div>
  );
};

export default PointerFollowDiv;
