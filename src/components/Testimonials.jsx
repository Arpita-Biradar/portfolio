// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Prof. Anita Sharma",
    role: "Computer Science Professor",
    message:
      "Arpita is an exceptional student with great problem-solving skills and dedication to learning. She consistently delivers high-quality work.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Kumar",
    role: "Teammate, Hackathon 2024",
    message:
      "Working with Arpita was a wonderful experience. Her leadership and technical expertise were crucial to our success.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    role: "Project Mentor",
    message:
      "Arpita's curiosity and creativity make her stand out. She has a strong grasp of MERN stack development.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="py-16 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-300"
              />
              <p className="text-gray-600 italic mb-4">
                “{testimonial.message}”
              </p>
              <h4 className="font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
