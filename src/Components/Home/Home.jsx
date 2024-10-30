import React from 'react';
import HomeImage from '../../Media/Home.png';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-60 flex  p-10">
        <div className="text-white space-y-4 max-w-lg">
          <h2 className="text-3xl md:text-4xl opacity-95 ">Hi, I am</h2>
          <p className="text-4xl md:text-[65px]">Sheikh Arslan</p>
          <p className="font-bold text-green-600 md:text-[70px]">Web Developer</p>

          <div className="flex space-x-4 mb-4">
            <CiInstagram className="text-3xl hover:text-green-400 transition" />
            <CiFacebook className="text-3xl hover:text-green-600 transition" />
            <FaWhatsapp className="text-3xl hover:text-green-500 transition" />
            <CiLinkedin className="text-3xl hover:text-green-700 transition" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Hire Me
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-5 rounded transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
