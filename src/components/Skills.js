import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
    <div className="container px-10 py-10 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Currently learning React &amp; Node.js
        </p>
      </div>
      <div className="flex flex-wrap md:w-2/3 sm:mx-auto -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/3 w-full">
            <div className="bg-gray-800 rounded flex justify-evenly p-4 h-full">
              <span className="flex text-center font-medium text-2xl">
                {skill.icon} {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skills
