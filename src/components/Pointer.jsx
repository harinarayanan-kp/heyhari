import React, { useState, useEffect } from "react";
import "../App.css";

const PointerFollowDiv = ({ hide }) => {
  const radius = 24;
  const [position, setPosition] = useState({ x: -radius, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: -radius, y: 0 });
  const [prevTime, setPrevTime] = useState(Date.now());
  const [velocity, setVelocity] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - prevTime;

      if (timeDiff > 0) {
        const dx = e.clientX - prevPosition.x;
        const dy = e.clientY - prevPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const newVelocity = distance / timeDiff;

        setVelocity(newVelocity);
        setPrevPosition({ x: e.clientX, y: e.clientY });
        setPrevTime(currentTime);
      }

      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prevPosition, prevTime]);

  // Determine the scale factor based on velocity
  const scaleFactor = Math.min(1 - velocity / 5, 2); // Adjust the divisor and max scale as needed

  return (
    <div
      className={hide ? 'Opacity0' : 'pointer'}
      style={{
        position: "fixed",
        left: `${position.x - radius / 2}px`,
        top: `${position.y - radius / 2}px`,
        width: `${radius}px`,
        height: `${radius}px`,
        transform: `scale(${scaleFactor})`,
        transition: 'transform 0.1s ease-out',
        // backgroundColor: 'black'
      }}
    ></div>
  );
};

export default PointerFollowDiv;