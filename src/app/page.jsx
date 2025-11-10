"use client";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Nav from "./components/Nav";
import Footer from "./components/footer";
import LoaderReveal from "./components/LoaderReveal";

import About from "../app/about/page";
import Projects from "../app/projec/page";
import Contacts from "../app/contacts/page";

export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done ? (
        <LoaderReveal
          quoteLines={["ยินดีต้อนรับ", "กำลังเตรียมพอร์ตของคุณ..."]}
          footer="KMITL RBS"
          barColor="linear-gradient(to right, #0b0b0b, #111827, #1f2937)"
          bg="#121212"
          onComplete={() => setDone(true)}
        />
      ) : (
        <main className="content">
          <Nav />

          <section
            id="home"
            className="flex flex-col xl:flex-row min-h-screen w-screen
                       bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
                      text-center px-5 py-5"
          >
            <div className="lg:pl-25 flex-1 flex flex-col xl:items-start items-center justify-center">
              <div className="relative flex items-center justify-center xl:justify-start xl:items-start">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white mt-20 font-mono text-4xl md:text-5xl xl:text-6xl font-bold relative z-10 xl:pl-20"
                >
                  Hello
                </motion.p>

                <span
                  aria-hidden
                  className="pointer-events-none absolute left-28.5 top-27 -translate-x-1/2 -translate-y-[35%]
                             w-2 h-2 sm:w-3.5 sm:h-3.5 md:w-2 md:h-2 md:left-37 md:top-29 rounded-full bg-blue-500
                             xl:left-66 xl:top-31 xl:w-2.5 xl:h-2.5"
                />
              </div>

              <div className="mt-10 w-full relative">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-white font-mono text-3xl md:text-4xl xl:text-5xl font-bold xl:mr-20"
                >
                  I&apos;m <span className="text-blue-400">Chisanupong</span>
                </motion.p>

                <div
                  aria-hidden
                  className="mx-auto xl:mx-0 h-[4px] w-28 sm:w-36 bg-blue-500 lg:ml-15 xl:ml-10 lg:w-20 xl:w-28"
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-white font-mono
             text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl
             font-bold mt-8 xl:ml-10
             min-h-[90px] md:min-h-[60px]
             flex items-center justify-center xl:justify-start"
              >
                <span className="block">
                  <Typewriter
                    words={["Fullstack Developer", "Computer Engineering"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-white font-mono text-2xl md:text-3xl xl:text-4xl mt-10 xl:ml-10 xl:mt-15"
              >
                Welcome to my portfolio website!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-10 flex gap-4 justify-center xl:justify-start xl:ml-10"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg
                             hover:shadow-blue-400/50 hover:scale-105
                             transition-transform transition-shadow duration-300 font-semibold
                             outline-none focus:outline-none focus-visible:outline-none"
                >
                  View Projects
                </a>

                <a
                  href="/Resume_Chisanupong.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg
             hover:bg-blue-500/10 hover:shadow-blue-400/40 hover:scale-105
             transition-transform transition-shadow duration-300 font-semibold
             outline-none focus:outline-none focus-visible:outline-none"
                >
                  View Resume
                </a>
              </motion.div>
            </div>

            <div className="flex-1 flex justify-start items-center mt-10 xl:text-left xl:mt-15 relative">
              <div
                className="absolute w-[500px] h-[500px]
                           bg-gradient-to-tr from-blue-500/30 to-purple-600/40
                           rounded-full blur-3xl
                           top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              <motion.img
                src="/profile4.JPG"
                alt="Profile Picture"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 w-[90%] md:w-[50%] rounded-full object-cover mx-auto shadow-[0_0_40px_rgba(59,130,246,0.3)]"
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

          <Footer />
        </main>
      )}
    </>
  );
}
