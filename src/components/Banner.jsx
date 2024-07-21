import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Slide } from 'react-awesome-reveal';

function Banner() {
  return (
    <Slide triggerOnce>
      <div className="bg-red-500 m-6 grid grid-cols-1 md:grid-cols-2 py-9 px-6 md:px-18 gap-4">
        {/* 1st column */}
        <div className="flex flex-col justify-center items-center p-5 text-center md:text-left">
          {/* 1st row */}
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">
              Unlock the savings!
            </p>
          </div>
          {/* 2nd row */}
          <div className="flex flex-col gap-2 mt-4 justify-center items-center md:items-start">
            <p className="text-lg md:text-xl font-semibold text-white">
              Flat 50% off on everything
            </p>
            <button className="bg-white px-4 flex items-center py-2 mt-4 text-red-500 hover:bg-gray-200 transition-all delay-100 ease-in-out font-medium">
              Shop Now <FiArrowRightCircle className="ml-2 animate-bounce" />
            </button>
          </div>
        </div>
        {/* 2nd column */}
        <div className="flex flex-col justify-center items-center md:items-start p-5">
          <div className="text-center md:text-left">
            <p className="text-5xl md:text-6xl lg:text-8xl font-bold text-white">
              Flat <span className="underline">50%</span> off
            </p>
            <p className="text-white mt-2 text-sm md:text-base">
              Available on our all store
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Banner;
