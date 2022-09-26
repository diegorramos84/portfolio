import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"


const Social = () => {
  return(
    <div class="icon-bar fixed botton-0 z-20">
    <div class="twitter">
      <a type="button" rel="noreferrer" href="https://twitter.com/DIERRamos84" target="_blank" className="text-xl bg-sky-500 text-white p-2"><BsTwitter /></a>
    </div>
    <div class="linkedin">
      <a type="button" rel="noreferrer" href="https://www.linkedin.com/in/diegorramos84" target="_blank" className="text-xl text-white p-2 bg-[#0077B5]"><BsLinkedin /></a>
    </div>
    <div class="github">
      <a type="button" rel="noreferrer"href="https://github.com/diegorramos84" target="_blank" className="text-xl text-white p-2 bg-[#171515]"><BsGithub /></a>
    </div>
    </div>
  )
}


export default Social
