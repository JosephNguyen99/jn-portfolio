"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.section 
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },

      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="bg-[#27272c] p-10 rounded-xl text-white">
          <h2 className="text-3xl font-semibold mb-4">Current Projects</h2>
          <p className="mb-6 text-white/80">
            I am actively working on a range of proprietary and personal projects, each focusing on solving unique challenges and building innovative solutions. These projects span across software development, cloud integration, and automation, leveraging my skills in Python, JavaScript, and various frameworks and tools.
          </p>
          <p className="text-white/80">
            Due to the proprietary (and personal information) nature of some of these projects, I am exploring ways to securely showcase and demo these on my website, ensuring that visitors can see the impact of my work while maintaining the confidentiality required for sensitive information. Stay tuned for future updates as I continue to develop and refine these projects!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
