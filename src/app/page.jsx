import Nav from './components/Nav';
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <main className='content'>
      <Nav />
      <section className="flex h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 py-10 px-10">

        <div className="flex-1 flex flex-col justify-center">
          <div className="relative flex items-center">
            <p className="text-white font-mono text-6xl font-bold relative z-10 pl-20">Hello</p>
            <div className="absolute left-66 top-10 w-2.5 h-2.5 bg-blue-500 rounded-full z-0"></div>
          </div>

          <div className="flex items-center mt-10">
            <p className="text-blue-500 text-4xl font-bold mr-5">______</p>
            <p className="text-white font-mono text-5xl font-bold">
              I'm Chisanupong
            </p>
          </div>

          <p className="text-white font-mono text-6xl font-bold mt-10 pl-20">
            Fullstack Developer
          </p>  

          <p className="text-white font-mono text-4xl mt-10">
            Welcome to my portfolio website!
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="./profile.JPG"
            alt="Profile Picture"
            className="w-[60%] rounded-full object-cover shadow-lg"/>
        </div>
      </section>
      <section className="text-2xl font-Poppins flex items-center justify-center gap-15 h-20 bg-gray-900">
        <div className="w-full h-px max-w-6xl mx-auto py-1"
              style={{
                backgroundImage:
                    "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
                }}
              ></div>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          HTMLS
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          CSS
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Javascript
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          React
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Github
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Next.js
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          Python
        </span>
        <span className="px-4 py-2 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
          SQL
        </span>
        <div className="w-full h-px max-w-6xl mx-auto py-1"
              style={{
                backgroundImage:
                    "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
                }}
              ></div>
      </section>
      <section className="flex h-screen w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 py-10 px-10">
        <div className="flex m-auto text-white w-full">
          <div className="basis-[40%]">
            <div className="ml-30 flex items-center">
              <img
                src="./webdeslogo.jpg"
                alt="Website Design Picture"
                className="w-[15%] rounded-full object-cover shadow-lg"
              />
              <p className="text-2xl font-mono font-bold ml-10">Website Design</p>
            </div>
            <div className="ml-30 flex mt-20 items-center">
              <img
                src="./webdevlogo.jpg"
                alt="Website Development Picture"
                className="w-[15%] rounded-full object-cover shadow-lg"
              />
              <p className="text-2xl font-mono font-bold ml-10">Website Development</p>
            </div>
          </div>
          <div className="basis-[60%] pl-10">
            <p className="text-white font-mono font-bold text-5xl">About me</p>
            <p className="mt-10 text-gray-300 font-mono text-xl">
              I started my journey as a developer by practicing HTML and CSS, which sparked 
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              my passion for web development. As I explored further, I experimented with
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              projects and gradually advanced my skills. Eventually, I learned and applied
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">  
              frameworks such as React and Next.js, which enabled me to develop this website.
            </p>
          </div>
        </div>
      </section>
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
            <p className='text-3xl font-mono font-bold'>Booking</p>
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
              A web application that allows users to book classrooms, meeting rooms
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              and laboratories. It features a user-friendly interface that simplifies
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              room selection and booking management.
            </p>
            <div className='mt-5 flex gap-5'>
              <Link
                href="https://github.com/nnimkanSong/Project_Webapp.git"
                target="_blank"
                className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border border-white text-white bg-transparent
                hover:bg-blue-500/10 active:bg-blue-500/20
                transition-colors duration-200">
                GitHub
              </Link>
              <Link
                href="https://youtu.be/dQw4w9WgXcQ?si=3x2QGMfIiYHhuqbx"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-white font-medium relative"
              >
                View project
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="ml-10 w-96 gap-5 px-5 py-2 rounded-full flex border border-white">
                <p className='font-mono'>Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-6 items-center">
                  <div
                    className="bg-green-500 h-6 rounded-full text-center font-mono"
                    style={{ width: "70%" }}
                  >70%
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
          <div className=" text-white basis-[40%] ml-40 " >
              <img
              src="./smartbin.png"
              alt="smartbin Picture"
              className="w-[70%] object-cover px-6 py-6 rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            />
          </div>
          <div className=" text-grey-200 basis-[60%] ">
            <p className='text-3xl font-mono font-bold'>Smartbin</p>
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
              A web application that allows users to book classrooms, meeting rooms
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              and laboratories. It features a user-friendly interface that simplifies
            </p>
            <p className="mt-3 text-gray-300 font-mono text-xl">
              room selection and booking management.
            </p>
            <div className='mt-5 flex gap-5'>
              <Link
                href="https://github.com/nnimkanSong/Project_Webapp.git"
                target="_blank"
                className="font-mono inline-flex items-center gap-2 px-5 py-2 rounded-full
                border border-white text-white bg-transparent
                hover:bg-blue-500/10 active:bg-blue-500/20
                transition-colors duration-200">
                GitHub
              </Link>
              <Link
                href="https://youtu.be/dQw4w9WgXcQ?si=3x2QGMfIiYHhuqbx"
                target="_blank"
                className="font-mono ml-5 group inline-flex items-center gap-2 text-white font-medium relative"
              >
                View project
                <FiExternalLink className="w-4 h-4" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="ml-10 w-96 gap-5 px-5 py-2 rounded-full flex border border-white">
                <p className='font-mono'>Progress</p>
                <div className="w-full bg-gray-700 rounded-full h-6 items-center">
                  <div
                    className="bg-green-500 h-6 rounded-full text-center font-mono"
                    style={{ width: "60%" }}
                  >60%
                  </div>
                </div>
              </div>
            </div>         
          </div>
        </div>                
      </section>
    </main>
      
  );
}
