import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind CSS.",
    img: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Weather UI Design",
    description: "A clean weather app UI design with real-time data.",
    img: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
    tech: ["React", "API", "Tailwind CSS"],
  },
  {
    title: "Doctor Appointment System",
    description:
      "Full-stack web app for booking doctor appointments with role-based access.",
    img: "https://via.placeholder.com/400x250",
    github: "#",
    live: "#",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-white py-16 px-6 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-gray-600">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
