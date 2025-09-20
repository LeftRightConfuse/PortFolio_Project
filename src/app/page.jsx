import Nav from "./components/Nav";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { BackgroundBeamsWithCollision } from "../components/ui/shadcn-io/background-beams-with-collision/index";
import { SparklesCore } from "../components/ui/shadcn-io/sparkles/index";
import About from "../app/about/page";
import Projects from "../app/projec/page";
import Contacts from "../app/contacts/page";




export default function Home() {
  return (
    <main className="content">
      <Nav />
      <section className="flex h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 py-10 px-10">
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative flex items-center">
            <p className="text-white font-mono text-6xl font-bold relative z-10 pl-20">
              Hello
            </p>
            <div className="absolute left-66 top-10 w-2.5 h-2.5 bg-blue-500 rounded-full z-0"></div>
          </div>

          <div className="flex items-center mt-10">
            <p className="text-blue-500 text-4xl font-bold mr-5">______</p>
            <p className="text-white font-mono text-5xl font-bold">
              I'm Chisanupong
            </p>
          </div>

          <p className="text-white font-mono text-6xl font-bold mt-10 pl-20">
            Fullstack Developer
          </p>

          <p className="text-white font-mono text-4xl mt-10">
            Welcome to my portfolio website!
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="./profile.JPG"
            alt="Profile Picture"
            className="w-[60%] rounded-full object-cover shadow-lg"
          />
        </div>
      </section>
      <About />

      <Projects />
      
      <Contacts />
    </main>
  );
}
