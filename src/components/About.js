import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div className="container mx-auto flex px-10 py-20 flex-col md:flex-row items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi,
          <br className="hidden lg:inline-block"/>
          I'm Diego,
          <br className="hidden lg:inline-block"/>
          web developer
        </h1>
        <p className="mb-8 leading-relaxed">
        Tech &amp; renewable energy enthusiast. Problem-solving addicted. Changing careers to make the world a better place through technology
        and education.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-center text-white bg-red-666 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border hover:border-red-666 hover:shadow-[3px_4px_0_0_rgba(255,0,102)] hover:shadow-red-666 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 text-center inline-flex text-white bg-sky-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border hover:border-sky-600 hover:shadow-sky-600 hover:shadow-[3px_4px] rounded text-lg">
            See My Past Work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="programing"
          src="programing.png"
        />
        <div className='text-center'>
          <a href="https://www.flaticon.com/free-icons/programmer" title="programmer icons" className="text-sm">Programmer icons created by Eucalyp - Flaticon</a>
        </div>
      </div>
    </div>
  </section>
    )
}




export default About
