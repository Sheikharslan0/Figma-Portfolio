import React from "react";
import ProjectsImage from "../../Media/Projects.png";
import Project1Image from "../../Media/Project1.png";
import Project2Image from "../../Media/Project2.png";
import Project3Image from "../../Media/Project3.png";
import Project4Image from "../../Media/Project4.png";

const Project = () => {
  return (
    <div
    id="project"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-10 px-5 md:px-20"
      style={{ backgroundImage: `url(${ProjectsImage})` }}
    >
      <h1 className="text-center text-green-400 font-serif text-5xl md:text-6xl font-bold mb-8">
        Projects
      </h1>
      
      <div>
        <ul className="flex flex-wrap items-center justify-evenly gap-4 mb-10">
          <li className="bg-green-500 text-white cursor-pointer px-4 py-2 rounded-full transition-all hover:bg-green-600">
            All
          </li>
          <li className="bg-white cursor-pointer px-4 py-2 rounded-full shadow-md transition-all hover:bg-green-500 hover:text-white">
            Website
          </li>
          <li className="bg-white cursor-pointer px-4 py-2 rounded-full shadow-md transition-all hover:bg-green-500 hover:text-white">
            Mobile App
          </li>
          <li className="bg-white cursor-pointer px-4 py-2 rounded-full shadow-md transition-all hover:bg-green-500 hover:text-white">
            Designs
          </li>
          <li className="bg-white cursor-pointer px-4 py-2 rounded-full shadow-md transition-all hover:bg-green-500 hover:text-white">
            Brands
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-6 relative">
        {[Project1Image, Project2Image, Project3Image, Project4Image].map((image, index) => (
          <div
            key={index}
            className={`relative w-full sm:w-1/2 md:w-[45%] lg:w-[40%] p-4 transition-transform ${
              index % 2 === 0 ? "mt-6" : "mb-6"
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl transition-shadow">
              <img
                src={image}
                alt={`project${index + 1}`}
                className="w-full h-[200px] md:h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-lg">
                Visit Site
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 transition-all duration-300 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;