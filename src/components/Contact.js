import React from "react";
import { useState } from "react"
import { IoIosMail } from 'react-icons/io'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      heades: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
    .then(() => alert("Message sent!"))
    .catch((error) => alert(error))
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <section id="contact" className="flex justify-center relative pb-8">
      <form
        netlify="true"
        name="contact"
        onSubmit={ handleSubmit }
        className="flex flex-col w-2/3">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Hire Me
        </h2>
        <p className="leading-relaxed mt-5 mb-10">
          Diego Ramos,
          London, UK. <br></br>
          <a href="mailto:diegorramos84@gmail.com"><IoIosMail className="inline-block mr-1"/>diegorramos84@gmail.com</a>
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name= "name"
            value={ name }
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={ handleNameChange }
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name= "email"
            value= { email }
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={ handleEmailChange }
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value= { message }
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={ handleMessageChange }
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-666 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:border hover:border-red-666 hover:shadow-[3px_4px_0_0_rgba(255,0,102)] hover:shadow-red-666 rounded text-lg">
          Contact me!
        </button>
      </form>
  </section>
  );
}

export default Contact
