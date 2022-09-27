import IconLanguageRuby from "./components/icons/IconLanguageRuby.tsx"
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRubyonrails } from "react-icons/si"
import { FcLinux } from 'react-icons/fc'

export const projects = [
  {
    title: "Plant Swap",
    subtitle: "Swap plants with your local community",
    description: "CRUD webapp built with Ruby on Rails. Real time chat, map and other features available",
    image: "./plantswap.png",
    link: "https://www.plantswap.live/",
    github: "https://github.com/diegorramos84/plant-swap"

  },
  {
    title: "Con[text]",
    subtitle: "Learn new languages by context",
    description: "Ruby on Rails powered with HotWire Turbo and Stimulus",
    image: "./context.png",
    link: "https://team50.herokuapp.com/",
    github: "coming soon"

  },
  {
    title: "Rent-a-Cat",
    subtitle: "Rent-a-Dog but for cats!",
    description: "Airbnb clone",
    image: "./cats.png",
    link: "https://rent-a-cat-batch901.herokuapp.com/",
    github:"https://github.com/sarshad1986/rent-a-cat",
  },
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
