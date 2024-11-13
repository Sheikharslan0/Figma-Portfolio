import React from 'react';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-black p-6'>
      <h1 className='font-mono text-5xl text-green-500 text-center mb-4'>Logo</h1>
      <ul className='flex justify-center gap-8 text-white mb-4'>
        <li className='hover:text-green-400 cursor-pointer transition'>Home</li>
        <li className='hover:text-green-400 cursor-pointer transition'>Services</li>
        <li className='hover:text-green-400 cursor-pointer transition'>About Me</li>
        <li className='hover:text-green-400 cursor-pointer transition'>Projects</li>
        <li className='hover:text-green-400 cursor-pointer transition'>Contact Us</li>
      </ul>
      
      <div className="flex justify-center space-x-6 mb-4">
        <CiInstagram className="text-4xl cursor-pointer  text-white hover:text-green-400 transition" />
        <CiFacebook className="text-4xl  cursor-pointer text-white hover:text-green-600 transition" />
        <FaWhatsapp className="text-4xl  cursor-pointer text-white hover:text-green-500 transition" />
        <CiLinkedin className="text-4xl  cursor-pointer text-white hover:text-green-700 transition" />
      </div>
      
      <div className='flex  justify-evenly border-b-2 border-gray-700 pt-4'>
        <p className='text-white'>Sheikharslan@gmail.com</p>
        <p className='text-white'>+9230 6705 4671</p>
      </div>
      
      <p className='text-green-500 text-sm text-center mt-4'>© 2023 Sheikharslan. All rights reserved.</p>
    </div>
  );
}

export default Footer;
