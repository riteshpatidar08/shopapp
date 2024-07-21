import React from 'react';
import footerColumns from '../Data/FooterData';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" text-black">
      <div className="max-w-7xl mx-auto mt-14 px-8 py-4">
        <div className="flex flex-wrap justify-around">
          <div className="text-center m-8">
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {footerColumns.map((item, index) => (
            <div key={index} className="m-8">
              <h1 className="text-lg font-bold mb-4">{item.title}</h1>
              <ul>
                {item.links.map((column, idx) => (
                  <li key={idx} className="mb-2">
                    <Link className="hover:underline" to={column.url}>
                      {column.text}
                    </Link>
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
