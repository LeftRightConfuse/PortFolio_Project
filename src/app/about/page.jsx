import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

function page() {
  return (
    <main className="bg-gray-950 text-white">
  {/* Skills row */}
  <section className="w-full bg-gray-900">
    <div className="mx-auto max-w-6xl px-4 py-4">
      <div
        className="h-px w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      />
      <div className="mt-4 flex gap-3 xl:gap-10 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:justify-center sm:whitespace-normal">
        {["HTML","CSS","JavaScript","React","GitHub","Next.js","Python","SQL"].map((s)=>(
          <span
            key={s}
            className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sm sm:text-base shadow-lg"
          >
            {s}
          </span>
        ))}
      </div>
      <div
        className="mt-4 h-px w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      />
    </div>
  </section>

  <section
    id="about"
    className="min-h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800
               flex items-center justify-center px-6 scroll-mt-24"
  >
    <div className="mx-auto grid max-w-6xl w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <div className="flex items-center gap-6">
          <img
            src="./webdeslogo.jpg"
            alt="Website Design"
            className="w-16 sm:w-20 rounded-full object-cover shadow-lg"
          />
          <p className="text-xl sm:text-2xl font-mono font-bold">Website Design</p>
        </div>
        <div className="flex items-center gap-6">
          <img
            src="./webdevlogo.jpg"
            alt="Website Development"
            className="w-16 sm:w-20 rounded-full object-cover shadow-lg"
          />
          <p className="text-xl sm:text-2xl font-mono font-bold">Website Development</p>
        </div>
      </div>

      {/* ขวา */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-center lg:text-left">
          About me
        </h2>
        <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed text-center lg:text-left">
          I started my journey as a developer by practicing HTML and CSS, which sparked my passion
          for web development. As I explored further, I experimented with projects and gradually
          advanced my skills. Eventually, I learned and applied frameworks such as React and Next.js,
          which enabled me to develop this website.
        </p>
      </div>
    </div>
  </section>
</main>

  );
}

export default page;
