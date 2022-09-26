import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex md:p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="md:ml-3 text-xl">
            Diego Ramos
          </a>
        </div>
        <nav className="flex-col md:flex-row md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        <button
          href="#contact"
          className="inline-flex items-center text-white bg-red-666 border-0 py-1 px-3 focus:outline-none  hover:bg-black-666 hover:border hover:border-red-666 hover:shadow-[1px_2px_0_0_rgba(255,0,102)] hover:shadow-red-666 rounded text-base md:mt-0">
          Hire Me
          <AiOutlineArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );

}



export default  Navbar
