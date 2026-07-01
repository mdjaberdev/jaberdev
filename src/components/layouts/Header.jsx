import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "../Container";
import Logo from "../Logo";
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", to: "/", icon: <FiHome />, action: scrollToTop },
    { label: "About", to: "#about", icon: <FiUser /> },
    { label: "Services", to: "#services", icon: <FiCpu /> },
    { label: "Skills", to: "#skills", icon: <FiLayers /> },
    { label: "Projects", to: "#projects", icon: <FiBriefcase /> },
    { label: "Contact", to: "#contact", icon: <FiMail /> },
  ];

  return (
    <header
      className="bg-[#0F172B]/80 backdrop-blur-md py-4 w-full fixed top-0 left-0 z-[999] border-b border-slate-800/40 transition-all duration-300"
      id="header"
    >
      <Container className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link onClick={scrollToTop} to="/" className="relative z-50">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-x-7 text-[15px] text-slate-300 font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={item.to}
                    onClick={item.action || undefined}
                    className="relative py-2 hover:text-[#FE9A00] transition-colors duration-300 group inline-flex items-center gap-x-2"
                  >
                    <span className="text-[17px] text-slate-400 group-hover:text-[#FE9A00] transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FE9A00] transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-x-4">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/30 transition-all duration-300"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <button
            aria-label="Toggle Menu"
            className="lg:hidden text-slate-300 text-3xl cursor-pointer relative z-[10000] p-1.5 rounded-xl bg-slate-900/30 border border-slate-800/60 focus:outline-none transition-transform duration-300 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="text-[#FE9A00]" /> : <HiMenu />}
          </button>
        </div>
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-[290px] h-screen bg-[#0F172B]/85 backdrop-blur-xl border-l border-white/10 p-6 pt-20 pb-8 shadow-[-10px_0_40px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-in-out flex flex-col justify-between z-[9999] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close Menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-[#FE9A00] text-xl p-2 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <HiX />
          </button>

          <ul className="flex flex-col gap-y-2.5 mt-6 flex-1 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
            {menuItems.map((item, index) => (
              <li key={index}>
                <HashLink
                  smooth
                  to={item.to}
                  onClick={() => {
                    if (item.action) item.action();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-x-3.5 px-4 py-3 text-slate-300 font-medium text-[15px] rounded-xl border border-transparent hover:text-white hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/20 transition-all duration-300 group"
                >
                  <span className="text-xl text-slate-400 group-hover:text-[#FE9A00] transition-colors duration-300 flex items-center justify-center min-w-[24px]">
                    {item.icon}
                  </span>
                  <span className="tracking-wide">{item.label}</span>
                </HashLink>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 mt-auto mb-2">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#FE9A00]/20 hover:border-[#FE9A00]/30 transition-all duration-300 text-sm font-medium"
            >
              <BsGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#0077B5] hover:bg-[#0077B5]/20 hover:border-[#0077B5]/30 transition-all duration-300 text-sm font-medium"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
