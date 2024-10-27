// components/about/ExperienceSection.jsx

import React from "react";
import { motion, TabsContent, ScrollArea } from "./CommonComponents";
import { experiences } from "@/data/aboutData";


// ExperienceCard component to display each job card
const ExperienceCard = ({ position, company, date, details = [] }) => (
  <motion.div
    className="flex flex-col p-4 md:p-5 mb-6 rounded-lg bg-[#2a2a35] shadow-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <h3 className="text-lg md:text-xl font-semibold text-accent mb-1">{position}</h3>
    <div className="flex justify-between items-center">
      <p className="text-white/80 font-medium text-sm md:text-base">{company}</p>
      <p className="text-xs md:text-sm text-accent">{date}</p>
    </div>
    <ul className="list-disc list-inside text-white/70 text-xs md:text-sm mt-3 md:mt-4 ml-4 space-y-2 md:space-y-3">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-6 md:gap-8 text-center xl:text-left">
        <h3 className="text-3xl md:text-4xl font-bold">{experiences.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
          {experiences.description}
        </p>

        {/* Scrollable area for experience cards */}
        <ScrollArea className="max-h-[500px] overflow-y-scroll p-4 md:p-6 bg-[#232329] rounded-xl border border-white/10">
          {experiences.cards.map((card, index) => (
            <ExperienceCard
              key={index}
              position={card.position}
              company={card.company}
              date={card.date}
              details={card.details}
            />
          ))}
        </ScrollArea>
      </div>
    </TabsContent>
  );
};


export default Experience;

  