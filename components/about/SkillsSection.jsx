// components/about/SkillsSection.jsx

import { motion, TabsContent, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, ScrollArea } from "./CommonComponents";
import { skills } from "@/data/aboutData";

const SkillCard = ({ category, skillList }) => (
  <div className="bg-[#232329] rounded-xl p-4 shadow-md">
    <h4 className="text-xl font-semibold text-accent mb-4">{category}</h4>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skillList.map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[100px] bg-[#2a2a35] rounded-lg flex justify-center items-center group">
                <div className="text-4xl group-hover:text-accent transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        {/* <div className="text-center xl:text-left"> */}
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {skills.description}
          </p>
        {/* </div> */}
        <ScrollArea className="max-h-[500px] overflow-y-scroll p-4 bg-[#232329] rounded-xl space-y-6">
          {skills.categories.map((categoryData, index) => (
            <SkillCard
              key={index}
              category={categoryData.category}
              skillList={categoryData.skills}
            />
          ))}
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default Skills;

