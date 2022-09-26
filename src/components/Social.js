import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"


const Social = () => {
  return(
    <div class="icon-bar fixed botton-0 z-20">
    <div class="twitter">
      <button href="https://twitter.com/DIERRamos84" className="text-2xl bg-sky-500 text-white p-2"><BsTwitter /></button>
    </div>
    <div class="linkedin">
      <button href="www.linkedin.com/in/diegorramos84" className="text-2xl text-white p-2 bg-[#0077B5]"><BsLinkedin /></button>
    </div>
    <div class="github">
      <button href="https://github.com/diegorramos84" className="text-2xl text-white p-2 bg-[#171515]"><BsGithub /></button>
    </div>
    </div>
  )
}


export default Social
