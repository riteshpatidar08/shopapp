import React from 'react';
import largeImage from './../assets/fitSection/bigmenimge.jpg';
import all_products from '../assets/all_product';
function GridSection() {
  const topFourItems = all_products.slice(6, 10);
  console.log(topFourItems);
  return (
    <div className="max-w-7xl mx-auto mt-14 px-8 py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        STYLISH PICKS FOR EVERY OCCASION
      </h1>
      {/* grid section */}
      <div className="grid gap-6 grid-cols-4 grid-rows-2">
        {/* //large image */}
        <div className="col-span-2 row-span-2">
          <div className="overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out delay-300"
              src={largeImage}
            />
          </div>
        </div>
        {topFourItems.map((product, index) => (
          <div className="overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out delay-300"
              src={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridSection;
