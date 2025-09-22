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
    {/* ฝั่งข้อความ */}
    <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
      <div className="relative flex items-center">
        <p className="text-white mt-20 font-mono text-4xl xl:text-6xl font-bold relative z-10 xl:pl-20">
          Hello
        </p>
        {/* จุดสีน้ำเงิน: ซ่อนบนมือถือกันตำแหน่งเพี้ยน */}
        <div className="hidden xl:block absolute left-66 top-30 w-2.5 h-2.5 bg-blue-500 rounded-full z-0" />
      </div>

      <div className="mt-10">
        {/* เส้นสีน้ำเงิน: ซ่อนบนมือถือ */}
        <div className="hidden xl:block absolute left-15 top-88 w-25 h-1 bg-blue-500 z-0" />
        <p className="text-white font-mono text-3xl xl:text-5xl font-bold xl:ml-5">
          I&apos;m Chisanupong
        </p>
      </div>

      <p className="text-white font-mono text-4xl xl:text-6xl font-bold mt-10">
        Fullstack Developer
      </p>

      <p className="text-white font-mono text-2xl xl:text-4xl mt-10">
        Welcome to my portfolio website!
      </p>
    </div>

    {/* ฝั่งรูป */}
    <div className="flex-1 flex justify-center items-center xl:text-left">
      <img
        src="./profile.JPG"
        alt="Profile Picture"
        className="w-[90%] xl:w-[60%] rounded-full object-cover shadow-lg mx-auto"
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
