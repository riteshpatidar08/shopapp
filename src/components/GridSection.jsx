import React from 'react';
import largeImage from './../assets/fitSection/bigmenimge.jpg';
import all_products from '../assets/all_product';

function GridSection() {
  const topFourItems = all_products.slice(6, 10);

  return (
    <div className="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-center leading-wide text-2xl mb-8 sm:mb-12 font-medium">
        STYLISH PICKS FOR EVERY OCCASION
      </h1>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2">
          <div className="overflow-hidden relative h-full">
            <img
              className="w-full h-full object-cover transition-transform transform hover:scale-110 ease-in-out duration-300"
              src={largeImage}
              alt="men image"
            />
            <button className="absolute inset-0 text-white text-lg w-full h-full opacity-0 hover:opacity-100 transition-opacity ease-linear duration-200 bg-black bg-opacity-50">
              View Details
            </button>
          </div>
        </div>
        {topFourItems.map((product) => (
          <div key={product.id} className="relative overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform transform ease-in-out duration-300"
              src={product.image}
              alt={product.name}
            />
            <button className="absolute inset-0 text-white text-lg w-full h-full opacity-0 hover:opacity-100 transition-opacity ease-linear duration-200 bg-black bg-opacity-50">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridSection;
