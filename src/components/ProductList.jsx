import React from 'react';
import all_products from '../assets/all_product';
import ProductCard from './ProductCard';

function ProductList() {
  const products = all_products.slice(14, 17);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        JUST FOR YOU
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
