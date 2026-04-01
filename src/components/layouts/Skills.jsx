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
import { SiTailwindcss, SiJavascript, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, color: "group-hover:text-[#E34F26]" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "group-hover:text-[#1572B6]" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "group-hover:text-[#7952B3]" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "group-hover:text-[#06B6D4]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "group-hover:text-[#F7DF1E]",
    },
    { name: "React", icon: <FaReact />, color: "group-hover:text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "group-hover:text-white" },
    { name: "Git", icon: <FaGitAlt />, color: "group-hover:text-[#F05032]" },
    { name: "GitHub", icon: <FaGithub />, color: "group-hover:text-white" },
    { name: "Figma", icon: <FaFigma />, color: "group-hover:text-[#F24E1E]" },
  ];

  return (
    <section id="skills" className="pb-[90px] bg-[#0F172B]/98 w-full py-25">
      <Container className="w-full max-w-[360px] md:max-w-[720px] xl:max-w-[1140px] mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <h3 className="text-[28px] lg:text-[32px] text-white font-bold">
            Technical <span className="text-[#FE9A00]">Skills</span>
          </h3>
      
          <p className="text-[#90A1B9] text-[15px] pt-6">
            The tools and technologies I use to bring ideas to life on the web.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`group bg-[#0F172B] border border-white/5 p-8 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-[#FE9A00]/50 hover:-translate-y-2 cursor-default`}
            >
              <div
                className={`text-5xl text-[#90A1B9] transition-all duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <h4 className="text-white font-medium text-[16px] group-hover:text-white">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
