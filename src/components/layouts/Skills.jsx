import React from "react";
import Container from "../Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color:
        "group-hover:text-[#E34F26] group-hover:drop-shadow-[0_0_12px_rgba(227,79,38,0.5)]",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color:
        "group-hover:text-[#1572B6] group-hover:drop-shadow-[0_0_12px_rgba(21,114,182,0.5)]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color:
        "group-hover:text-[#F7DF1E] group-hover:drop-shadow-[0_0_12px_rgba(247,223,30,0.4)]",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color:
        "group-hover:text-[#3178C6] group-hover:drop-shadow-[0_0_12px_rgba(49,120,198,0.5)]",
    },
    {
      name: "React",
      icon: <FaReact />,
      color:
        "group-hover:text-[#61DAFB] group-hover:drop-shadow-[0_0_12px_rgba(97,218,251,0.5)]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color:
        "group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color:
        "group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color:
        "group-hover:text-[#7952B3] group-hover:drop-shadow-[0_0_12px_rgba(121,82,179,0.5)]",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color:
        "group-hover:text-[#F05032] group-hover:drop-shadow-[0_0_12px_rgba(240,80,50,0.5)]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color:
        "group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      color:
        "group-hover:text-[#F24E1E] group-hover:drop-shadow-[0_0_12px_rgba(242,78,30,0.4)]",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0F172B] w-full py-20 lg:py-32 relative overflow-hidden border-t border-slate-800/50"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FE9A00]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <Container className="w-full max-w-[360px] md:max-w-[720px] xl:max-w-[1140px] mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-[#FE9A00] text-sm font-bold tracking-wider uppercase mb-2 block">
            My Arsenal
          </span>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h3>
          <div className="h-1 w-12 bg-[#FE9A00] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#90A1B9] text-[15px] lg:text-[16px] mt-4 leading-relaxed">
            The tools, languages, and technologies I use to transform complex
            design files into highly optimized web experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group bg-slate-900/40 border border-slate-800/60 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:border-[#FE9A00]/30 hover:-translate-y-2 cursor-default relative overflow-hidden backdrop-blur-sm shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div
                className={`text-5xl text-slate-500 transition-all duration-500 scale-100 group-hover:scale-110 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <div className="relative">
                <h4 className="text-slate-300 font-semibold text-[15px] md:text-[16px] transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h4>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FE9A00] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
