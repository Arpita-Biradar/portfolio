import React from "react";
import heroImg from "../assets/portfolio.png"; // make sure your image path is correct

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between 
                 bg-gradient-to-b from-blue-50 to-white px-6 md:px-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h3 className="text-gray-800 text-lg font-medium">
          Hello<span className="text-blue-500">.</span>
        </h3>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          I’m <span className="text-blue-600">Arpita</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Software Developer
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Got a project?
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
        <div className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full 
                        bg-gradient-to-r from-blue-300/30 to-blue-600/30 absolute">
        </div>
        <img
          src={heroImg}
          alt="Portfolio"
          className="relative w-72 md:w-[380px] z-10 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
