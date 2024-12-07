import { Inter } from "next/font/google";
import { useState, MouseEvent, useEffect } from "react";
import NavSection from "@/containers/nav/NavSection";
import { projectsItems } from "@/data/projectsItems";
import { experienceItems } from "@/data/experienceItems";
import Head from "next/head";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const offsetX = e.pageX - windowWidth / 2;
    const offsetY = e.pageY - window.scrollY - windowHeight / 2;

    const mouseXpercentatge = (offsetX / windowWidth) * 100;
    const mouseYPercentatge = (offsetY / windowHeight) * 100;

    setMousePosition({ left: mouseXpercentatge, top: mouseYPercentatge });
  };

  const projectsWithHoverLogic = projectsItems.map(project => ({
    ...project,
    isHovered: isHovered === project.name,
    isAnyHovered: isHovered !== null,
    onEnter: () => setIsHovered(project.name),
    onLeave: () => setIsHovered(null),
  }));

  return (
    <main
      onMouseMove={(e) => handleMouseMove(e)}
      className={`bg-blue-700 text-white-500 min-w-screen min-h-screen items-center ${inter.className}`}
    >
      <Head>
        <title>Daniel Saavedra</title>
      </Head>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: `radial-gradient(500px at ${50 + mousePosition.left}% ${
            50 + mousePosition.top
          }%, #111D3B, #0E1730 40%, #0A1124 70%)`,
        }}
        className="hidden lg:flex lg:fixed"
      />

      <div className="min-h-screen flex lg:justify-center lg:items-center px-6 lg:px-20">
        <div className="lg:flex lg:justify-between lg:gap-10">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight opacity-90">
              Daniel Saavedra
            </h1>

            <h3 className="text-lg mt-2 opacity-90 font-semibold">
              Frontend Developer
            </h3>

            <p className="text-blue-100 text-opacity-65 mt-2">
            I specialise in designing and optimising interfaces that combine<br></br> appearance with functionality and performance. 👨🏻‍💻
            </p>

            <NavSection />
          </header>

          {/* About me */}
          <div className="lg:relative lg:w-[680px] lg:py-24 -mt-10 lg:mt-0">
            <section>
              <h3 className="text-sm uppercase font-bold tracking-widest lg:hidden">
                About
              </h3>

              <article
                id="about"
                className="leading-7 lg:mb-20 lg:scroll-mt-24 lg:pl-6 mt-5 lg:mt-0"
              >
                <p className="text-blue-100 text-opacity-65">
                  <span className="text-white-500">
                    I&apos;m a frontend developer
                  </span>
                  , nearing the end of my internship specialise in frontend
                  development and my passion is creating attractive user
                  interfaces
                </p>

                <p className="text-blue-100 text-opacity-65 mt-2">
                  I decided to study web development back in 2022 with basic
                  computing notions and I&apos;m quite happy about the progress
                  since then.
                </p>

                <p className="text-blue-100 text-opacity-65 mt-2">
                  I&apos;m looking forward to keep working and developing my
                  skills and exploring opportunities that will make me grow
                  professionally.
                </p>
              </article>
            </section>

            {/* Experience */}
            <section id="experience" className="lg:scroll-mt-28 mt-20 lg:mt-0">
              <h3 className="text-sm uppercase font-bold tracking-widest lg:hidden">
                Experience
              </h3>

              <article className="leading-7 lg:mb-20 mt-9 lg:mt-0">
                <Timeline items={[...experienceItems]} />
              </article>
            </section>

            {/* Projects */}
            <section id="projects" className="lg:scroll-mt-20 mb-10 lg:mb-0">
              <h3 className="text-sm uppercase font-semibold tracking-widest mt-20 lg:hidden">
                Projects
              </h3>

              <Projects items={[...projectsWithHoverLogic]} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
