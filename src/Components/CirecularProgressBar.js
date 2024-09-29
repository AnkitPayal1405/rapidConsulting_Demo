import React from 'react'

const CirecularProgressBar =({ progress, label }) => {
    const strokeWidth = 10;
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-20 md:w-24 h-20 md:h-24">
          <svg
            className="rotate-[-90deg] w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              className="text-gray-300"
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            <circle
              className="text-[#FF6F61] transition-all duration-500"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className=" text-base md:text-lg font-bold">{progress < 100 ? `${progress}%` : label}</span>
          </div>
        </div>
      </div>
    );
  };
  

export default CirecularProgressBar