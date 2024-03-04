import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import NavSection from '@/containers/nav-section';
import ProjectsSection from '@/containers/projects-section';
import FooterSection from '@/containers/footer-section';

const inter = Inter({ subsets: ['latin'] });

type UserData = {
   name: string;
   bio: string;
   html_url: string;
};

export default function Home() {
   const [myData, setMyData] = useState<UserData>([] as any);

   useEffect(() => {
      const getMyData = async () => {
         try {
            const response = await fetch('https://api.github.com/users/kiudev');
            const data = await response.json();
            setMyData(data);
         } catch (err) {
            console.error(err);
         }
      };
      getMyData();
   }, []);

   const { name, bio, html_url } = myData;

   return (
      <main
         className={`bg-gradient-to-tr from-blue-800 to-blue-500 text-white-500 min-w-[100%] min-h-[100vh]  bg-blue-700 items-center p-6 md:p-10 ${inter.className}`}
      >
         <div className="block lg:flex lg:justify-center">
            <header className="mt-10 lg:fixed lg:-ml-[700px] lg:h-[90vh]">
               <h1 className="text-4xl md:text-5xl font-semibold tracking-tight opacity-90">
                  {name}
               </h1>
               <h3 className="text-lg mt-2 opacity-90 lg:font-medium">
                  Web Developer
               </h3>
               <p className="text-blue-100 text-opacity-65 mt-2">{bio}</p>

               <NavSection html_url={html_url} />
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

                  <article id="about" className="leading-7 mt-5 lg:mb-20">
                     <p className="text-blue-100 text-opacity-65">
                        <span className="text-blue-100">
                           Second-year web development student
                        </span>{' '}
                        with a lot of interest in learning and growing as a
                        front-end developer.
                     </p>

                     <p className="text-blue-100 text-opacity-65 mt-2">
                        I decided to study web development back in 2022 with
                        basic computing notions and I am quite happy about the
                        progress since then.{' '}
                     </p>

                     <p className="text-blue-100 text-opacity-65 mt-2">
                        I&apos;m looking forward to keep working and developing
                        my skills and exploring opportunities that will make me
                        grow professionally.
                     </p>
                  </article>
               </section>

               {/* Projects */}
               <section id="projects">
                  <h3 className="text-sm uppercase font-semibold tracking-widest mt-20 lg:hidden">
                     Projects
                  </h3>

                  <ProjectsSection />
               </section>
            </div>
         </div>
      </main>
   );
}
