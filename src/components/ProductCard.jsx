import React from 'react';
import Rating from '@mui/material/Rating';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleClick = () =>{
dispatch(addToCart({
   id : product.id,
   name : product.name,
   price : product.price ,
   image : product.image
}))
  }

  console.log(product);
  return (
    <div>
      <div className="relative  group">
        <div className="absolute top-2 left-2 bg-red-500 text-white font-semibold text-xs p-1">
          {product.discount}
        </div>
        <img className="h-full w-full object-cover" src={product.image} />
        <div
          className=" absolute 
          bottom-0
          opacity-0 w-full  translate-y-full  group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:-translate-y-0"
        >
          <div className="mt-auto">
            <button onClick={handleClick} className="bg-black bg-opacity-50 px-6 py-4 w-full text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
  <Rating name="product_rating" value={product.rating} readOnly size='small' sx={{color :'black'}}  />
        <h1>{product.name}</h1>
        <div className="flex gap-2">
          <span className=" text-red-500 line-through">
            ${product.old_price}
          </span>
          <span className="">${product.new_price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
