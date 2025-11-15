"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useSectionVisible from "../hooks/useSectionVisible";

const navVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    y: -60,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const contactVisible = useSectionVisible("contacts", 0.4);

  return (
    <motion.nav
      className="
        fixed top-5 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2
        rounded-2xl border border-white/20
        bg-white/10 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
      "
      variants={navVariants}
      initial="visible"
      animate={contactVisible ? "hidden" : "visible"}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <a href="/" className="text-lg font-bold tracking-wide text-white">
          Ch1sxnu
        </a>


        <ul className="hidden md:flex items-center gap-6">
          {["Home", "About", "Projects", "Contacts"].map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
                className="
                  relative text-white/90 transition hover:text-white
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-indigo-400 after:transition-[width] after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/profile"
            className="
              rounded-xl border border-white/30 bg-white/10 px-4 py-2
              text-sm font-medium text-white shadow-sm
              transition hover:bg-white/20
            "
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="
            inline-flex h-10 w-10 items-center justify-center rounded-xl
            border border-white/25 bg-white/10 text-white md:hidden
          "
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="grid gap-2 px-5 pb-4">
          {["Home", "About", "Projects", "Contacts"].map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
          <a
            href="/Get_Started"
            className="
              mt-1 block rounded-xl border border-white/25 bg-white/10
              px-3 py-2 text-center text-sm font-medium text-white
              hover:bg-white/20
            "
          >
            Get Started
          </a>
        </ul>
      </div>
    </motion.nav>
  );
}
