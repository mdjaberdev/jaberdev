import React from "react";
import Container from "../common/Container";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import ScrollAndWhatsAppButton from "../common/ScrollAndWhatsAppButton";

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-slate-50 dark:bg-[#0F172B] w-full relative border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <Container className="w-full px-4 xl:w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 text-center sm:text-left">
          {/* Logo */}
          <Link onClick={handleLogoClick} to="/">
            <Logo />
          </Link>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-[15px] font-medium tracking-wide order-3 sm:order-2">
            &copy; 2026{" "}
            <span className="text-slate-900 dark:text-white hover:text-[#FE9A00] transition-colors duration-200">
              Jaber
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 order-2 sm:order-3">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mdjaber.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-[#EA4335] hover:bg-[#EA4335]/10 hover:border-[#EA4335]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </Container>
      <ScrollAndWhatsAppButton />
    </footer>
  );
};

export default Footer;
