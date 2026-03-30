
import { useState } from "react";
import Container from "../Container";
import Images from "../Images";
import mlogo from "../../assets/gemini.png";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0F172B] py-3 w-full">
      <Container className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <Images imgSrc={mlogo} className="w-20" />
          </Link>

          {/* desktop menu */}
          <ul className="hidden lg:flex gap-x-8 text-[15px] text-white/70 font-medium">
            <li>
              <HashLink smooth to="#banner">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills">
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                Contact
              </HashLink>
            </li>
          </ul>

          {/* social icons */}
          <div className="hidden lg:flex gap-x-5 text-white">
            <a href="https://github.com/mdjaberdev">
              <BsGithub className="hover:text-[#FE9A00] duration-300" />
            </a>

            <a href="https://www.linkedin.com/in/mdjaberdev/">
              <FaLinkedin className="hover:text-[#FE9A00] duration-300" />
            </a>

            <a href="https://facebook.com/mdjaberdev/">
              <BsFacebook className="hover:text-[#FE9A00] duration-300" />
            </a>
          </div>

          {/* mobile menu button */}
          <div
            className="lg:hidden text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-6 border-t border-white/10 pt-6">
            <ul className="flex flex-col gap-y-5 text-white text-center">
              <li>
                <HashLink smooth to="#banner">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#about">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#services">
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#projects">
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;

