import React from 'react';
import ServicesImage from '../../Media/Services.png';

function Service() {
  const services = [
    { name: "Mean And Mern", gradient: "from-orange-600 to-red-600" },
    { name: "Full Stack Development", gradient: "from-blue-400 to-blue-800" },
    { name: "Figma Development", gradient: "from-white to-purple-600" },
    { name: "Web Development", gradient: "from-green-900 to-green-400" },
    { name: "Mean And Mern", gradient: "from-orange-600 to-yellow-400" },
  ];

  const positions = [
    { top: "85%", left: "50%" }, 
    { top: "60%", left: "25%" }, 
    { top: "60%", left: "75%" },
    { top: "20%", left: "25%" }, 
    { top: "20%", left: "75%" },  
  ];

  return (
    <div id='services' className="relative">
      <div
        className="h-[130vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${ServicesImage})` }}
      >
        <h2 className="absolute top-10 text-3xl md:text-5xl font-bold font-serif text-green-500 text-center w-full">
          Services
        </h2>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full">
            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105
                  w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52
                `}
                style={{
                  top: positions[index].top,
                  left: positions[index].left,
                  transform: 'translate(-50%, -50%)', 
                }}
              >
                <span className="text-white text-center font-semibold text-sm sm:text-base md:text-lg">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
