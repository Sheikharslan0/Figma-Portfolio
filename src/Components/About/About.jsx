import React from "react";
import ServicesImage from "../../Media/Services.png";
import ChildImage from "../../Media/Child.png";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaFigma, FaWhatsapp } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

  const About = () => {
  const data = [
    {
      title: "80%",
      description: "Figma",
      icon: <IoLogoNodejs />,
    },
    {
      title: "85%",
      description: "JavaScript",
      icon: <FaFigma />,
    },
    {
      title: "80%",
      description: "Node.js",
      icon: <IoLogoNodejs />,
    },
    {
      title: "85%",
      description: "React",
      icon: <FaFigma />,
    },
  ];

  return (
    <div
    id="about"
      className="h-[150vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ServicesImage})` }}
    >
      <h2 className="text-5xl text-center font-serif font-bold text-green-500 pt-10">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row justify-center mt-10 ">
        <div className="flex h-[70vh] lg:h-[100vh]">
          <img
            src={ChildImage}
            alt="Sheikh Arslan"
            className="rounded-full shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-[60%] h-[90vh] text-black bg-white bg-opacity-35 p-5 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold">Sheikh Arslan</h1>
          <h2 className="text-2xl text-gray-700">arslan@gmail.com</h2>
          <p className="mt-4 text-lg leading-relaxed">
            The term UI/UX stands for user interface/user experience design and
            refers to the practice of designing digital products with a
            user-first approach. In other words, the point of UI/UX design is to
            create a product that will be both visually appealing and highly
            pleasant to interact with. A web developer is a professional who
            builds websites using programming languages. They typically use
            multiple coding languages to create the website's architecture,
            which contains design elements like text, photos, and links. A
            full-stack web developer is an expert in both the front-end and
            back-end, proficient in various languages and frameworks, as well as
            in server, network, and hosting environments.
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Go to Github
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              Download CV
            </button>
          </div>
          <div className="flex space-x-4 mb-4 mt-4">
            <CiInstagram className="text-3xl cursor-pointer  hover:text-green-400 transition" />
            <CiFacebook className="text-3xl  cursor-pointer hover:text-green-600 transition" />
            <FaWhatsapp className="text-3xl  cursor-pointer hover:text-green-500 transition" />
            <CiLinkedin className="text-3xl  cursor-pointer hover:text-green-700 transition" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-5 space-x-0 lg:space-x-10">
        {data.map((service, index) => (
          <div key={index} className="flex flex-col items-center mb-8 lg:mb-0">
            <div
              className="p-1 rounded-full"
              style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              }}
            >
              <div className="p-4 text-white bg-black rounded-full">
                <span className="text-4xl">{service.icon}</span>
              </div>
            </div>
            <h1 className="text-xl text-white">{service.title}</h1>
            <h2 className="text-lg text-gray-300 font-bold">{service.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
