import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "React", level: 80, icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "MongoDB", level: 70, icon: <FaDatabase className="text-green-700 text-4xl" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="314"
                    strokeDashoffset={314 - (314 * skill.level) / 100}
                    className="text-blue-500"
                    initial={{ strokeDashoffset: 314 }}
                    whileInView={{
                      strokeDashoffset: 314 - (314 * skill.level) / 100,
                    }}
                    transition={{ duration: 1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {skill.icon}
                  <span className="text-sm font-semibold">{skill.level}%</span>
                </div>
              </div>
              <p className="mt-3 text-gray-700 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
