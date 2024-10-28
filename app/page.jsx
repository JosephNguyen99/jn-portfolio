// Home.jsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// app components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between xl:pt-8 xl:pb-24">
          {/* Text Container */}
          <div className="text-center xl:text-left order-2 xl:order-none flex-1 px-4">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Joseph Nguyen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 mx-auto xl:mx-0">
              I excel at crafting impactful relationships through business needs to produce efficient results with mutual benefit.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/JosephNguyen_Resume_SWE.pdf"
                download="JosephNguyen_Resume.pdf"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
          {/* Photo Container */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex-1">
            <Photo />
          </div>
        </div>
        {/* Stats Container */}
        <Stats />
      </div>
    </section>
  );
};

export default Home;
