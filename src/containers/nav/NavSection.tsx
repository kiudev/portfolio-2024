import Image from "next/image";
import { useState, useEffect } from "react";

type Section = "about" | "experience" | "projects";

export default function NavSection() {
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredGithub, setHoveredGithub] = useState(false);
  const [isSelected, setIsSelected] = useState<Section | null>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const experienceSection = document.getElementById("experience");

      if (aboutSection && projectsSection && experienceSection) {
        if (
          scrollPosition >= aboutSection.offsetTop &&
          scrollPosition < projectsSection.offsetTop &&
          scrollPosition < experienceSection.offsetTop
        ) {
          setIsSelected("about");
        } else if (scrollPosition >= projectsSection.offsetTop) {
          setIsSelected("projects");
        } else if (scrollPosition >= experienceSection.offsetTop) {
          setIsSelected("experience");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: Section) => {
    setIsSelected(section === isSelected ? null : section);
  };

  return (
    <nav className="flex flex-row mt-5">
      <ul className="flex flex-row gap-2.5 items-center lg:flex-col">
        <div className="w-40 h-0.5 bg-white-600 -ml-6 lg:hidden md:-ml-10"></div>
        <div className="flex flex-col gap-2 mt-10">
          <a
            onClick={() => handleClick("about")}
            className="flex flex-row items-center cursor-pointer group gap-5 py-2"
            href="#about"
          >
            <span
              className={`${isSelected === "about" ? "w-24" : "w-10"} ${
                isSelected === "about" ? "opacity-100" : "opacity-50"
              } group-hover:w-24 w-10 h-0.5 bg-white-600 transition-all duration-200 rounded-full hidden lg:block`}
            ></span>
            <li
              className={`${
                isSelected === "about" ? "opacity-100" : "opacity-50"
              } hidden lg:block text-[12px] uppercase font-medium tracking-widest leading-3`}
            >
              About
            </li>
          </a>
          <a
            onClick={() => handleClick("experience")}
            className="flex flex-row items-center cursor-pointer group gap-5 py-2"
            href="#experience"
          >
            <span
              className={`${isSelected === "experience" ? "w-24" : "w-10"} ${
                isSelected === "experience" ? "opacity-100" : "opacity-50"
              } group-hover:w-24 w-10 h-0.5 bg-white-600 transition-all duration-200 rounded-full hidden lg:block`}
            ></span>
            <li
              className={`${
                isSelected === "experience" ? "opacity-100" : "opacity-50"
              } hidden lg:block text-[12px] uppercase font-medium tracking-widest leading-3`}
            >
              Experience
            </li>
          </a>

          <a
            onClick={() => handleClick("projects")}
            className="flex flex-row items-center cursor-pointer group gap-5 py-2"
            href="#projects"
          >
            <span
              className={`${isSelected === "projects" ? "w-24" : "w-10"} ${
                isSelected === "projects" ? "opacity-100" : "opacity-50"
              } group-hover:w-24 w-10 h-0.5 bg-white-600 transition-all duration-200 rounded-full hidden lg:block`}
            ></span>
            <li
              className={`${
                isSelected === "projects" ? "opacity-100" : "opacity-50"
              } hidden lg:block text-[12px] uppercase font-medium tracking-widest leading-3`}
            >
              Projects
            </li>
          </a>
        </div>

        <div className="flex flex-row items-center gap-7 lg:-ml-5 lg:absolute lg:bottom-0 lg:left-5 lg:mb-24">
          <li className="w-5 h-10">
            <a
              className="w-10"
              href="https://github.com/kiudev"
              target="_blank"
            >
              <svg
                onMouseEnter={() => setHoveredGithub(true)}
                onMouseLeave={() => setHoveredGithub(false)}
                className="lg:transition-all hover:lg:scale-125"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                width="28"
                height="40"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  fill={`${hoveredGithub ? "#E7F8F8" : "#A4B7D0"}`}
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/danisaavedraes/"
              target="_blank"
            >
              <svg
                onMouseEnter={() => setHoveredLinkedin(true)}
                onMouseLeave={() => setHoveredLinkedin(false)}
                className="lg:transition-all duration-300 hover:lg:scale-125"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="28"
                height="28"
              >
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                  fill={`${hoveredLinkedin ? "#E7F8F8" : "#A4B7D0"}`}
                ></path>
              </svg>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
