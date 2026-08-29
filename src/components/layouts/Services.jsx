import React, { useState } from "react";
import Container from "../common/Container";
import { FaPaintBrush } from "react-icons/fa";
import { FaBolt, FaBug, FaCode, FaGitAlt, FaArrowRight } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: <FaCode />,
      title: "Front-End Development",
      desc: "I build modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, React, and Next.js.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI Implementation",
      desc: "I convert Figma, XD, and PSD designs into pixel-perfect, responsive, and modern web interfaces with clean, maintainable code.",
    },
    {
      icon: <MdDevices />,
      title: "Responsive Design",
      desc: "I create mobile-first and fully responsive layouts that work smoothly on all screen sizes and devices.",
    },
    {
      icon: <FaBolt />,
      title: "Website Performance",
      desc: "I optimize website speed and performance to ensure fast loading and better user experience.",
    },
    {
      icon: <FaBug />,
      title: "Bug Fixing & Auditing",
      desc: "I quickly identify and fix front-end issues to improve stability and usability of websites.",
    },
    {
      icon: <FaGitAlt />,
      title: "Deployment & Version Contro",
      desc: "I manage code using Git and deploy websites on platforms like Netlify or Vercel.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-white dark:bg-[#0F172B] w-full overflow-hidden font-sans transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FE9A00]/10 via-slate-100/5 dark:via-[#030712]/5 to-transparent blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-100/5 dark:via-[#030712]/5 to-transparent blur-[120px] pointer-events-none"></div>

      <Container className="mx-auto w-full max-w-[1300px] px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-2/5 lg:sticky lg:top-40 flex flex-col items-start relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] backdrop-blur-md mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE9A00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FE9A00]"></span>
              </span>
              <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-[0.2em] uppercase">
                Expertise
              </span>
            </div>

            <h3 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-600">
              Transforming <br /> ideas into <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE9A00] to-orange-400">
                reality.
              </span>
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md font-light">
              I specialize in crafting immersive, high-performance web
              experiences. From pixel-perfect UI to seamless interactions, I
              bring digital visions to life.
            </p>
          </div>
          <div className="lg:w-3/5 w-full flex flex-col group/list relative z-20">
            {services.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative cursor-pointer border-b border-slate-200 dark:border-white/[0.05] py-8 lg:py-10 transition-all duration-700 ease-out overflow-hidden
                    ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70 group-hover/list:opacity-30"}
                  `}
                >
                  <div
                    className={`absolute left-0 top-0 w-[2px] bg-gradient-to-b from-[#FE9A00] to-orange-400 transition-all duration-500 ease-out shadow-[0_0_15px_#FE9A00]
                    ${isActive ? "h-full opacity-100" : "h-0 opacity-0"}
                  `}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-white/[0.03] to-transparent transition-opacity duration-500
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                  ></div>

                  <div className="relative z-10 pl-6 lg:pl-10 pr-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 lg:gap-8">
                        <div
                          className={`text-3xl transition-transform duration-500 ${isActive ? "text-[#FE9A00] scale-110" : "text-slate-400 dark:text-slate-500"}`}
                        >
                          {item.icon}
                        </div>
                        <h4
                          className={`text-2xl lg:text-4xl font-bold tracking-tight transition-colors duration-500 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          {item.title}
                        </h4>
                      </div>
                      <div className="hidden md:block">
                        <FaArrowRight
                          className={`text-xl transition-all duration-500 ${isActive ? "text-[#FE9A00] opacity-100 translate-x-0" : "text-slate-400 dark:text-slate-600 opacity-0 -translate-x-4"}`}
                        />
                      </div>
                    </div>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-6"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl pl-[60px] lg:pl-[68px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
