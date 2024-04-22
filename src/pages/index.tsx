import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import NavSection from "@/containers/nav/NavSection";
import ProjectsSection from "@/containers/projects/ProjectsSection";
import FooterSection from "@/containers/footer/FooterSection";

const inter = Inter({ subsets: ["latin"] });

type UserData = {
   name: string;
   bio: string;
   html_url: string;
};

export default function Home() {
   const [myData, setMyData] = useState<UserData>([] as any);
   const [mousePosition, setMousePosition] = useState({
      left: 0,
      top: 0,
   });

   const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ left: e.pageX, top: e.pageY });
   };

   const calculateBackgroundColor = () => {
      return `#fff`;
   };

   const backgroundColor = calculateBackgroundColor();

   useEffect(() => {
      const getMyData = async () => {
         try {
            const response = await fetch("https://api.github.com/users/kiudev");
            const data = await response.json();
            setMyData(data);
         } catch (err) {
            console.error(err);
         }
      };
      getMyData();
   }, []);

   return (
      <main
         onMouseMove={e => handleMouseMove(e)}
         className={`bg-blue-800 text-white-500 min-w-[100%] min-h-[100vh] items-center p-6 md:p-10 lg:p-14 ${inter.className}`}
      >
         <div
            style={{
               width: "800px",
               height: "800px",
               background:
                  "radial-gradient(circle at center, #0E1730, #0A1124 40%, #070C18 70%)",
               position: "absolute",
               left: mousePosition.left - 400 + "px",
               top: mousePosition.top - 400 + "px",
               borderRadius: "50%",
            }}
            className="hidden lg:flex"
         />
         <div className="block lg:flex lg:justify-center">
            <header className="mt-10 lg:fixed lg:-ml-[700px] lg:h-[80vh]">
               <h1 className="text-4xl md:text-5xl font-semibold tracking-tight opacity-90">
                  Daniel Saavedra
               </h1>
               <h3 className="text-lg mt-2 opacity-90 lg:font-medium">
                  Web Developer
               </h3>
               <p className="text-blue-100 text-opacity-65 mt-2">
                  Building and learning at the same time 👨🏻‍💻
               </p>

               <NavSection />
               <footer className="mt-10">
                  <FooterSection />
               </footer>
            </header>

            {/* About me */}
            <div className="lg:-mt-10 lg:relative lg:w-[500px] lg:ml-[500px]">
               <section className="mt-20">
                  <h3 className="text-sm uppercase font-bold tracking-widest lg:hidden">
                     About
                  </h3>

                  <article
                     id="about"
                     className="leading-7 mt-5 lg:mb-20 lg:scroll-mt-40"
                  >
                     <p className="text-blue-100 text-opacity-65">
                        <span className="text-blue-100">
                           Second-year web development student
                        </span>
                        {" "}
                        with a lot of interest in learning and growing as a
                        front-end developer.
                     </p>

                     <p className="text-blue-100 text-opacity-65 mt-2">
                        I decided to study web development back in 2022 with
                        basic computing notions and I&apos;m quite happy about the
                        progress since then.
                     </p>

                     <p className="text-blue-100 text-opacity-65 mt-2">
                        I&apos;m looking forward to keep working and developing
                        my skills and exploring opportunities that will make me
                        grow professionally.
                     </p>
                  </article>
               </section>

               {/* Projects */}
               <section id="projects" className="lg:scroll-mt-24">
                  <h3 className="text-sm uppercase font-semibold tracking-widest mt-20 lg:hidden">
                     Projects
                  </h3>

                  <ProjectsSection
                     name="Movie Tracker"
                     image="/movie-tracker.png"
                     homepage="https://mov-tracker.vercel.app"
                     description="Displays popular, current, upcoming and top-rated movies from TMDB"
                  />
                  <ProjectsSection
                     name="Button Customizer"
                     image="/button-customizer.png"
                     homepage="https://customize-button.vercel.app"
                     description="iOS Calculator with HTML, CSS and JS"
                  />
                  <ProjectsSection
                     name="iOS Calculator"
                     image="/ios-calculator.png"
                     homepage="https://calculator-kiudev.vercel.app"
                     description="Customize your own button"
                  />
                  <ProjectsSection
                     name="Weather App"
                     image="/weather-app.png"
                     homepage="https://any-clime.vercel.app"
                     description="Weather App"
                  />
               </section>
            </div>
         </div>
      </main>
   );
}
