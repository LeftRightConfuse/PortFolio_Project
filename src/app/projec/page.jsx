import React from 'react'
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

function page() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
        <div className="flex items-center w-full max-w-6xl mx-auto py-4">
          <div
            className="flex-1 h-px"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
            }}
          ></div>
          <span className="px-6 text-5xl font-mono font-bold text-white">
            Projects
          </span>
          <div
            className="flex-1 h-px"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
            }}
          ></div>
        </div>

        <div className="mt-30 text-white flex m-auto">
          <div className=" text-grey-200 basis-[60%] ml-40">
            <p className="text-3xl font-mono font-bold">Booking</p>
            <div className="text-xl flex items-center gap-10 h-20">
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                MongoDB
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Express
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Node.js
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                React
              </span>
            </div>
            <p className="mt-5 text-gray-300 font-mono text-xl">
              A web application that allows users to book classrooms, meeting
              rooms
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              and laboratories. It features a user-friendly interface that
              simplifies
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              room selection and booking management.
            </p>
            <div className="mt-5 flex gap-5">
              <Link
                href="https://github.com/nnimkanSong/Project_Webapp.git"
                target="_blank"
                className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border border-white text-white bg-transparent
                hover:bg-blue-500/10 active:bg-blue-500/20
                transition-colors duration-200"
              >
                GitHub
              </Link>
              <Link
                href="https://www.figma.com/design/iES6iQF3mBUbWM1Gw5PNwi/PROJECT-Room-Booking-System?node-id=0-1&t=7tcyvC24IUCLVg9i-1"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-white font-medium relative"
              >
                View Figma
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="ml-10 w-96 gap-5 px-5 py-2 rounded-full flex border border-white">
                <p className="font-mono">Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-6 items-center">
                  <div
                    className="bg-green-500 h-6 rounded-full text-center font-mono"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-white basis-[40%]">
            <img
              src="./bookinglogin.png"
              alt="bookinglogin Picture"
              className="w-[70%] object-cover px-6 py-6 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            />
          </div>
        </div>
        <div className="mt-50 text-white flex m-auto">
          <div className=" text-white basis-[40%] ml-40 ">
            <img
              src="./smartbin.png"
              alt="smartbin Picture"
              className="w-[70%] object-cover px-6 py-6 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            />
          </div>
          <div className=" text-grey-200 basis-[60%] ">
            <p className="text-3xl font-mono font-bold">Smartbin</p>
            <div className="text-xl flex items-center gap-10 h-20">
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Python
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Node.js
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Streamlit
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Postgresql
              </span>
            </div>
            <p className="mt-5 text-gray-300 font-mono text-xl">
              An automated waste-sorting and rewards system that identifies
              trash types,
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              tracks user deposits, and awards points in real time. A Streamlit
              dashboard
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              visualizes users and per-category waste volumes from a PostgreSQL
              database.
            </p>
            <div className="mt-5 flex gap-5">
              <Link
                href="https://github.com/LeftRightConfuse/Smartbin_Project.git"
                target="_blank"
                className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full
                border border-white text-white bg-transparent
                hover:bg-blue-500/10 active:bg-blue-500/20
                transition-colors duration-200"
              >
                GitHub
              </Link>
              <Link
                href="https://leftrightconfuse-smartbin-project-dashboarddashboard-app-dapkkk.streamlit.app/"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-white font-medium relative"
              >
                View project
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="ml-10 w-96 gap-5 px-5 py-2 rounded-full flex border border-white">
                <p className="font-mono">Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-6 items-center">
                  <div
                    className="bg-green-500 h-6 rounded-full text-center font-mono"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30 text-white flex m-auto">
          <div className=" text-grey-200 basis-[60%] ml-40">
            <p className="text-3xl font-mono font-bold">CE Website</p>
            <div className="text-xl flex items-center gap-10 h-20">
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                HTMLS
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                CSS
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Javascripts
              </span>
              <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                Python
              </span>
            </div>
            <p className="mt-5 text-gray-300 font-mono text-xl">
              I worked with my classmates to create a department website that
              displays student.
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              My role focused on Front-end development, where I built the user
              interface
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              for list and presenting student details in a responsive and
              user-friendly way.
            </p>
            <div className="mt-5 flex gap-5">
              <Link
                href="https://github.com/WaSaBiTH/CE-03Web.git"
                target="_blank"
                className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border border-white text-white bg-transparent
                hover:bg-blue-500/10 active:bg-blue-500/20
                transition-colors duration-200"
              >
                GitHub
              </Link>
              <div className="ml-10 w-96 gap-5 px-5 py-2 rounded-full flex border border-white">
                <p className="font-mono">Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-6 items-center">
                  <div
                    className="bg-green-500 h-6 rounded-full text-center font-mono"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-white basis-[40%]">
            <img
              src="./CEmember.png"
              alt="CEmember Website Picture"
              className="w-[70%] object-cover px-6 py-6 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
