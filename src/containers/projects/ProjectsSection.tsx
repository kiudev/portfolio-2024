import Image from "next/image";
import { useState, RefObject } from "react";

type dataProjects = {
  name: string;
  homepage: string;
  description: string;
  image: string;
  isHovered: string | null;
  onEnter: (name: string) => void;
  onLeave: () => void;
};

export default function ProjectsSection({
  image,
  name,
  homepage,
  description,
  isHovered,
  onEnter,
  onLeave,
}: dataProjects) {
  return (
    <a
      href={homepage}
      target="_blank"
      className={`transition-opacity duration-300 ${
        isHovered === name
          ? "opacity-100"
          : isHovered === null
          ? "opacity-100"
          : "opacity-50"
      }`}
      onMouseEnter={() => onEnter(name)}
      onMouseLeave={onLeave}
    >
      <div className="hover:bg-blue-100 hover:bg-opacity-10 lg:px-6 transition-all rounded-xl">
        <header className="flex flex-row items-center justify-between">
          <Image
            className="mt-5 mb-7 rounded-md aspect-[4/3] object-cover"
            src={image}
            alt="movie"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2 w-full ml-8">
            <div className="flex flex-row justify-between items-center">
            <p className="text-blue-100 text-md">{name}</p>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
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
            </div>
            <p className="text-blue-100 text-opacity-65 mt-3 text-sm">
              {description}
            </p>
          </div>
        </header>
      </div>
    </a>
  );
}
