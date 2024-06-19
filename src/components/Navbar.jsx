import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="my-8 mx-2 flex gap-4 text-2xl items-center justify-center ">
        <a href="https://www.linkedin.com/in/patricio-larriaga-b30724231/">
          <FaLinkedin className="hover:text-violet-400 cursor-pointer" />
        </a>
        <FaGithub className="hover:text-violet-400 cursor-pointer" />
        <a href="https://www.instagram.com/ezequiel_larriaga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <FaInstagram className="hover:text-violet-400 cursor-pointer" />
        </a>
      </div>

      <div className="flex gap-4 text-2xl text-center">
        <div className="md:hidden z-10 cursor-pointer" onClick={toggle}>
          {open ? (
            <FaTimes size={20} color="white" />
          ) : (
            <RxHamburgerMenu size={25} />
          )}
        </div>
        <ul
          className={`${
            open
              ? "text-white opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-y-full"
          } transition-transform absolute top-0 left-0 h-screen w-screen bg-zinc-900/80 flex flex-col items-center justify-center gap-8 text-sm`}
          onClick={() => setOpen(false)}
        >
          <Link to={"home"}>
            <li className="text-center py-1 hover:text-violet-400">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="text-center py-1 hover:text-violet-400">About Me</li>
          </Link>
          <Link to={"/technologies"}>
            <li className="text-center py-1 hover:text-violet-400">
              Technologies
            </li>
          </Link>
          <Link to={"/experience"}>
            <li className=" text-center py-1 hover:text-violet-400">
              Experiences
            </li>
          </Link>
          <Link to={"/projects"}>
            <li className="text-center py-1 hover:text-violet-400">
              Proyectos
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-center py-1 hover:text-violet-400">
              Contact Me
            </li>
          </Link>
        </ul>

        <ul className="hidden md:flex gap-6 text-sm">
          <Link
            to={"home"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className="text-center hover:text-violet-400">Inicio</li>
          </Link>
          <Link
            to={"about"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className="text-center hover:text-violet-400">Sobre Mi</li>
          </Link>
          <Link
            to={"technologies"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-300}
          >
            <li className="text-center hover:text-violet-400">Tecnologias</li>
          </Link>
          <Link
            to={"education"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className=" text-center hover:text-violet-400">Educación</li>
          </Link>
          <Link
            to={"experience"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className=" text-center hover:text-violet-400">Experiencias</li>
          </Link>
          <Link
            to={"projects"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className="text-center hover:text-violet-400">Proyectos</li>
          </Link>
          <Link
            to={"contact"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <li className="text-center hover:text-violet-400">Contacto</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
