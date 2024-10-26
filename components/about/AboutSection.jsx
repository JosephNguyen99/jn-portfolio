// components/about/AboutSection.jsx

// In AboutSection.jsx
// import { about } from 'data/aboutData';

import { motion, TabsContent } from "./CommonComponents";
import { about } from "@/data/aboutData";

const AboutMe = () => {
  return (
    <TabsContent value="about" className="w-full text-center xl:text-left">
      <div className="flex flex-col gap-[30px]">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {about.info.map((item, index) => {
            return (
              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </TabsContent>
  );
};

export default AboutMe;