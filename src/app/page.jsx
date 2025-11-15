"use client";
import React, { useState } from "react";

import Profile from "./profile/page";
import About from "../app/about/page";
import Projects from "../app/projec/page";
import Contacts from "../app/contacts/page";

import LoaderReveal from "./components/LoaderReveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoaderReveal
          quoteLines={["ยินดีต้อนรับ", "กำลังเตรียมพอร์ตของคุณ..."]}
          footer="KMITL RBS"
          barColor="linear-gradient(to right, #0b0b0b, #111827, #1f2937)"
          bg="#121212"
          onComplete={() => setIsLoading(false)}
        />
      )}

      {!isLoading && (
        <main className="content">
          <section id="home">
            <Profile />
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

        </main>
      )}
    </>
  );
}
