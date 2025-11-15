import React from "react";
import Nav from "../components/Nav";
function page() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto gap-10 md:gap-20 justify-between py-10">
        <div className="flex lg:w-1/2 flex-col gap-5 md:items-center justify-center ">
          <div className="w-full max-w-2xl h-24 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 md:px-6 shadow-lg shadow-black/20 relative">
            <div className="flex items-center gap-4">
              <div className=" size-14 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
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
              <div className=" size-14 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
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
              <div className=" size-14 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
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
              <div className=" size-14 md:size-17 rounded-xl bg-white/7.5 border border-white/15 flex items-center justify-center shadow-inner">
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
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-4 md:px-6 shadow-lg shadow-black/20 relative">
          <div className="flex items-center gap-4 mt-5 w-full">
            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shadow-inner">
              <img
                src="/Gmap.jpg"
                alt="Googlemaplogo"
                className="w-14 h-14 rounded-lg"
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

          <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/20 mt-4 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
