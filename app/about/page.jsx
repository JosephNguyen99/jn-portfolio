// /app/about/page.jsx

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// import { TooltipProvider } from "@/components/ui/tooltip";
// import { ScrollArea } from "@/components/ui/scroll-area";

// about me components
import AboutMe from "@/components/about/AboutSection";
import Skills from "@/components/about/SkillsSection";
import Experience from "@/components/about/ExperienceSection";
import Education from "@/components/about/EducationSection";

const AboutPage = () => {
  return (
    // <TooltipProvider>
    //   <ScrollArea className="container mx-auto py-10 space-y-10">
    //     <AboutMe />
    //     <Skills />
    //     <Experience />
    //     <Education />
    //   </ScrollArea>
    // </TooltipProvider>
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"  
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <Experience />
            {/* education */}
            <Education />
            {/* skills */}
            <Skills />
            {/* education */}
            <AboutMe />
          </div>

        </Tabs>

      </div>
      
    </motion.div>
  )
};

export default AboutPage;



// "use client";

// import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// // about data
// const about = {
//   title: "About me",
//   description:
//     "A lil gauge about my life",
//   info: [
//     {
//       fieldName: "Name",
//       fieldValue: "Joseph Nguyen"
//     },
//     {
//       fieldName: "Phone",
//       fieldValue: "(316)-765-2035"
//     },
//     {
//       fieldName: "Email",
//       fieldValue: "qt.joseph.nguyen@gmail.com"
//     },
//     {
//       fieldName: "Experience",
//       fieldValue: "5+ Years"
//     },
//     {
//       fieldName: "LinkedIn",
//       fieldValue: "Joseph Nguyen"
//     },
//     {
//       fieldName: "Nationality",
//       fieldValue: "Asian-American"
//     },
//   ]
// };

// // experience data
// const experience = {
//   icon: '/assets/resume/badge.svg',
//   title: 'My experience',
//   description:
//     `I’m currently a Software Engineer II at Textron Aviation, where I lead a project to design and develop a Python automation tool that supports our 
//     systems engineers. This tool has replaced outdated manual processes, cutting script-building time significantly and enabling our team to focus more on high-value tasks. 
//     In this role, I’ve delivered five successful build iterations through continuous integration, directly enhancing our script generation process and 
//     saving over 300 hours of manual work. This project has helped me sharpen my problem-solving skills and ability to innovate with modern technologies 
//     to produce effective results with modularity and scalability in mind.`,
//   items: [
//     {
//       company: "Textron Aviation",
//       position: "Software Engineer II",
//       duration: "March 2022 - Present",
//     },
//     {
//       company: "Koch Industries",
//       position: "Application Systems Analyst - Consultant",
//       duration: "July 2021 - March 2022",
//     },
//     {
//       company: "Textron Aviation",
//       position: "IT Analyst",
//       duration: "December 2020 - July 2021",
//     },
//     {
//       company: "NetApp",
//       position: "Drive QA Engineer",
//       duration: "February 2019 - August 2020",
//     },
//   ],
// };

// // education data
// const education = {
//   icon: '/assets/resume/cap.svg',
//   title: 'My education',
//   description:
//     "I received my Bachelor of Science in Computer Engineering and Minor in Computer Science from Wichita State University. Throughout my undergrad, I've had relevant courseworks such as C++ Programming, Data Structures & Algorithms, Object-Oriented Programming, Hardware-based Security Engineering, Microprocessor-based system design, and Linear Algebra...",
//   items: [
//     {
//       institution: "Wichita State University",
//       degree: "B.S. Computer Engineer",
//       duration: "August 2017 - December 2021",
//     },
//     // {
//     //   company: "Koch Industries",
//     //   postion: "Application Systems Analyst - Consultant",
//     //   duration: "July 2021 - March 2022",
//     // },
//     // {
//     //   company: "Textron Aviation",
//     //   postion: "IT Analyst",
//     //   duration: "December 2020 - July 2021",
//     // },
//     // {
//     //   company: "NetApp",
//     //   postion: "Drive QA Engineer",
//     //   duration: "February 2019 - August 2020",
//     // },
//   ],
// };

// // skills data
// const skills = {
//   title: "My skills",
//   description:
//     "I have honed all of these following skills throughout my experience as an ungraduate student to my current professional career. I plan to deepen my expertise with modern technologies such as cloud, automation, AI, and web development",
//   skillList: [
//     {
//       icon: <FaHtml5 />,
//       name: "html 5",
//     },
//     {
//       icon: <FaCss3/>,
//       name: "css 3",
//     },
//     {
//       icon: <FaJs />,
//       name: "javascript",
//     },
//     {
//       icon: <FaFigma />,
//       name: "figma",
//     },
//     {
//       icon: <FaReact/>,
//       name: "react",
//     },
//     {
//       icon: <FaNodeJs/>,
//       name: "nodejs",
//     },
//     {
//       icon: <SiNextdotjs />,
//       name: "nextjs",
//     },
//     {
//       icon: <SiTailwindcss />,
//       name: "tailwind.css",
//     },
//   ]
// };

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// // import { ScrollArea } from "@radix-ui/react-scroll-area";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { motion } from "framer-motion";

// const Resume = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0}}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
//       }}
//       className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"  
//     >
//       <div className="container mx-auto">
//         <Tabs
//           defaultValue="experience"
//           className="flex flex-col xl:flex-row gap-[60px]"
//         >
//           <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
//             <TabsTrigger value="experience">Experience</TabsTrigger>
//             <TabsTrigger value="education">Education</TabsTrigger>
//             <TabsTrigger value="skills">Skills</TabsTrigger>
//             <TabsTrigger value="about">About me</TabsTrigger>
//           </TabsList>

//           {/* content */}
//           <div className="min-h-[70vh] w-full">
//             {/* experience */}
//             <TabsContent value="experience" className="w-full">
//               <div className="flex flex-col gap-[30px] text-center xl:text-left">
//                 <h3 className="text-4xl font-bold">{experience.title}</h3>
//                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
//                   {experience.description}
//                 </p>
//                 <ScrollArea className="h-[400px]">
//                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
//                     {experience.items.map((item,index) => {
//                       return (
//                         <li 
//                           key={index} 
//                           className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
//                           justify-center items-center lg:items-start gap-1"
//                         >
//                           <span className="text-accent">{item.duration}</span>
//                           <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
//                             {item.position}
//                           </h3>
//                           <div className="flex items-center gap-3">
//                             {/* dot */}
//                             <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
//                             <p className="text-white/60">{item.company}</p>
//                           </div>
//                         </li>
//                       )
//                     })}
//                   </ul>

//                 </ScrollArea>
//               </div>
//             </TabsContent>
//             {/* education */}
//             <TabsContent value="education" className="w-full">
//             <div className="flex flex-col gap-[30px] text-center xl:text-left">
//                 <h3 className="text-4xl font-bold">{education.title}</h3>
//                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
//                   {education.description}
//                 </p>
//                 <ScrollArea className="h-[400px]">
//                   <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
//                     {education.items.map((item,index) => {
//                       return (
//                         <li 
//                           key={index} 
//                           className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
//                           justify-center items-center lg:items-start gap-1"
//                         >
//                           <span className="text-accent">{item.duration}</span>
//                           <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
//                             {item.degree}
//                           </h3>
//                           <div className="flex items-center gap-3">
//                             {/* dot */}
//                             <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
//                             <p className="text-white/60">{item.institution}</p>
//                           </div>
//                         </li>
//                       )
//                     })}
//                   </ul>

//                 </ScrollArea>
//               </div>
//             </TabsContent>
//             {/* skills */}
//             <TabsContent value="skills" className="w-full h-full">
//               <div className="flex flex-col gap-[30px]">
//                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
//                   <h3 className="text-4xl font-bold">{skills.title}</h3>
//                   <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
//                 </div>
//                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
//                   {skills.skillList.map((skill, index) => {
//                     return <li key={index}>
//                       <TooltipProvider delayDuration={100}>
//                         <Tooltip>
//                           <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
//                             <div className="text-6xl group-hover:text-accent transition-all  duration-300">{skill.icon}</div>
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p className="capitalize">{skill.name}</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       </TooltipProvider>
//                     </li>;
//                   })}
//                 </ul>

//               </div>
//             </TabsContent>
//             {/* education */}
//             <TabsContent value="about" className="w-full text-center xl:text-left">
//               <div className="flex flex-col gap-[30px]">
//                 <h3 className="text-4xl font-bold">{about.title}</h3>
//                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
//                 <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
//                   {about.info.map((item, index) => {
//                     return (
//                       <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
//                         <span className="text-white/60">{item.fieldName}</span>
//                         <span className="text-xl">{item.fieldValue}</span>
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             </TabsContent>
//           </div>

//         </Tabs>

//       </div>
      
//     </motion.div>
//   )
// };

// export default Resume;