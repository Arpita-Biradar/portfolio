import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/portfolio.png"; // replace with your image path

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-r from-white via-blue-50 to-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={myImage}
            alt="Arpita"
            className="rounded-2xl shadow-xl w-80 h-80 object-cover border-4 border-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-blue-500 rounded"></span>
          </h2>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Hi, I’m <span className="text-blue-600 font-semibold">Arpita</span>, 
            an aspiring <strong>Full Stack Developer</strong> passionate about 
            crafting clean, modern, and scalable web applications.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I specialize in the <span className="font-semibold text-blue-600">MERN Stack</span> 
            and thrive on turning ideas into digital solutions. 
            Currently pursuing <strong>Computer Science Engineering</strong>, 
            I’m constantly learning and aiming to contribute to 
            innovative projects at top tech companies.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"].map(
              (skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Let’s Connect
            </a>
            <a
              href="/resume.pdf" // replace with your resume link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl shadow-md hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
// Note: Ensure to replace the image path and resume link with your actual paths.