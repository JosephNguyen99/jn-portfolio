// Social.jsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JosephNguyen99" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/qt-joseph-nguyen/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/josephqtnguyen/" },
];

const Social = ({ containerStyles = "", iconStyles = "" }) => { // default values ensure for containerStyles / iconStyles to use empty string rather than undefined
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"   // makes the link open in a new tab or window, so they can stay in my website window
          rel="noopener noreferrer" // security feature whenever opening a link in a new tab using blank, the new page has access to window.opener object. This prevents < this making sure the new page doesn't have access to my page's context
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
