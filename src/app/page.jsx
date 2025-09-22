import Nav from "./components/Nav";
import Footer from "./components/footer";
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
      <section id="home" className="flex flex-col xl:flex-row h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 py-10 px-10">
        <div className="flex-1 flex flex-col justify-center item-center">
          <div className="relative flex items-center">       
            <p className="text-white mt-20 font-mono text-4xl xl:text-6xl font-bold relative z-10 pl-10 xl:pl-20">
              Hello
            </p>
            <div className="absolute left-37 top-27 xl:left-66 xl:top-30 w-1.5 h-1.5 xl:w-2.5 xl:h-2.5 bg-blue-500 rounded-full z-0"></div>
          </div>

          <div className="flex flex-row xl:flex-col items-center mt-10">
            <div className="absolute ml-20 mt-12 xl:left-15 xl:top-88 w-25 h-1.5 xl:w-25 xl:h-1 bg-blue-500 z-0"></div>
            <div>
               <p className="text-white font-mono text-3xl xl:text-5xl xl:ml-5 font-bold">
              I'm Chisanupong
            </p>
            </div>
           
          </div>

          <p className="text-white font-mono text-4xl xl:text-6xl font-bold mt-10 pl-20">
            Fullstack Developer
          </p>

          <p className="text-white font-mono text-2xl xl:text-4xl mt-10">
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

      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
      <section className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 ">
        <Footer />
      </section>
      
    </main>
  );
}
