import { useState } from "react";
import Container from "../Container";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../Logo";

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
    { label: "Home", to: "/", action: scrollToTop },
    { label: "About", to: "#about" },
    { label: "Services", to: "#services" },
    { label: "Skills", to: "#skills" },
    { label: "Projects", to: "#projects" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <header
      className="bg-[#0F172B]/80 backdrop-blur-md py-4 w-full fixed top-0 left-0 z-[999] border-b border-slate-800/40 transition-all duration-300"
      id="header"
    >
      <Container className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link onClick={scrollToTop} to="/">
            <Logo />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-8 text-[15px] text-slate-300 font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <HashLink
                    smooth
                    to={item.to}
                    onClick={item.action || undefined}
                    className="relative py-2 hover:text-[#FE9A00] transition-colors duration-300 group inline-block"
                  >
                    {item.label}
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
            className="lg:hidden text-white text-3xl cursor-pointer relative z-50 p-1 focus:outline-none transition-transform duration-300 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="text-[#FE9A00]" /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-[280px] bg-[#0F172B]/95 backdrop-blur-lg border-l border-slate-800/80 p-8 pt-24 shadow-2xl transition-transform duration-500 ease-in-out z-40 flex flex-col justify-between ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-y-6 text-white font-medium text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <HashLink
                  smooth
                  to={item.to}
                  onClick={() => {
                    if (item.action) item.action();
                    setMenuOpen(false);
                  }}
                  className="block py-2 hover:text-[#FE9A00] transition-colors duration-200 border-b border-slate-900/60"
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-x-4 border-t border-slate-800 pt-6 justify-center">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-white transition-colors"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-400 hover:text-[#0077B5] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-30 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </Container>
    </header>
  );
};

export default Header;
