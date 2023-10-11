import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
import { BsGithub } from "react-icons/bs";


const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap -m-4 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/3 w-100 h-80 p-4">
              <div className="flex relative w-100 h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-scale-down lg:object-fill object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 flex-col items-center justify-center">
                  <h2 className="tracking-widest text-lg title-font font-medium text-red-666 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-2">{project.description}</p>
                  <a type="button" rel="noreferrer" href={project.github} target="_blank" className="text-xl text-white pt-1 bg-gray-900 flex items-center justify-center"><BsGithub /></a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );

}


export default Projects
