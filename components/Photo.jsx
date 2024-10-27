// Photo.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center xl:justify-start w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="relative rounded-full overflow-hidden"
        style={{
          width: '80%',
          maxWidth: '350px',
          height: 'auto',
          minWidth: '250px',
          marginTop: '10px',
          aspectRatio: '1',
        }}
      >
        <Image
          src="/assets/IMG_8826.png"
          priority
          quality={100}
          width={500}   // Fixed dimensions for the Next.js Image component
          height={500}  // Maintain aspect ratio for a square shape
          alt="Profile picture"
          className="rounded-full object-cover" // Use `object-cover` in the class for cropping
          style={{ width: '100%', height: '100%' }} // Ensure image fills container
        />
      </motion.div>
    </div>
  );
};

export default Photo;
