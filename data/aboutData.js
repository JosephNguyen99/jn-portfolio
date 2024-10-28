import 
{ 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaPython,
  FaJava,
  FaCplusplus,
  FaAws,
  FaDocker,
  FaJira,
  FaSlack,
  FaGithub,
  FaDatabase,
  FaFlask,
  FaMicrosoft,

} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMysql, SiPostgresql, SiMongodb, SiJenkins, SiKubernetes, SiCplusplus, SiMicrosoftsqlserver, SiFlask, SiAzuredevops, SiMicrosoftazure, SiIbm, SiVisualstudio, } from "react-icons/si";

import { IoHardwareChip } from "react-icons/io5";
import { ImEmbed2 } from "react-icons/im";
import { DiDjango } from "react-icons/di";

// about data
export const about = {
  title: "About me",
  description:
    `
    I’m a software engineer with a strong passion for web development, AI/ML, automation, data analytics, and cloud technologies. Currently, I’m advancing innovative engineering solutions at Textron Aviation, where I design and develop automation tools that save hundreds of hours and optimize workflows. I thrive on learning new technologies and applying them to real-world problems, and I’m continuously exploring the latest in cloud computing, particularly AWS, to enhance my development skills.
    Throughout my career, I’ve enjoyed collaborating across disciplines to streamline complex processes, develop robust tools, and integrate systems that align with both business and technical needs. My technical toolkit spans Python, JavaScript, C++, Databases, Automation, and Project Management. I take pride in my ability to stay agile and focused outside of my professional career, quickly adapting to new challenges and finding unique solutions.
    Outside of work, I enjoy camping, weightlifting, and playing tennis and pickleball. I also have a keen interest in DIY projects that solve everyday problems. My ultimate goal is to leverage technology to build tools that impact lives, whether through enhanced data insights, scalable web solutions, or cloud-based applications that make a difference.
    `,
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
    // {
    //   fieldName: "Experience",
    //   fieldValue: "5+ Years"
    // },
    // {
    //   fieldName: "LinkedIn",
    //   fieldValue: "Joseph Nguyen"
    // },
    // {
    //   fieldName: "Nationality",
    //   fieldValue: "Asian-American"
    // },
  ]
};

// skills data
export const skills = {
  title: "My skills",
  description:
    "Throughout my academic and professional journey, I have developed a robust skill set in various areas, from core programming to cloud technologies and project management. I continue to expand my expertise in modern technologies, particularly in cloud, automation, AI, and web development.",
  categories: [
    {
      category: "Programming Languages",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <IoHardwareChip />, name: "FPGA" },
        { icon: <ImEmbed2 />, name: "Embedded C" },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { icon: <SiFlask />, name: "Flask" },
        { icon: <DiDjango />, name: "Django" },
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        // { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        
      ],
    },
    {
      category: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaDatabase />, name: "CosmosDB" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL Server" },
        { icon: <SiIbm />, name: "IBM DOORs" },
      ],
    },
    // {
    //   category: "DevOps & Cloud",
    //   skills: [
    //     { icon: <FaAws />, name: "AWS" },
    //     { icon: <SiMicrosoftazure />, name: "Azure" },
    //     { icon: <FaDocker />, name: "Docker" },
    //     { icon: <SiJenkins />, name: "Jenkins" },
        
    //   ],
    // },
    {
      category: "Project Management & Collaboration",
      skills: [
        { icon: <SiMicrosoftazure />, name: "Azure" },
        { icon: <SiAzuredevops />, name: "Azure DevOps" },
        { icon: <FaJira />, name: "Jira" },
        { icon: <FaSlack />, name: "Slack" },
      ],
    },
    {
      category: "Other",
      skills: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaMicrosoft />, name: "Microsoft Office Suite" },
        { icon: <SiVisualstudio />, name: "Visual Studio Code" },
      ],
    },
  ],
};

// experience data
export const experiences = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    `
    I am currently a Software Engineer II at Textron Aviation, where I lead the design and development of a Python-based automation tool that significantly streamlines our systems engineering processes. 
    By replacing outdated manual workflows, this tool has cut script-building time drastically, allowing our team to focus on more strategic, high-impact tasks. 
    Through five successful build iterations using continuous integration, I’ve optimized our script generation process, saving over 300 hours of manual work. 
    This experience has not only honed my problem-solving abilities but also deepened my expertise in building scalable, modular solutions. 
    Driven by a passion for continuous learning and fulfillment in creating innovative tools, I continually seek opportunities to expand my skills—embracing new technologies, refining my knowledge in automation, and 
    exploring emerging trends in software development. This commitment allows me to deliver solutions that are not only effective but also adaptable and future-ready, ready to meet the evolving needs of the industry.
    `,
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
  cards: [
    {
      position: "Software Engineer II",
      company: "Textron Aviation",
      location: "Wichita, KS",
      date: "March 2022 – Present",
      details: [
        "Spearheaded the design and development of automated script testing application, saving 300+ hours by replacing outdated testing methodologies.",
        "Optimized tool automation application through five build iterations based on user feedback.",
        "Continuously integrated standard system design for engineering requirements with all stakeholders and streamlined complex processes based on business logic.",
        "Enhanced workflow efficiency through pioneering a new tool process with Azure DevOps leveraging agile project management.",
        "Fostered cross-disciplinary collaboration to enhance product design applications, adhering to Systems Engineering requirements. ",
        "Directed the training of engineers on new tool development releases and authored a comprehensive standard operating manual for each application development. "
      ]
    },
    {
      position: "Application Systems Analyst",
      company: "Koch Industries",
      location: "Wichita, KS",
      date: "December 2020 – March 2022",
      details: [
        "Supported cross-functional teams by providing robust application and infrastructure assistance.",
        "Managed and own all tickets in KM&T’s Service Now (SNOW) queue, responding based on specified ticket priority and keeping with Service Level Agreements (SLA) time commitments.",
        "Troubleshot applications using SQL, MongoDB, RabbitMQ, and AWS.",
        "Resolved 35+ system issues by coordinating with teams and vendors, ensuring nominal operations.",
        "Execute migrations in staging and production environments to include the installation of required software on servers.",
        "Proactively identify areas of risk to bring about awareness and to recommend solutions to eliminate or limit risks."
      ]
    },
    {
      position: "Drive QA Engineer",
      company: "NetApp",
      location: "Wichita, KS",
      date: "February 2019 – August 2020",
      details: [
        "Conducted PyNT Testing through PuTTY on Samsung products with lead engineer.",
        "Configured legacy server system setup as a sandbox environment for firmware updates, conducting drive tests, and log analysis.",
        "Published troubleshooting and configuration build tips on Confluence, aiding in efficient issue resolution and storage build process.",
        "Developed scalable storage solutions using in-house products, improving storage performance and reliability with Senior Lead."
      ]
    },
    // Add more experiences as needed
  ],
};

// education data
export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    "I received my Bachelor of Science in Computer Engineering and Minor in Computer Science from Wichita State University. Throughout my undergrad, I've had relevant courseworks such as C++ Programming, Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Architecture, Intro to Software Engineering,  Hardware-based Security Engineering, Microprocessor-based system design, and many more...",
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
