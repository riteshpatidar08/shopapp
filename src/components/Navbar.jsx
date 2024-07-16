import React , {useState} from 'react';
import logo from './../assets/logo1.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoLogInOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { GoHeart } from 'react-icons/go';
import NavItems from './NavItems';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import all_products from '../assets/all_product';
function Navbar() {
  const inputRef = useRef(null);
  const { items, totalQuantity } = useSelector((state) => state.cart);
 const suggestionRef = useRef(null)
 const [searchTerm  , setSearchTerm ] = useState('') ;
const [suggestionsItems , setSuggestionsItems] = useState([])

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect(()=>{
  //   if(suggestionRef.current && !suggestionRef.conta)
  // })

console.log(suggestionsItems)

const handleChange = (event) => {
   const value = event.target.value
setSearchTerm(value)

 if(value.length > 0){
  const filteredProduct = all_products.filter((product)=>{
    return product.name.toLowerCase().includes(value.toLowerCase())
  })
 setSuggestionsItems(filteredProduct)
 }
}
  return (
    <nav className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
      <div>
        {/* firstrow */}
        <section className="flex items-center justify-between p-2">
          <div className="flex space-x-2 items-center">
            <img className="h-8" src={logo}></img>
            <h1 className="text-xl tracking-wide font-semibold">Shopping</h1>
          </div>
          <div className="w-96 mt-2 relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="w-full p-2 font-normal bg-white focu border border-gray-400 rounded-none"
            />
            {
              suggestionsItems.length > 0 ? (
                <ul ref={suggestionRef} className='absolute z-10  bg-white max-h-60 overflow-y-auto border mt-2 border-gray-200 w-full'>
                 {suggestionsItems.map((item)=>(
                  <li className='my-2 hover:bg-gray-100 p-2'>
                    <Link className="flex  gap-4 items-center">
                    <img className='w-6 h-6 object-cover' src={item.image}/>
                    <span className='text-[14px]'>{item.name}</span>
                    </Link>
                  </li>
                 ))}
                </ul>
              ) : ''
            }
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

            <Link className="relative" to="/cart">
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="text-xs font-normal hover:underline">Cart</span>
              {totalQuantity > 0 ? (
                <span className="w-5 absolute -top-3 left-2 h-5 bg-green-500 text-xs rounded-full text-white flex items-center justify-center">
                  {totalQuantity}
                </span>
              ) : (
                ''
              )}
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
              <NavItems to="/kids" text="KIDS" />
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
