"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt, 
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiDocker, 
  SiFigma, 
} from "react-icons/si";


const sectionFadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gridContainer = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Focus on front-end development, UI/UX, and user experience",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E44D26",
        level: "Advanced",
        percent: 90,
        tags: ["Semantic", "SEO", "Accessible"],
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
        level: "Advanced",
        percent: 85,
        tags: ["Responsive", "Flex/Grid", "Animation"],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        level: "Advanced",
        percent: 85,
        tags: ["Utility-first", "Responsive", "Dark Mode"],
      },
      {
        name: "JavaScript (ES6+)",
        icon: FaJs,
        color: "#F7DF1E",
        level: "Intermediate",
        percent: 80,
        tags: ["Async", "DOM", "API"],
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        level: "Intermediate",
        percent: 80,
        tags: ["Hooks", "Components", "State"],
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
        level: "Intermediate",
        percent: 75,
        tags: ["App Router", "SSR", "API Route"],
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Design API, database, and business logic",
    skills: [
      {
        name: "Node.js",
        icon: FaJs,
        color: "#3C873A",
        level: "Intermediate",
        percent: 70,
        tags: ["REST API", "Express", "Middleware"],
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff",
        level: "Intermediate",
        percent: 70,
        tags: ["Routing", "Middleware", "REST API"],
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        level: "Intermediate",
        percent: 70,
        tags: ["Scripting", "Data", "Automation"],
      },
      {
        name: "PostgreSQL / SQL",
        icon: SiPostgresql,
        color: "#336791",
        level: "Intermediate",
        percent: 65,
        tags: ["Query", "ER-Diagram", "Index"],
      },
      {
        name: "MySQL / SQL",
        icon: SiMysql,
        color: "#4479A1",
        level: "Intermediate",
        percent: 60,
        tags: ["Relational", "Query", "Index"],
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Tools used in real workflow",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05033",
        level: "Intermediate",
        percent: 75,
        tags: ["Branching", "Merge", "Rebase"],
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#ffffff",
        level: "Intermediate",
        percent: 75,
        tags: ["PR", "Issues", "Actions"],
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        level: "Intermediate",
        percent: 65,
        tags: ["Container", "Images", "Compose"],
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
        level: "Intermediate",
        percent: 60,
        tags: ["UI Design", "Prototype", "Components"],
      },
      {
        name: "VS Code",
        icon: FaJs,
        color: "#007ACC",
        level: "Daily Driver",
        percent: 85,
        tags: ["Extensions", "Debug", "Terminal"],
      },
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState("frontend");

  const currentCategory =
    CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800"
    >
      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-8 lg:px-10 py-12"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex w-full items-center gap-6">
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
          <span className="text-white px-3 text-4xl sm:text-5xl lg:text-6xl font-mono font-bold">
            About
          </span>
          <span className="text-blue-500 px-3 text-4xl sm:text-5xl lg:text-6xl font-mono font-bold">
            me
          </span>
          <div
            className="h-px flex-1"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149,131,198,0) 1.46%, rgba(149,131,198,.6) 40.83%, rgba(149,131,198,.3) 65.57%, rgba(149,131,198,0) 107.92%)",
            }}
          />
        </div>

        <p className="pt-10 text-xs sm:text-sm md:text-xl text-slate-300/80 text-center leading-relaxed">
          I&apos;m currently studying in my 3rd year at
          <br className="hidden sm:block" />
          King Mongkut&apos;s Institute of Technology Ladkrabang, Chumphon
          Campus
          <br className="hidden sm:block" />
          <span className="text-emerald-300 font-medium block">
            Bachelor of Engineering Program in Computer Engineering
          </span>
        </p>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22c55e33,_transparent_60%),_radial-gradient(circle_at_bottom,_#3b82f633,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="mt-15 flex flex-col gap-4 mb-10 text-center"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-emerald-300/80">
            SKILLS & STACK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Technologies I use regularly
          </h2>
          <p className="text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto">
            Here are the tools and technologies I use most often in my projects
            — from front-end frameworks to back-end systems and deployment
            platforms.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-6"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-4 md:px-6 py-2 text-xs md:text-sm rounded-full transition-all duration-200 
                ${
                  active === cat.id
                    ? "bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-900 shadow-lg shadow-emerald-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8 text-center"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-emerald-300 mb-1">
            {currentCategory.label}
          </h3>
          <p className="text-center text-slate-300/80 text-sm md:text-base">
            {currentCategory.description}
          </p>
        </motion.div>

        <motion.div
          key={currentCategory.id}
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {currentCategory.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={gridItem}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative group rounded-2xl border border-slate-700/70 bg-slate-900/70 backdrop-blur-xl p-4 md:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.9)] flex flex-col items-center justify-center"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-transparent" />

                <div className="relative flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg">
                    <Icon
                      size={28}
                      style={{ color: skill.color }}
                      className="drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
