import React from 'react'
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

function page() {
  return (
    <main>
      <section className="text-2xl font-Poppins flex items-center justify-center gap-15 h-20 bg-gray-900">
        <div
          className="w-full h-px max-w-6xl mx-auto py-1"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          HTMLS
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          CSS
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Javascript
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          React
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Github
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Next.js
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Python
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          SQL
        </span>
        <div
          className="w-full h-px max-w-6xl mx-auto py-1"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
      </section>
      <section className="flex h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 py-10 px-10">
        <div className="flex m-auto text-white w-full">
          <div className="basis-[40%]">
            <div className="ml-30 flex items-center">
              <img
                src="./webdeslogo.jpg"
                alt="Website Design Picture"
                className="w-[15%] rounded-full object-cover shadow-lg"
              />
              <p className="text-2xl font-mono font-bold ml-10">
                Website Design
              </p>
            </div>
            <div className="ml-30 flex mt-20 items-center">
              <img
                src="./webdevlogo.jpg"
                alt="Website Development Picture"
                className="w-[15%] rounded-full object-cover shadow-lg"
              />
              <p className="text-2xl font-mono font-bold ml-10">
                Website Development
              </p>
            </div>
          </div>
          <div className="basis-[60%] pl-10">
            <p className="text-white font-mono font-bold text-5xl">About me</p>
            <p className="mt-10 text-gray-300 font-mono text-xl">
              I started my journey as a developer by practicing HTML and CSS,
              which sparked
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              my passion for web development. As I explored further, I
              experimented with
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              projects and gradually advanced my skills. Eventually, I learned
              and applied
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              frameworks such as React and Next.js, which enabled me to develop
              this website.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
