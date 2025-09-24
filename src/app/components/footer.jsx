import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <main className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
      <footer
        className=" w-[100%] mx-auto
                 border border-white/20
                 bg-white/10 backdrop-blur-xl
                 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                 text-white "
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/mickeynon2580"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ch1sxnu/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/LeftRightConfuse"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://mail.google.com/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/cchisanupong-non-015116386/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/80">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-white">
                Contact Me
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-white">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
