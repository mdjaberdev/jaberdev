import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Core", "Frameworks", "Tools"];

  const skillsData = [
    {
      name: "HTML5",
      category: "Core",
      icon: <FaHtml5 />,
      color: "#E34F26",
      bg: "group-hover:bg-[#E34F26]/10",
      border: "group-hover:border-[#E34F26]/50",
    },
    {
      name: "CSS3",
      category: "Core",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      bg: "group-hover:bg-[#1572B6]/10",
      border: "group-hover:border-[#1572B6]/50",
    },
    {
      name: "JavaScript",
      category: "Core",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      bg: "group-hover:bg-[#F7DF1E]/10",
      border: "group-hover:border-[#F7DF1E]/50",
    },
    {
      name: "TypeScript",
      category: "Core",
      icon: <SiTypescript />,
      color: "#3178C6",
      bg: "group-hover:bg-[#3178C6]/10",
      border: "group-hover:border-[#3178C6]/50",
    },
    {
      name: "React",
      category: "Frameworks",
      icon: <FaReact />,
      color: "#61DAFB",
      bg: "group-hover:bg-[#61DAFB]/10",
      border: "group-hover:border-[#61DAFB]/50",
    },
    {
      name: "Next.js",
      category: "Frameworks",
      icon: <SiNextdotjs />,
      color: "#FFFFFF",
      bg: "group-hover:bg-white/10",
      border: "group-hover:border-white/50",
    },
    {
      name: "Tailwind CSS",
      category: "Frameworks",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
      bg: "group-hover:bg-[#06B6D4]/10",
      border: "group-hover:border-[#06B6D4]/50",
    },
    {
      name: "Bootstrap",
      category: "Frameworks",
      icon: <FaBootstrap />,
      color: "#7952B3",
      bg: "group-hover:bg-[#7952B3]/10",
      border: "group-hover:border-[#7952B3]/50",
    },
    {
      name: "Git",
      category: "Tools",
      icon: <FaGitAlt />,
      color: "#F05032",
      bg: "group-hover:bg-[#F05032]/10",
      border: "group-hover:border-[#F05032]/50",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <FaGithub />,
      color: "#FFFFFF",
      bg: "group-hover:bg-white/10",
      border: "group-hover:border-white/50",
    },
    {
      name: "Figma",
      category: "Tools",
      icon: <FaFigma />,
      color: "#F24E1E",
      bg: "group-hover:bg-[#F24E1E]/10",
      border: "group-hover:border-[#F24E1E]/50",
    },
  ];

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 bg-[#0F172B] w-full min-h-screen flex items-center overflow-hidden font-sans"
    >
      {/* Premium Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Dynamic Background Glow based on active tab */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FE9A00]/5 blur-[150px] rounded-full pointer-events-none transition-all duration-1000 mix-blend-screen"></div>

      <Container className="mx-auto w-full max-w-[1200px] px-6 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-600 tracking-tighter mb-4">
              My Tech Stack.
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              The frameworks, languages, and tools I use to craft seamless
              digital experiences.
            </p>
          </div>

          {/* Interactive Filtering Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#FE9A00] text-white shadow-[0_0_20px_rgba(254,154,0,0.3)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6 min-h-[400px] items-start">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name} // Key by name so React animates properly on filter
              className={`group relative aspect-square rounded-2xl bg-[#0A0A0A] border border-white/5 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl z-10 overflow-hidden ${skill.border}`}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Inner Hover Glow */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 opacity-0 ${skill.bg} pointer-events-none`}
              ></div>

              {/* Icon */}
              <div
                className="text-5xl lg:text-6xl transition-all duration-500 transform group-hover:scale-110 drop-shadow-lg"
                style={{ color: skill.color }} // Dynamically inject the brand color
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-slate-300 font-medium text-sm tracking-wide transition-colors duration-300 group-hover:text-white mt-2">
                {skill.name}
              </span>

              {/* Bottom Glowing Bar */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-500 group-hover:w-full"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 -2px 10px ${skill.color}`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* CSS for staggered animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `,
          }}
        />
      </Container>
    </section>
  );
};

export default Skills;
