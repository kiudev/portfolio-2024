import { useEffect, useState } from 'react';
import Image from 'next/image';

type Project = {
   name: string;
   homepage: string;
   description: string;
   topics: string[];
};

type dataProject = {
   project: Project;
   image: string;
};

const ProjectSection = ({ project, image }: dataProject) => (
   <a href={project.homepage} target="_blank">
      <div className="lg:bg-white-800 lg:bg-opacity-5 lg:mt-10 lg:px-10 lg:py-1 lg:hover:bg-opacity-10 lg:transition-all lg:rounded-md lg:border-t lg:border-opacity-10 lg:border-white-500">
         <header className="flex flex-row items-center gap-2">
            <p className="mt-5">{project.name}</p>
            <svg
               xmlnsXlink="http://www.w3.org/1999/xlink"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               className=""
               aria-hidden="true"
               width="20"
               height="20"
            >
               <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                  fill="#E2E8F0"
               ></path>
            </svg>
         </header>
         <p className="text-blue-100 text-opacity-65 mt-3 text-sm">
            {project.description}
         </p>

         <ul className="flex gap-5">
            {project.topics.map(
               topic =>
                  topic.length <= 10 && (
                     <li
                        className="bg-teal-800 bg-opacity-70 px-3 py-1 font-medium text-center mt-2 text-teal-200 rounded-lg text-sm"
                        key={topic}
                     >
                        {topic}
                     </li>
                  )
            )}
         </ul>

         <Image
            className="mt-5 mb-5 border border-white border-blue-100 rounded-md"
            src={image}
            alt="movie"
            width={200}
            height={300}
         />
      </div>
   </a>
);

export default function ProjectsSection() {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      const getProjects = async () => {
         try {
            const response = await fetch(
               'https://api.github.com/users/kiudev/repos'
            );
            const data = await response.json();
            setProjects(data);
         } catch (err) {
            console.error(err);
         }
      };
      getProjects();
   }, []);

   const projectImages = [
      '/movie-tracker.png',
      '/button-customizer.png',
      '/ios-calculator.png',
      '/weather-app.png',
   ];

   const projectSections = [6, 0, 4, 10].map(
      (project, index) =>
         projects.length > 0 && (
            <ProjectSection
               key={index}
               project={projects[project]}
               image={projectImages[index]}
            />
         )
   );

   return <>{projectSections}</>;
}
