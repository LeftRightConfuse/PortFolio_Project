import Nav from '../app/components/Nav';

export default function Home() {
  return (
    <div className='content'>
      <Nav />
      {/* container หลัก ใช้ flex */}
      <div className="flex h-screen w-full bg-gradient-to-r from-gray-600 from-gray-70 from-gray-900 py-10 px-10">
        
        {/* ฝั่งซ้าย (ข้อความ) */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative flex items-center">
            <p className="text-white font-mono text-6xl font-bold relative z-10 pl-20">Hello</p>
            <div className="absolute left-66 top-10 w-2.5 h-2.5 bg-blue-500 rounded-full z-0"></div>
          </div>

          <div className="flex items-center mt-10">
            <p className="text-blue-600 text-4xl font-bold mr-5">______</p>
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

        {/* ฝั่งขวา (รูป) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./profile.JPG"
            alt="Profile Picture"
            className="w-[60%] rounded-full object-cover shadow-lg"/>
        </div>
      </div>
      <div className="text-2xl font-Poppins flex items-center justify-center gap-15 h-20 bg-gray-900">
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
      </div>
      <div className="flex h-screen w-full bg-gradient-to-r from-gray-600 from-gray-70 from-gray-900 py-10 px-10">
        <div className="flex1 flex m-auto text-white">
          <div className="block w-full">
            <div className='flex items-center'>
              <img
                src="./webdeslogo.png"
                alt="Website Design Picture"
                className="w-[8%] rounded-full object-cover shadow-lg"/>
              <p className='text-2xl font-mono font-bold ml-10'>Website Design</p>
            </div>
            <div className='flex mt-20 items-center'>
              <img
                src="./webdevlogo.jpg"
                alt="Website Design Picture"
                className="w-[8%] rounded-full object-cover shadow-lg"/>
              <p className='text-2xl font-mono font-bold ml-10'>Website Development</p>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}
