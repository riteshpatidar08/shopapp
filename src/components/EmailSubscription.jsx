import React from 'react';

function EmailSubscription() {
  return (
    <div className="bg-black p-10">
      <h1 className="text-white text-xl mb-5 text-center">
        Enter your email to get updates about exclusive offers!
      </h1>
      <form className="text-center">
        <input 
          className="w-full max-w-lg p-3 h-10 mr-3 mb-4 sm:mb-0" 
          placeholder="Enter your email" 
        />
        <button 
          className="text-white px-6 py-2 bg-red-500 hover:border-2 hover:border-red-500 hover:text-black hover:bg-white transition-all duration-300 ease-in-out font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default EmailSubscription;
