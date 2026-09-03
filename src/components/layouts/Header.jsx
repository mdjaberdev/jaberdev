import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Container from "../common/Container";
import Logo from "../common/Logo";
import ThemeToggle from "../common/ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", to: "home", icon: <FiHome />, isTop: true },
    { label: "About", to: "about", icon: <FiUser /> },
    { label: "Services", to: "services", icon: <FiCpu /> },
    { label: "Skills", to: "skills", icon: <FiLayers /> },
    { label: "Projects", to: "projects", icon: <FiBriefcase /> },
    { label: "Contact", to: "contact", icon: <FiMail /> },
  ];

  return (
    <header className="bg-white/80 dark:bg-[#0F172B]/80 backdrop-blur-md py-4 w-full fixed top-0 left-0 z-[999] border-b border-slate-200 dark:border-slate-800/40 transition-colors duration-300">
      <Container className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <RouterLink onClick={scrollToTop} to="/" className="relative z-50">
            <Logo />
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-x-7 text-[15px] font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.isTop ? (
                    <button
                      onClick={scrollToTop}
                      className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-[#FE9A00] transition-colors duration-300 group inline-flex items-center gap-x-2 cursor-pointer"
                    >
                      <span className="text-[17px] text-slate-500 dark:text-slate-400 group-hover:text-[#FE9A00] transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <ScrollLink
                      activeClass="!text-[#FE9A00] [&>span]:!text-[#FE9A00]"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-[#FE9A00] transition-colors duration-300 group inline-flex items-center gap-x-2 cursor-pointer"
                    >
                      <span className="text-[17px] text-slate-500 dark:text-slate-400 group-hover:text-[#FE9A00] transition-colors duration-300">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-x-3">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <FaLinkedin />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Icon */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle Menu"
              className="text-slate-700 dark:text-slate-300 text-3xl p-1.5 rounded-xl bg-slate-200 dark:bg-slate-900/30 border border-slate-300 dark:border-slate-800/60"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX className="text-[#FE9A00]" /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-[#0F172B] border-b border-slate-200 dark:border-slate-800 shadow-2xl py-6 px-6 lg:hidden flex flex-col gap-4 transition-colors duration-300">
            <ul className="flex flex-col gap-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.isTop ? (
                    <button
                      onClick={scrollToTop}
                      className="w-full flex items-center gap-x-3 py-2.5 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#FE9A00] transition-all font-medium text-left cursor-pointer"
                    >
                      <span className="text-xl text-[#FE9A00]">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ) : (
                    <ScrollLink
                      activeClass="!text-[#FE9A00] bg-slate-100 dark:bg-slate-900"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-x-3 py-2.5 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#FE9A00] transition-all font-medium cursor-pointer"
                    >
                      <span className="text-xl text-[#FE9A00]">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://github.com/mdjaberdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all text-sm font-semibold"
              >
                <BsGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mdjaberdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:text-[#0077B5] transition-all text-sm font-semibold"
              >
                <FaLinkedin className="text-lg text-[#0077B5]" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
