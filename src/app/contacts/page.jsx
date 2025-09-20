import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "../../components/ui/shadcn-io/sparkles/index";
import { BackgroundBeamsWithCollision } from "../../components/ui/shadcn-io/background-beams-with-collision/index";

function page() {
  return (
    <main>
        <BackgroundBeamsWithCollision>
            <section className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
        <div className=" flex items-center w-full max-w-6xl mx-auto py-4">
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
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-row ">
            <img src="/githublogo.jpg" 
            alt="github logo" 
            className="rounded-full w-15 h-15"
            />
            <Link
                href="https://github.com/LeftRightConfuse"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-gray-300 text-xl relative"
              >
                Github
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
          </div>
          <div className="flex flex-row ">
            <img src="/facebookicon.jpg" 
            alt="facebook logo" 
            className="rounded-xl w-13 h-13"
            />
            <Link
                href="https://www.facebook.com/mickeynon2580"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-gray-300 text-xl relative"
              >
                Facebook
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
          </div>
          <div className="flex flex-row ">
            <img src="/Instagram.jpg" 
            alt="facebook logo" 
            className="rounded-xl w-13 h-13"
            />
            <Link
                href="https://www.instagram.com/ch1sxnu/"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-gray-300 text-xl relative"
              >
                Instagram
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
          </div>
          <div className="flex flex-row ">
            <img src="/LINE.jpg" 
            alt="facebook logo" 
            className="rounded-xl w-13 h-13"
            />
            <p className="font-mono ml-5 group inline-flex items-center gap-2 text-gray-300 text-xl relative">LINE</p>
          </div>
          <div className="flex flex-row ">
            <img src="/Gmail.jpg" 
            alt="facebook logo" 
            className="rounded-xl w-13 h-13"
            />
            <p className="font-mono ml-5 group inline-flex items-center gap-2 text-gray-300 text-xl relative">Gmail</p>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </section>
      </BackgroundBeamsWithCollision>
    </main>
        
      
  );
}

export default page;
