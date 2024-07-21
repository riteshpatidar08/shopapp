// CartItem.js
import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-gray-500">Color: {item.color}</p>
          <p className="text-gray-500">Size: {item.size}</p>
          <p className="text-gray-500">In Stock</p>
          <button className="text-sm text-blue-500 hover:underline mt-2">
            Save for later
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border rounded">
          <button
            className="px-2 py-1 text-gray-600 hover:bg-gray-200"
            onClick={() => onDecrease(item.id)}
          >
            -
          </button>
          <span className="px-4 py-2">{item.quantity}</span>
          <button
            className="px-2 py-1 text-gray-600 hover:bg-gray-200"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>
        <p className="text-lg font-medium ml-6">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          className="ml-4 text-red-500 hover:underline"
          onClick={() => onDecrease(item.id)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;
