import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineWallet } from 'react-icons/hi2';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-20 h-[70px] bg-black text-white relative shadow-md">
      <div className="logo text-3xl font-bold flex items-center text-green-600">
       My Portfolio
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} className="transition duration-300 transform rotate-90" /> : <FaBars size={24} className="transition duration-300 transform rotate-0" />}
      </div>

      {/* Nav Links */}
      <ul
        className={`md:flex md:gap-8 absolute md:static bg-black w-full md:w-auto transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'top-[70px] opacity-100' : 'top-[-500px] opacity-0 md:opacity-100'
        }`}
      >
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <a href='#about' className="hover:text-green-400 cursor-pointer">About Me</a>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <a href='#services'  className="hover:text-green-400 cursor-pointer">Services</a>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <a href='#project' className="hover:text-green-400 cursor-pointer">Portfolio</a>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <a href='#contact' className="hover:text-green-400 cursor-pointer">Contact</a>
         
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="md:hidden py-2 text-center cursor-pointer">
          <a  className="flex gap-1 bg-green-600 px-4 py-2 rounded-lg justify-center transition duration-300 transform hover:scale-105">
            <AiOutlineUser size={20} /> Contact Me       </a>
        </li>
      </ul>

      <div className="hidden md:flex">
        <a  className="flex gap-1 bg-green-600 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105">
          <AiOutlineUser size={20} /> Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
