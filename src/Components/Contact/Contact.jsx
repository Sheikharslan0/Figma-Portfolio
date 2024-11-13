import React from 'react';
import ContactImage from '../../Media/Contact.png';

const Contact = () => {
  return (
    <div id='contact' className="relative">
      <div
        className="h-screen w-full inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <div className="p-4 md:p-8 lg:p-12 rounded-lg w-full max-w-4xl mx-4 md:mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center font-serif text-green-600 mb-6">
            Contact
          </h2>
          <p className="text-center text-xl text-gray-700 mb-8">
            For more information, please reach out and contact us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Timeline"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Service Interest"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Message"
                className="p-3 placeholder-gray-600 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
              />
              <button className="border w-full md:w-44 border-green-500 text-green-500 font-bold py-3 px-5 rounded-md transition duration-300 hover:bg-green-500 hover:text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
