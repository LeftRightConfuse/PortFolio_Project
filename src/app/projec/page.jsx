import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

function Page() {
  return (
    <main>
      <section className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-8 lg:px-10 py-12">
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
          <span className="px-3 text-4xl sm:text-5xl lg:text-6xl font-mono font-bold">
            Projects
          </span>
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-10 pb-24 space-y-16 sm:space-y-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                Booking
              </h3>
              <div className="mt-5 flex gap-3 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
                {["MongoDB", "Express", "Node.js", "React"].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                A web application that allows users to book classrooms, meeting
                rooms, and laboratories. It features a user-friendly interface
                that simplifies room selection and booking management.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="https://github.com/nnimkanSong/Project_Webapp.git"
                  target="_blank"
                  className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white/10 transition"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.figma.com/design/iES6iQF3mBUbWM1Gw5PNwi/PROJECT-Room-Booking-System?node-id=0-1&t=7tcyvC24IUCLVg9i-1"
                  target="_blank"
                  className="font-mono group inline-flex items-center gap-2 relative"
                >
                  View Figma
                  <FiExternalLink className="h-4 w-4" />
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                <div className="flex items-center gap-3 rounded-full border border-white px-4 py-2">
                  <span className="font-mono text-sm">Progress</span>
                  <div className="h-5 w-56 lg:w-64 rounded-full bg-gray-700">
                    <div className="h-5 w-[70%] rounded-full bg-green-500 text-center text-xs font-mono leading-5">
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first md:order-none flex justify-center">
              <img
                src="./bookinglogin.png"
                alt="Booking login"
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-white/20 bg-white/10 px-6 py-6 shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24">
            <div className="flex justify-center">
              <img
                src="./smartbin.png"
                alt="Smartbin"
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-white/20 bg-white/10 px-6 py-6 shadow-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                Smartbin
              </h3>
              <div className="mt-5 flex gap-3 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
                {["Python", "Node.js","Express", "Streamlit", "MongoDB"].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                An automated waste-sorting and rewards system that identifies
                trash types, tracks user deposits, and awards points in real
                time. A Streamlit dashboard visualizes users and per-category
                waste volumes from a PostgreSQL database.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="https://github.com/LeftRightConfuse/Smartbin_Project.git"
                  target="_blank"
                  className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white/10 transition"
                >
                  GitHub
                </Link>
                <Link
                  href="https://leftrightconfuse-smartbin-project-dashboarddashboard-app-dapkkk.streamlit.app/"
                  target="_blank"
                  className="font-mono group inline-flex items-center gap-2 relative"
                >
                  View project
                  <FiExternalLink className="h-4 w-4" />
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                <div className="flex items-center gap-3 rounded-full border border-white px-4 py-2">
                  <span className="font-mono text-sm">Progress</span>
                  <div className="h-5 w-56 lg:w-64 rounded-full bg-gray-700">
                    <div className="h-5 w-[60%] rounded-full bg-green-500 text-center text-xs font-mono leading-5">
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                CE Website
              </h3>
              <div className="mt-5 flex gap-3 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
                {["HTML", "CSS", "JavaScript", "Python"].map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                I worked with my classmates to create a department website that
                displays students. My role focused on Front-end development,
                where I built the UI for listing and presenting student details
                in a responsive, user-friendly way.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="https://github.com/WaSaBiTH/CE-03Web.git"
                  target="_blank"
                  className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white hover:bg-white/10 transition"
                >
                  GitHub
                </Link>
                <div className="flex items-center gap-3 rounded-full border border-white px-4 py-2">
                  <span className="font-mono text-sm">Progress</span>
                  <div className="h-5 w-56 lg:w-64 rounded-full bg-gray-700">
                    <div className="h-5 w-full rounded-full bg-green-500 text-center text-xs font-mono leading-5">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first md:order-none flex justify-center">
              <img
                src="./CEmember.png"
                alt="CEmember Website"
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-white/20 bg-white/10 px-6 py-6 shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
