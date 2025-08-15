import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/portfolio.png"; // replace with your image path

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50"
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
            className="rounded-2xl shadow-lg w-72 h-72 object-cover border-4 border-white hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Hi, I’m <span className="text-blue-600 font-semibold">Arpita</span>, 
            an aspiring <strong>Full Stack Developer</strong> with a passion 
            for crafting clean, modern, and scalable web applications.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I specialize in the <span className="font-semibold text-blue-600">MERN Stack</span> 
            and thrive on transforming ideas into digital realities. 
            Currently pursuing my <strong>Computer Science Engineering</strong> degree, 
            I’m constantly learning and aiming to contribute to innovative projects at 
            top tech companies.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
