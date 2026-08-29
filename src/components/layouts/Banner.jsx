import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { Typewriter } from "react-simple-typewriter";
import { HashLink } from "react-router-hash-link";
import { FiDownload } from "react-icons/fi";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative overflow-hidden bg-white dark:bg-[#0F172B]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#FE9A00]/5 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE9A00]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="w-full py-36 md:py-44 lg:py-52 flex items-center justify-center min-h-screen relative z-10">
        <Container className="w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-[950px] mx-auto">
            <span className="text-[#FE9A00] text-xs lg:text-sm font-bold tracking-[0.25em] uppercase mb-5 px-4 py-1.5 bg-[#FE9A00]/5 border border-[#FE9A00]/10 rounded-full inline-block animate-pulse">
              Welcome to my portfolio
            </span>
            <h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 tracking-tight pb-3">
              Hi there, I'm
            </h2>
            <h1 className="text-[#FE9A00] font-bold font-Poppins text-[36px] sm:text-[56px] lg:text-[70px] tracking-tight leading-[1.15] h-[100px] sm:h-[130px] lg:h-[180px] flex items-center justify-center">
              <Typewriter
                words={["Md Jaber Hossain", "Front-end Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <p className="text-[16px] lg:text-[19px] text-slate-600 dark:text-[#90A1B9] mt-6 pb-10 max-w-[700px] leading-relaxed">
              A passionate Frontend Developer from Bangladesh, dedicated to
              building responsive, modern, and high-performance web
              applications. Always eager to learn new technologies and turn
              creative ideas into exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <HashLink smooth to="#contact" className="w-full sm:w-auto">
                <Button
                  btnText="Hire Me"
                  className="w-full sm:w-auto justify-center"
                />
              </HashLink>
              <a
                href="/resumeJaber.pdf"
                download="resumeJaber.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#FE9A00] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white font-bold rounded-xl bg-slate-100 dark:bg-slate-900/20 hover:bg-[#FE9A00]/5 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(254,154,0,0.1)] group"
              >
                <FiDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
