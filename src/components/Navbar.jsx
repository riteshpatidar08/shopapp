import React from 'react';
import logo from './../assets/logo1.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoLogInOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { GoHeart } from 'react-icons/go';
import NavItems from './NavItems';
import { useRef, useEffect } from 'react';

function Navbar() {
  const inputRef = useRef(null);
 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <nav className="p-4 border-b border-gray-200">
      <div>
        {/* firstrow */}
        <section className="flex items-center justify-between p-2">
          <div className="flex space-x-2 items-center">
            <img className="h-8" src={logo}></img>
            <h1 className="text-xl tracking-wide font-semibold">Shopping</h1>
          </div>
          <div className="w-96">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="w-full p-2 font-normal bg-white border border-gray-400 rounded-none"
            />
          </div>
          <div className="flex item-center gap-14">
            <Link to="">
              <IoLogInOutline className="text-2xl" />
              <span className="text-xs font-normal hover:underline">
                Sign In
              </span>
            </Link>

            <Link to="">
              <GoHeart className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Saved</span>
            </Link>

            <Link to="">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Cart</span>
            </Link>
          </div>
        </section>

        {/* second row */}
        <section>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-10">
              <NavItems to="/" text="HOME" />
              <NavItems to="/men" text="MEN" />
              <NavItems to="/women" text="WOMEN" />
              <NavItems to="/" text="KIDS" />
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
