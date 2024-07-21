import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoLogInOutline, IoMenu, IoClose } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GoHeart } from 'react-icons/go';
import logo from './../assets/logo1.png';
import all_products from '../assets/all_product';
import { CircularProgress } from '@mui/material';
import './Navbar.css'
const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const inputRef = useRef(null);
  const suggestionBoxRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuFullScreen, setIsMobileMenuFullScreen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setFilteredSuggestions([]);
      }

      // Close mobile menu if clicked outside
      if (!event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
        setIsMobileMenuFullScreen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoading(true);

    debounce(() => {
      if (value.length > 0) {
        const filtered = all_products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
      setLoading(false);
    }, 500)();
  };

  const handleMobileMenuClick = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setTimeout(() => {
        setIsMobileMenuFullScreen(true);
      }, 300);
    } else {
      setIsMobileMenuFullScreen(false);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
    }
  };

  return (
    <nav className="p-4 sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="mx-auto">
        {/* First Row */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <p className="font-semibold tracking-widest">SHOPPING</p>
          </div>

          {/* Search Bar */}
          <div className="w-96 mx-8 relative hidden md:block">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="w-full p-2 focus:outline-none border border-black font-thin"
              value={searchTerm}
              onChange={handleSearch}
            />
            {loading && (
              <div className="absolute top-2 right-2">
                <CircularProgress size={20} />
              </div>
            )}
            {filteredSuggestions.length > 0 && (
              <ul
                ref={suggestionBoxRef}
                className="absolute z-10 bg-white border border-gray-200 w-full mt-1 max-h-60 overflow-y-auto"
              >
                {filteredSuggestions.map((product) => (
                  <li key={product.id} className="p-2 text-[13px] hover:bg-gray-100">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-8 w-8 object-cover"
                      />
                      <span>{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Icons and Text */}
          <div className="flex items-center gap-8 space-x-4 relative hidden md:flex">
            <Link to="/signin" className="gap-2 items-center">
              <IoLogInOutline className="text-2xl" />
              <span className="text-[14px] hover:underline">
                Sign In
              </span>
            </Link>
            <Link to="/saved" className="gap-2 items-center">
              <GoHeart className="text-2xl" />
              <span className="text-[14px] hover:underline">
                Saved
              </span>
            </Link>
            <Link to="/cart" className=" relative items-center">
              <HiOutlineShoppingBag className="text-2xl font-thin" />
              <span className="text-[14px] hover:underline">
                Cart
              </span>
              {totalQuantity > 0 && (
                <span className="absolute top-[-11px] left-[12px] bg-lime-300 flex items-center justify-center text-black text-xs w-5 h-5 text-[10px] rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={handleMobileMenuClick}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Second Row for Desktop */}
        <div className="flex justify-center items-center hidden md:flex">
          <ul className="flex space-x-8">
            <NavItem to="/" text="SHOP" />
            <NavItem to="/men" text="MEN" />
            <NavItem to="/women" text="WOMEN" />
            <NavItem to="/kids" text="KIDS" />
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`mobile-menu-container ${isMobileMenuFullScreen ? 'full-screen' : ''}`}>
            <div className="flex flex-col items-center space-y-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="w-full p-2 focus:outline-none border border-black font-thin"
                value={searchTerm}
                onChange={handleSearch}
              />
              {loading && (
                <div className="absolute top-2 right-2">
                  <CircularProgress size={20} />
                </div>
              )}
              {filteredSuggestions.length > 0 && (
                <ul
                  ref={suggestionBoxRef}
                  className="bg-white border border-gray-200 w-full max-h-60 overflow-y-auto"
                >
                  {filteredSuggestions.map((product) => (
                    <li key={product.id} className="p-2 text-[13px] hover:bg-gray-100">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center gap-2"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-8 w-8 object-cover"
                        />
                        <span>{product.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/cart" className="flex relative items-center">
                <HiOutlineShoppingBag className="text-2xl font-thin" />
                <span className="text-[14px] hover:underline font-thin">
                  Cart
                </span>
                {totalQuantity > 0 && (
                  <span className="absolute top-[-11px] left-[12px] bg-lime-300 flex items-center justify-center text-black text-xs w-5 h-5 text-[10px] rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <Link to="/signin" className="flex gap-2 items-center">
                <IoLogInOutline className="text-2xl" />
                <span className="text-[14px] hover:underline font-thin">
                  Sign In
                </span>
              </Link>
              <Link to="/saved" className="flex gap-2 items-center">
                <GoHeart className="text-2xl" />
                <span className="text-[14px] hover:underline font-thin">
                  Saved
                </span>
              </Link>
              <hr className="border-t border-gray-200 w-full my-2" />
              <ul className="flex flex-col space-y-4">
                <NavItem to="/" text="SHOP" />
                <NavItem to="/men" text="MEN" />
                <NavItem to="/women" text="WOMEN" />
                <NavItem to="/kids" text="KIDS" />
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Component for individual navigation items
const NavItem = ({ to, text }) => (
  <li>
    <Link to={to} className="hover:underline font-medium">
      {text}
    </Link>
  </li>
);

export default Navbar;
