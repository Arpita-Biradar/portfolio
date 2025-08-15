import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/portfolio.png"; // make sure the image path is correct

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 md:px-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I’m <span className="text-blue-600">Arpita</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Aspiring Full Stack Developer",
            1500,
            "MERN Stack Enthusiast",
            1500,
            "Problem Solver",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-xl md:text-2xl font-medium text-gray-700"
        />

        <p className="text-gray-600 max-w-lg">
          I’m passionate about building modern, user-friendly web applications
          and bringing creative ideas to life through code.
        </p>

        <div className="space-x-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImg}
          alt="Portfolio"
          className="w-72 md:w-[400px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
