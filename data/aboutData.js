import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
export const about = {
  title: "About me",
  description:
    "A lil gauge about my life",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Joseph Nguyen"
    },
    {
      fieldName: "Phone",
      fieldValue: "(316)-765-2035"
    },
    {
      fieldName: "Email",
      fieldValue: "qt.joseph.nguyen@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Joseph Nguyen"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Asian-American"
    },
  ]
};

// experience data
export const experiences = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    `I’m currently a Software Engineer II at Textron Aviation, where I lead a project to design and develop a Python automation tool that supports our 
    systems engineers. This tool has replaced outdated manual processes, cutting script-building time significantly and enabling our team to focus more on high-value tasks. 
    In this role, I’ve delivered five successful build iterations through continuous integration, directly enhancing our script generation process and 
    saving over 300 hours of manual work. This project has helped me sharpen my problem-solving skills and ability to innovate with modern technologies 
    to produce effective results with modularity and scalability in mind.`,
  items: [
    {
      company: "Textron Aviation",
      position: "Software Engineer II",
      duration: "March 2022 - Present",
    },
    {
      company: "Koch Industries",
      position: "Application Systems Analyst - Consultant",
      duration: "July 2021 - March 2022",
    },
    {
      company: "Textron Aviation",
      position: "IT Analyst",
      duration: "December 2020 - July 2021",
    },
    {
      company: "NetApp",
      position: "Drive QA Engineer",
      duration: "February 2019 - August 2020",
    },
  ],
};

// education data
export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    "I received my Bachelor of Science in Computer Engineering and Minor in Computer Science from Wichita State University. Throughout my undergrad, I've had relevant courseworks such as C++ Programming, Data Structures & Algorithms, Object-Oriented Programming, Hardware-based Security Engineering, Microprocessor-based system design, and Linear Algebra...",
  items: [
    {
      institution: "Wichita State University",
      degree: "B.S. Computer Engineer",
      duration: "August 2017 - December 2021",
    },
    // {
    //   company: "Koch Industries",
    //   postion: "Application Systems Analyst - Consultant",
    //   duration: "July 2021 - March 2022",
    // },
    // {
    //   company: "Textron Aviation",
    //   postion: "IT Analyst",
    //   duration: "December 2020 - July 2021",
    // },
    // {
    //   company: "NetApp",
    //   postion: "Drive QA Engineer",
    //   duration: "February 2019 - August 2020",
    // },
  ],
};

// skills data
export const skills = {
  title: "My skills",
  description:
    "I have honed all of these following skills throughout my experience as an ungraduate student to my current professional career. I plan to deepen my expertise with modern technologies such as cloud, automation, AI, and web development",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaReact/>,
      name: "react",
    },
    {
      icon: <FaNodeJs/>,
      name: "nodejs",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ]
};