"use client";

import React from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { cinzel } from "../fonts";

const NAV_ITEMS = [
  { id: "home", label: "HOMEPAGE" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contacts", label: "CONTACTS" },
];

const BIG_NAME = "CH1SXNU";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sideIn = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

const glowUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.15 },
  },
};

function Page() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <section className="flex min-h-screen w-full flex-col md:flex-row">
        <div className="relative flex-1 flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 py-10 overflow-hidden">
          <div className="h-px w-full bg-white/20 mb-8 md:mb-10" />

          <motion.div
            className="relative z-10 max-w-5xl space-y-4 leading-none"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <h1 className="text-[12vw] md:text-[6vw] font-black tracking-tight uppercase">
              Start Something
            </h1>
            <h1 className="text-[12vw] md:text-[6vw] font-black tracking-tight uppercase">
              Great Together
            </h1>
          </motion.div>

          <motion.div
            className="relative z-10 mt-10 md:mt-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
          >
            <p className="text-white/60">Created by Chisanupong Ngamnoi</p>
            <p className="text-white/50">Thailand 2025</p>
          </motion.div>

          <motion.div
            className="pointer-events-none select-none absolute inset-x-0 bottom-[-3vw] sm:bottom-[-2vw] md:bottom-[-1vw] flex justify-center"
            variants={glowUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div
              className={`${cinzel.className} relative text-[28vw] sm:text-[24vw] md:text-[18vw] font-black leading-none`}
            >
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-500 opacity-70 blur-3xl" />
              <span className="relative text-neutral-50 mix-blend-screen drop-shadow-[0_0_40px_rgba(56,189,248,0.9)]">
                {BIG_NAME}
              </span>
              <span className="absolute inset-0 translate-y-[20%] scale-y-[1.25] bg-gradient-to-b from-black/0 via-black/70 to-black" />
            </div>
          </motion.div>
        </div>

        <div className="md:hidden w-full px-4 sm:px-6 pb-10 space-y-6">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">
              Contact
            </p>

            <a
              href="tel:0969290002"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 hover:border-sky-400/70 hover:bg-white/10 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300 group-hover:bg-sky-400/20">
                <FiPhone className="text-lg" />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] uppercase tracking-[0.1em] text-white/50">
                  Phone
                </span>
                <span className="text-[14px] font-medium text-white/90">
                  096-929-0002
                </span>
              </span>
            </a>

            <a
              href="mailto:66200059@kmitl.ac.th"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 hover:border-emerald-400/70 hover:bg-white/10 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-300 group-hover:bg-emerald-400/20">
                <FiMail className="text-lg" />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] uppercase tracking-[0.1em] text-white/50">
                  Email
                </span>
                <span className="text-[14px] font-medium text-white/90 break-all">
                  66200059@kmitl.ac.th
                </span>
              </span>
            </a>
          </div>

          <div className="space-y-3 text-[11px] tracking-[0.25em] uppercase">
            <p className="text-white/60">Follow</p>
            <div className="flex items-center gap-4 text-[20px]">
              <Link href="https://github.com/LeftRightConfuse" className="hover:text-white/80">
                <FiGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/cchisanupong-non-015116386/" className="hover:text-white/80">
                <FiLinkedin />
              </Link>
              <Link href="https://www.instagram.com/ch1sxnu/" className="hover:text-white/80">
                <FiInstagram />
              </Link>
              <Link href="https://www.facebook.com/mickeynon2580" className="hover:text-white/80">
                <FiFacebook />
              </Link>
            </div>
          </div>
        </div>

        <motion.aside
          className="hidden md:flex w-full md:w-[260px] lg:w-[300px] border-t md:border-t-0 md:border-l border-white/20 flex-col justify-between py-6 md:py-10 px-6 md:px-8"
          variants={sideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="space-y-4 text-[11px] tracking-[0.25em] uppercase">
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.id} className="group">
                <div className="flex items-center justify-between border-b border-white/15 py-3">
                  <Link
                    href={`#${item.id}`}
                    className="flex-1 flex justify-between items-center"
                  >
                    <span className="text-white/70 group-hover:text-white transition-colors duration-150">
                      {item.label}
                    </span>
                    <span className="text-white/30 group-hover:text-white/70 transition-colors duration-150">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </Link>
                  <span className="ml-3 h-[2px] w-2 bg-white/40 group-hover:w-4 group-hover:bg-white transition-all duration-150" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 mb-8 space-y-3">
            <a
              href="tel:0969290002"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 hover:border-sky-400/70 hover:bg-white/10 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300 group-hover:bg-sky-400/20">
                <FiPhone className="text-lg" />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] uppercase tracking-[0.1em] text-white/50">
                  Phone
                </span>
                <span className="text-[14px] font-medium text-white/90">
                  096-929-0002
                </span>
              </span>
            </a>

            <a
              href="mailto:66200059@kmitl.ac.th"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 hover:border-emerald-400/70 hover:bg-white/10 transition-colors"
            >
              <span className="flex h-10  w-10 items-center justify-center rounded-full bg-white/10 text-emerald-300 group-hover:bg-emerald-400/20">
                <FiMail className="text-lg" />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] uppercase tracking-[0.1em] text-white/50">
                  Email
                </span>
                <span className="text-[14px] font-medium text-white/90 break-all">
                  66200059@kmitl.ac.th
                </span>
              </span>
            </a>
          </div>

          <div className="mt-auto space-y-3 text-[11px] tracking-[0.25em] uppercase">
            <p className="text-white/60">Follow</p>
            <div className="flex items-center gap-4 text-[18px]">
              <Link href="https://github.com/LeftRightConfuse" className="hover:text-white/80">
                <FiGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/cchisanupong-non-015116386/" className="hover:text-white/80">
                <FiLinkedin />
              </Link>
              <Link href="https://www.instagram.com/ch1sxnu/" className="hover:text-white/80">
                <FiInstagram />
              </Link>
              <Link href="https://www.facebook.com/mickeynon2580" className="hover:text-white/80">
                <FiFacebook />
              </Link>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}

export default Page;
