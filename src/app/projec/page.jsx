"use client";
import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  SiMongodb, SiExpress, SiNodedotjs, SiReact, SiFigma,
  SiPython, SiStreamlit, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";

export default function ProjectsSection() {
  return (
    <main>
      <section className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white py-20">
        <motion.div
          className="mx-auto flex w-full max-w-7xl items-center gap-6 px-8 lg:px-10 py-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
          <span className="px-3 text-4xl sm:text-5xl lg:text-6xl font-mono font-bold">
            Featured</span> <span className="px-3 text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-emerald-400">Projects
          </span>
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
        </motion.div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-10 py-15 pb-24 space-y-24">
          <motion.div
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.65 }}
            whileHover={{ scale: 1.015, y: -2 }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                Room Booking System
              </h3>

              <div className="mt-5 flex gap-3 flex-wrap">
                <Tag icon={<SiMongodb color="#47A248" />} label="MongoDB" />
                <Tag icon={<SiExpress color="#ffffff" />} label="Express" />
                <Tag icon={<SiNodedotjs color="#68A063" />} label="Node.js" />
                <Tag icon={<SiReact color="#61DAFB" />} label="React" />
                <Tag
                  icon={<SiFigma color="#F24E1E" />}
                  label={
                    <Link
                      href="https://www.figma.com/design/iES6iQF3mBUbWM1Gw5PNwi/PROJECT-Room-Booking-System"
                      target="_blank"
                    >
                      Figma
                    </Link>
                  }
                  external
                />
              </div>

              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                A web application that allows users to book classrooms, meeting
                rooms, and laboratories. It features a user-friendly interface
                that simplifies room selection and booking management.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <HoverButton href="https://github.com/nnimkanSong/Project_Webapp.git">
                  GitHub
                </HoverButton>
                <HoverLink href="https://www.kmitl-rbs.online/">
                  View project
                </HoverLink>
              </div>
            </div>

            <div className="order-first md:order-none flex justify-center">
              <motion.img
                src="./Booking.png"
                alt="Booking login"
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-emerald-500/10 bg-white/5 px-6 py-6 
                           shadow-[0_0_25px_rgba(34,197,94,0.15)] backdrop-blur-xl transition-all duration-300"
              />
            </div>
          </motion.div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <motion.div
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.65 }}
            whileHover={{ scale: 1.015, y: -2 }}
          >
            <div className="flex justify-center">
              <motion.img
                src="./smartbin.png"
                alt="Smartbin"
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-sky-400/10 bg-white/5 px-6 py-6 
                           shadow-[0_0_25px_rgba(56,189,248,0.15)] backdrop-blur-xl transition-all duration-300"
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                Smartbin
              </h3>

              <div className="mt-5 flex gap-3 flex-wrap">
                <Tag icon={<SiPython color="#3776AB" />} label="Python" />
                <Tag icon={<SiNodedotjs color="#68A063" />} label="Node.js" />
                <Tag icon={<SiExpress color="#ffffff" />} label="Express" />
                <Tag icon={<SiStreamlit color="#FF4B4B" />} label="Streamlit" />
                <Tag icon={<SiMongodb color="#47A248" />} label="MongoDB" />
              </div>

              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                An automated waste-sorting and rewards system that identifies
                trash types, tracks user deposits, and awards points in real
                time. A Streamlit dashboard visualizes users and per-category
                waste volumes from a MongoDB database.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <HoverButton href="https://github.com/LeftRightConfuse/Smartbin_Project.git">
                  GitHub
                </HoverButton>
                <HoverLink href="https://leftrightconfuse-smartbin-project-dashboarddashboard-app-dapkkk.streamlit.app/">
                  View project
                </HoverLink>
              </div>
            </div>
          </motion.div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

          <motion.div
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 xl:gap-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.65 }}
            whileHover={{ scale: 1.015, y: -2 }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">
                CE Website
              </h3>

              <div className="mt-5 flex gap-3 flex-wrap">
                <Tag icon={<SiHtml5 color="#E44D26" />} label="HTML" />
                <Tag icon={<SiCss3 color="#1572B6" />} label="CSS" />
                <Tag icon={<SiJavascript color="#F7DF1E" />} label="JavaScript" />
                <Tag icon={<SiPython color="#3776AB" />} label="Python" />
              </div>

              <p className="mt-5 text-gray-300 font-mono text-base sm:text-lg lg:text-xl leading-relaxed">
                I worked with my classmates to create a department website that
                displays students. My role focused on Front-end development,
                where I built the UI for listing and presenting student details
                in a responsive, user-friendly way.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <HoverButton href="https://github.com/WaSaBiTH/CE-03Web.git">
                  GitHub
                </HoverButton>
              </div>
            </div>

            <div className="order-first md:order-none flex justify-center">
              <motion.img
                src="./CEmember.png"
                alt="CEmember Website"
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-md lg:max-w-xl rounded-3xl border border-white/20 bg-white/5 px-6 py-6 
                           shadow-[0_0_25px_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const Tag = ({ icon, label, external }) => (
  <span
    className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md 
               border border-white/20 shadow-md transition-all duration-300 
               hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:border-emerald-500/30"
  >
    {icon}
    <span className="font-mono text-sm">{label}</span>
    {external && <FiExternalLink className="h-4 w-4 opacity-70" />}
  </span>
);

const HoverButton = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white 
               hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
  >
    {children}
  </Link>
);

const HoverLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="font-mono group inline-flex items-center gap-2 relative"
  >
    {children}
    <FiExternalLink className="h-4 w-4" />
    <span className="absolute left-0 -bottom-1 h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
  </Link>
);
