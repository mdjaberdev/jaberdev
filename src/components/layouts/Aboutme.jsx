import React from "react";
import Container from "../Container";
import Images from "../Images";
import jaber from "../../assets/githubImage.jpg";
import Button from "../Button";
import { FiAward, FiCheckCircle } from "react-icons/fi";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-[#0F172B]"
    >
      <div className="py-20 lg:py-32 w-full overflow-hidden border-t border-slate-200 dark:border-slate-800/50 relative z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FE9A00]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <Container className="w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto px-4">
          <div className="lg:flex lg:justify-between items-center lg:gap-x-16">
            <div className="left lg:w-[42%] flex justify-center relative mb-12 lg:mb-0 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FE9A00]/15 to-transparent blur-3xl rounded-full opacity-70 "></div>

              <div className="relative p-2.5 bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-full backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ">
                <div className="absolute inset-0 rounded-full border border-[#FE9A00]/20 animate-pulse scale-[1.015] pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full border-3 border-[#FE9A00]/30 animate-ping [animation-duration:1300ms] pointer-events-none"></div>

                <Images
                  imgSrc={jaber}
                  className="w-[280px] sm:w-[340px] lg:w-full max-w-md object-contain rounded-xl relative z-10"
                />
              </div>
            </div>

            <div className="right lg:w-[53%] text-center lg:text-left">
              <span className="text-[#FE9A00] text-sm font-bold tracking-wider uppercase mb-2 block">
                About Me
              </span>

              <h3 className="font-extrabold font-Poppins text-[36px] lg:text-[46px] text-slate-900 dark:text-white leading-tight tracking-tight">
                Md Jaber Hossain
              </h3>

              <p className="text-slate-600 dark:text-slate-400 font-semibold text-[15px] lg:text-[17px] mt-2.5 flex items-center justify-center lg:justify-start gap-2 tracking-wide">
                Frontend Developer (React.js & Next.js)
              </p>

              <p className="text-slate-600 dark:text-[#b0c1d8] text-[15px] lg:text-[16px] py-6 leading-relaxed max-w-[620px] mx-auto lg:mx-0">
                I specialize in building rich, interactive web applications
                using{" "}
                <span className="text-slate-900 dark:text-white font-medium hover:text-[#FE9A00] transition-colors duration-200">
                  React.js
                </span>{" "}
                and{" "}
                <span className="text-slate-900 dark:text-white font-medium hover:text-[#FE9A00] transition-colors duration-200">
                  Next.js
                </span>
                . With over a year of experience, I focus on transforming
                complex design concepts into clean, semantic, and highly
                optimized code, ensuring an exceptional User Experience (UX).
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-[450px] mx-auto lg:mx-0 mb-8 text-left">
                <div className="flex items-center gap-3.5 p-4 bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700/50 transition-colors duration-300">
                  <div className="text-[#FE9A00] text-2xl">
                    <FiAward />
                  </div>
                  <div>
                    <span className="text-slate-900 dark:text-white font-bold text-lg block leading-tight">
                      1+ Year
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Experience
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-xl hover:border-slate-300 dark:hover:border-slate-700/50 transition-colors duration-300">
                  <div className="text-[#FE9A00] text-2xl">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <span className="text-slate-900 dark:text-white font-bold text-lg block leading-tight">
                      15+
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Projects Done
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/resumeJaber.pdf"
                  download="resumeJaber.pdf"
                  className="inline-block"
                >
                  <Button btnText={"Download Resume"} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Aboutme;
