"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "services",
    //     path: "/services",
    // },
    {
        name: "about me",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact me",
        path: "/contact",
    },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link 
                href={link.path} 
                key={index} 
                // Write it safely using clear conditional logic making the classes based on conditions (link.path === pathname)
                // Following best practices using proper template literals
                className={`${
                  link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
                </Link>
            )
        })}
    </nav>
  )
};

export default Nav;