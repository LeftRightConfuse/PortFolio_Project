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
      <section
        id="home"
        className="flex flex-col xl:flex-row min-h-screen w-screen
             bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
             items-center justify-center text-center px-5 py-10"
      >
        <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
          <div className="relative flex items-center justify-center xl:justify-start">
            <p className="text-white mt-20 font-mono text-4xl md:text-5xl xl:text-6xl font-bold relative z-10 xl:pl-20">
              Hello
            </p>
            <span
              aria-hidden
              className="pointer-events-none absolute left-28.5 top-27 -translate-x-1/2 -translate-y-[35%]
                   w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-2 md:h-2 md:left-37 md:top-29 rounded-full bg-blue-500
                   xl:left-66 xl:top-31 xl:w-2.5 xl:h-2.5"
            />
          </div>

          <div className="mt-10 w-full relative">
            <p className="text-white font-mono text-3xl md:text-4xl xl:text-5xl font-bold xl:mr-20 ">
              I'm Chisanupong
            </p>
            <div
              aria-hidden
              className="mx-auto xl:mx-0 h-[4px] w-28 sm:w-36 bg-blue-500 xl:ml-10 "
            />
          </div>

          <p className="text-white font-mono text-4xl md:text-5xl xl:text-6xl font-bold mt-10 xl:ml-20 xl:mt-10">
            Fullstack Developer
          </p>

          <p className="text-white font-mono text-2xl md:text-3xl xl:text-4xl mt-10 xl:ml-10 xl:mt-15" >
            Welcome to my portfolio website!
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center mt-10 xl:text-left xl:mt-15">
          <img
            src="./profile.JPG"
            alt="Profile Picture"
            className="w-[90%] md:w-[70%] xl:w-[60%] rounded-full object-cover shadow-lg mx-auto"
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
