import React, { useState } from 'react';

const AnimatedTitle = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold mb-2">{children}</h2>
      <div
        className={`
          h-1 
          bg-blue-500 
          transition-all 
          duration-300 
          ease-in-out
          ${isHovered ? 'w-24 opacity-100' : 'w-0 opacity-0'}
        `}
      ></div>
    </div>
  );
};

export default AnimatedTitle;