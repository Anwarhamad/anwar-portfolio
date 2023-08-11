"use client";

import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

import NavigationLink from "./NavigationLink";
import useIntersectionObserver from "../_hooks/useIntersectionObserver";

function NavigationBar() {
  const [activeSection, setActiveSection] = useState("home");

  useIntersectionObserver(
    (entry) => {
      setActiveSection(entry.target.id);
    },
    { threshold: 0.5 },
  );

  const navLinks = [
    {
      id: "home",
      icon: <AiOutlineHome />,
    },
    {
      id: "projects",
      icon: <MdWorkOutline />,
    },
    {
      id: "contact",
      icon: <BiMessageSquareDetail />,
    },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 z-10 block w-8/12 -translate-x-1/2 transform rounded-full bg-black bg-opacity-30 p-5 backdrop-blur-md md:w-6/12 lg:w-4/12">
      <ul className="flex justify-evenly">
        {navLinks.map(({ id, icon }) => (
          <NavigationLink
            key={id}
            id={id}
            icon={icon}
            active={activeSection === id}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
