import { Inter } from "next/font/google";
import { useEffect, useState, MouseEvent, useRef } from "react";
import NavSection from "@/containers/nav/NavSection";
import ProjectsSection from "@/containers/projects/ProjectsSection";
import FooterSection from "@/containers/footer/FooterSection";
import Head from "next/head";
import Timeline from "@/components/Timeline";

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

  const timelineItems = [
    {
      date: "2024 - Present",
      label: "Internship",
      title: "Web Developer",
      company: "StellaTech",
      content:
        "Design and optimisation of websites and implementation of SEO strategies to improve search engine visibility.",
      website: "https://growthweb.es"
    },
  ];

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
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col py-16 md:py-20 lg:py-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight opacity-90">
              Daniel Saavedra
            </h1>

            <h3 className="text-lg mt-2 opacity-90 font-semibold">
              Frontend Developer
            </h3>

            <p className="text-blue-100 text-opacity-65 mt-2">
              Building and learning at the same time 👨🏻‍💻
            </p>

            <NavSection />
          </header>

          {/* About me */}
          <div className="lg:relative lg:w-[680px] lg:py-24">
            <section>
              <h3 className="text-sm uppercase font-bold tracking-widest lg:hidden">
                About
              </h3>

              <article
                id="about"
                className="leading-7 lg:mb-20 lg:scroll-mt-24 lg:pl-6 mt-5 lg:mt-0"
              >
                <p className="text-blue-100 text-opacity-65">
                  <span className="text-blue-100">
                    I&apos;m a trainee web developer
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
            <section id="experience" className="lg:scroll-mt-28">
              <h3 className="text-sm uppercase font-bold tracking-widest lg:hidden">
                Experience
              </h3>

              <article className="leading-7 lg:mb-20 mt-5 lg:mt-0">
                <Timeline items={[...timelineItems]} />
              </article>
            </section>

            {/* Projects */}
            <section id="projects" className="lg:scroll-mt-20">
              <h3 className="text-sm uppercase font-semibold tracking-widest mt-20 lg:hidden">
                Projects
              </h3>

              <ProjectsSection
                name="Cinopolis"
                image="/cinopolis.png"
                homepage="https://cinopolis.vercel.app"
                description="A platform guide for those looking for a movie or tv show"
                isHovered={isHovered}
                onEnter={(name) => setIsHovered(name)}
                onLeave={() => setIsHovered(null)}
              />

              <ProjectsSection
                name="EN-ES Translate"
                image="/en-es-translate.png"
                homepage="https://en-es-translate.vercel.app"
                description="Translate between these two languages"
                isHovered={isHovered}
                onEnter={(name) => setIsHovered(name)}
                onLeave={() => setIsHovered(null)}
              />

              <ProjectsSection
                name="iOS Calculator"
                image="/ios-calculator.png"
                homepage="https://calculator-kiudev.vercel.app"
                description="iOS Calculator with HTML, CSS and JS"
                isHovered={isHovered}
                onEnter={(name) => setIsHovered(name)}
                onLeave={() => setIsHovered(null)}
              />

              <ProjectsSection
                name="Button Customizer"
                image="/button-customizer.png"
                homepage="https://customize-button.vercel.app"
                description="Customize your own button"
                isHovered={isHovered}
                onEnter={(name) => setIsHovered(name)}
                onLeave={() => setIsHovered(null)}
              />

              <ProjectsSection
                name="Weather App"
                image="/weather-app.png"
                homepage="https://any-clime.vercel.app"
                description="Weather App"
                isHovered={isHovered}
                onEnter={(name) => setIsHovered(name)}
                onLeave={() => setIsHovered(null)}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
