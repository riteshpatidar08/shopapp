import React from 'react';
import footerColumns from '../Data/FooterData';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto mt-14 px-8 py-4">
        <div className="flex justify-around flex-wrap">
          <div className="text-center m-8">
            <div className="flex gap-4 mb-8">
              <a href="">
                <FaInstagram size={24} />
              </a>
              <a href="">
                <FaFacebook size={24} />
              </a>
              <a href="">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {footerColumns.map((item) => (
            <div>
              <h1 className='text-lg font-bold mb-4'>{item.title}</h1>
              <ul>
                {item.links.map((column) => (
                  <li className='mb-2'>
                    <Link className='hover:underline' to={column.url}>{column.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
