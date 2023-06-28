import IconLanguageRuby from "./components/icons/IconLanguageRuby.tsx"
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRubyonrails } from "react-icons/si"
import { FcLinux } from 'react-icons/fc'

export const projects = [
  {
    title: "Homework Heroes",
    subtitle: "Homework app to assist neurodivergent kids with their homework",
    description: "Webapp with teacher and student dashboard. Pomodoro and music player features. React + Flask",
    image: "./homeworkheroes.png",
    link: "https://homework-heroes.onrender.com/",
    github: "https://github.com/Beckibuzz93/Homework-Heroes"

  },
  {
    title: "Plant Swap",
    subtitle: "Swap plants with your local community",
    description: "CRUD webapp built with Ruby on Rails. Real time chat, map and other features available",
    image: "./plantswap.png",
    link: "https://plant-swap-batch901.herokuapp.com/",
    github: "https://github.com/diegorramos84/plant-swap"

  },
  {
    title: "Anti-Procrastination app",
    subtitle: "Todo list app with calendar features",
    description: "React.js + Node.js",
    image: "./calendartodo.png",
    link: "https://brainiac-brigade.onrender.com/",
    github: "https://github.com/JackDMoore/Brainiac-Brigade"

  },
  {
    title: "Con[text]",
    subtitle: "Learn new languages by context",
    description: "Ruby on Rails powered with HotWire Turbo and Stimulus",
    image: "./context.png",
    link: "",
    github: "https://github.com/adrianHards/hotwire-context"

  }
]

export const skills = [
  {
    name: "Ruby",
    icon: <IconLanguageRuby className="mr-2 text-red-700" />
  },
  {
    name: "Rails",
    icon: <SiRubyonrails className="mr-2 bg-red-700 text-white rounded-full" />
  },
  {
    name: "Javascript",
    icon: <FaJsSquare className="mr-2 text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="mr-2 text-blue-300" />,
  },
  {
    name: "Node",
    icon: <FaNodeJs className="mr-2 text-green-300" />,
  },
  {
    name: "Linux",
    icon: <FcLinux className="mr-2 text-black" />,
  },
]
