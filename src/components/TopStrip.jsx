import React, { useState } from 'react';
import { useEffect } from 'react';
function TopStrip() {
  const [showSecondMsg, setShowSecondMsg] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowSecondMsg((prev) => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black font-thin  text-white text-center tracking-wider py-2">
      {showSecondMsg ? (
        <p>End of Season Sale!</p>
      ) : (
        <p>Get 30% off on your first order use code : 'FIRST30'</p>
      )}
    </div>
  );
}

export default TopStrip;
