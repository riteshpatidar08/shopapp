import React , {useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Kids() {
    useEffect(()=>{
window.scrollTo(0,0)
  })
  const kidsItems = all_products.filter((product) => {
    return product.category === 'kid';
  });

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        KID'S CLOTHING
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {kidsItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Kids;
