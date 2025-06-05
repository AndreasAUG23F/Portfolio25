import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="bg-[#101B28] text-white py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-3xl text-center space-y-12">
        <h4 className="text-4xl font-extrabold text-[#00FF8C] inline-block border-b-4 border-[#00FF8C] pb-2">
          About Me
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey, I’m Andreas Abrahamsen—a front-end developer who loves crafting
          sleek, lightning-fast web apps with React and Tailwind CSS.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {[
            { icon: "🚀", text: "Fast, responsive interfaces" },
            { icon: "🔒", text: "Accessible by design" },
            { icon: "🎨", text: "Clean, modern aesthetics" },
            { icon: "💡", text: "Always learning new tech" },
          ].map((item) => (
            <li key={item.text} className="flex items-start">
              <span className="text-2xl mr-3">{item.icon}</span>
              <span className="text-gray-300">{item.text}</span>
            </li>
          ))}
        </ul>
        <div>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00FF8C] text-[#101B28] font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition"
          >
            View my GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}
