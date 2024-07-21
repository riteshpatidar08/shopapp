import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';

function Kids() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kidsItems = all_products.filter((product) => {
    return product.category === 'kid';
  });

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center leading-wide text-2xl mb-8 sm:mb-12 font-medium">
        KID'S CLOTHING
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {kidsItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Kids;
