import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "../../components/ui/shadcn-io/sparkles/index";
import { BackgroundBeamsWithCollision } from "../../components/ui/shadcn-io/background-beams-with-collision/index";
import { FiArrowUpRight } from "react-icons/fi";

function page() {
  return (
    <main className="w-full h-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
      <BackgroundBeamsWithCollision>
        <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r ">
          <div className=" flex items-center w-full max-w-6xl mx-auto ">
            <div
              className="flex-1 h-px"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
              }}
            ></div>
            <span className="text-6xl font-mono font-bold text-white">
              Contacts
            </span>
            <div
              className="flex-1 h-px"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
              }}
            ></div>
          </div>
          <div className="flex flex-col xl:flex-row items-center w-full max-w-6xl mx-auto gap-20 justify-between py-10">
            <div className="flex w-1/2 flex-col gap-5 items-center justify-center">
              <div className="w-full max-w-2xl h-24 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
                <div className="flex items-center gap-4">
                  <div className=" ize-12 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
                    <img
                      src="/githublogo.jpg"
                      alt="Githublogo"
                      className="w-14 h-14 rounded-xl"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold leading-tight">
                      Github
                    </span>
                    <Link
                      href="https://github.com/LeftRightConfuse"
                      className="text-gray-300/95 hover:text-white transition-colors text-sm md:text-base"
                    >
                      LeftRightConfuse
                    </Link>
                  </div>
                </div>

                <Link
                  href="https://github.com/LeftRightConfuse"
                  className="group inline-flex items-center justify-center size-9 md:size-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/15
                      transition-all duration-200
                      shadow-sm ml-20
                    "
                  aria-label="Open Github"
                >
                  <FiArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="w-full max-w-2xl h-24 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
                <div className="flex items-center gap-4">
                  <div className=" ize-12 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
                    <img
                      src="/Gmail.jpg"
                      alt="Gmaillogo"
                      className="w-14 h-14 rounded-xl"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold leading-tight">
                      Gmail
                    </span>
                    <Link
                      href="https://mail.google.com/"
                      className="text-gray-300/95 hover:text-white transition-colors text-sm md:text-base"
                    >
                      66200059@kmitl.ac.th
                    </Link>
                  </div>
                </div>

                <Link
                  href="https://mail.google.com/"
                  className="group inline-flex items-center justify-center size-9 md:size-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/15
                      transition-all duration-200
                      shadow-sm ml-20
                    "
                  aria-label="Open Gmail"
                >
                  <FiArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="w-full max-w-2xl h-24 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
                <div className="flex items-center gap-4">
                  <div className=" ize-12 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
                    <img
                      src="/facebookicon.jpg"
                      alt="facebooklogo"
                      className="w-14 h-14 rounded-xl"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold leading-tight">
                      Facebook
                    </span>
                    <Link
                      href="https://www.facebook.com/mickeynon2580"
                      className="text-gray-300/95 hover:text-white transition-colors text-sm md:text-base"
                    >
                      Chisanupong Ngamnoi
                    </Link>
                  </div>
                </div>

                <Link
                  href="https://www.facebook.com/mickeynon2580"
                  className="group inline-flex items-center justify-center size-9 md:size-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/15
                      transition-all duration-200
                      shadow-sm ml-20
                    "
                  aria-label="Open Facebook"
                >
                  <FiArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              <div className="w-full max-w-2xl h-24 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
                <div className="flex items-center gap-4">
                  <div className=" ize-12 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
                    <img
                      src="/Instagram.jpg"
                      alt="instagramlogo"
                      className="w-14 h-14 rounded-xl"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold leading-tight">
                      Instagram
                    </span>
                    <Link
                      href="https://www.instagram.com/ch1sxnu/"
                      className="text-gray-300/95 hover:text-white transition-colors text-sm md:text-base"
                    >
                      ch1sxnu
                    </Link>
                  </div>
                </div>

                <Link
                  href="https://www.instagram.com/ch1sxnu/"
                  className="group inline-flex items-center justify-center size-9 md:size-10 rounded-full
                      bg-white/10 hover:bg-white/20
                      border border-white/15
                      transition-all duration-200
                      shadow-sm ml-20
                    "
                  aria-label="Open Instagram"
                >
                  <FiArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="w-1/2 max-w-2xl h-full flex justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-center gap-4 mt-5">
                  <div className="size-14 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
                    <img
                      src="/Gmap.jpg"
                      alt="Googlemaplogo"
                      className="w-14 h-14 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold leading-tight">
                      GoogleMap
                    </span>
                    <Link
                      href="https://maps.app.goo.gl/3rsPYZLkMenEw6pQA"
                      className="text-gray-300/95 hover:text-white transition-colors text-sm md:text-base"
                    >
                      Ron Thong, Bang Saphan, Prachuap Khiri Khan 77230
                    </Link>
                  </div>
                </div>

                <div
                  className="w-full aspect-video
                rounded-2xl overflow-hidden
                border border-white/10
                shadow-lg shadow-black/20 m-6"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125196.80740161732!2d99.31018002707592!3d11.305429247372285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30feda3ed6a7fd69%3A0x40223bc2c38110!2z4LiV4Liz4Lia4Lil4Lij4LmI4Lit4LiZ4LiX4Lit4LiHIOC4reC4s-C5gOC4oOC4reC4muC4suC4h-C4quC4sOC4nuC4suC4mSDguJvguKPguLDguIjguKfguJrguITguLXguKPguLXguILguLHguJnguJjguYw!5e0!3m2!1sth!2sth!4v1758464195201!5m2!1sth!2sth"
                    className="w-full h-full "
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
}

export default page;
