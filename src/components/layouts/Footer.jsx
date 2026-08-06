import React from "react";
import Container from "../Container";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  const whatsappNumber = "8801811956107";
  const message = "Hello Jaber! I visited your website and want to connect.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-slate-50 dark:bg-[#0F172B] w-full relative border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
      <Container className="w-full px-4 xl:w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 text-center sm:text-left">
          {/* Logo */}
          <Link onClick={scrollToTop} to="/">
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
              className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mdjaber.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Send Email"
              className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-[#EA4335] hover:bg-[#EA4335]/10 hover:border-[#EA4335]/30 transition-all duration-300 text-lg shadow-inner"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </Container>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] h-14 w-14 flex items-center justify-center rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-white/10"
          title="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping duration-[1500ms] -z-10"></span>
          <span className="absolute inset-0 scale-105 rounded-full bg-[#25D366]/20 animate-pulse -z-10"></span>

          <FaWhatsapp className="text-white text-3xl transition-transform duration-500 group-hover:rotate-[360px]" />
          <span className="absolute right-16 bg-white dark:bg-slate-950/90 text-slate-900 dark:text-white text-xs font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 border border-slate-200 dark:border-slate-800/80 shadow-2xl backdrop-blur-md tracking-wide">
            Let's Chat! 💬
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
