import React from 'react';
import { Link } from 'react-router-dom';
function NavItems({ to, text }) {
  return (
    <li>
      <Link
        className="hover:underline font-medium transition-all delay-300 ease-in-out"
        to={to}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavItems;
