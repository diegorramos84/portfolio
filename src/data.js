import IconLanguageRuby from "./components/icons/IconLanguageRuby.tsx"
import { FaJsSquare, FaLinux, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRubyonrails } from "react-icons/si"

export const projects = [
  {
    title: "Plant Swap",
    subtitle: "Placeholder",
    description: "lorem",
    image: "./plantswap.png",
    link: "https://www.plantswap.live/"

  },
  {
    title: "Con[text]",
    subtitle: "Placeholder",
    description: "lorem",
    image: "./context.png",
    link: "https://team50.herokuapp.com/"

  },
  {
    title: "Rent-a-Cat",
    subtitle: "Placeholder",
    description: "lorem",
    image: "./cats.png",
    link: "https://rent-a-cat-batch901.herokuapp.com/"
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
    name: "Linux",
    icon: <FaLinux className="mr-2 text-black" />,
  },
  {
    name: "React",
    icon: <FaReact className="mr-2 text-blue-300" />,
  },
  {
    name: "Node",
    icon: <FaNodeJs className="mr-2 text-green-300" />,
  },
]
