import React from "react";
import Container from "../common/Container";
import orebi from "../../assets/orebi.png";
import portfolio from "../../assets/portfolio.png";
import cabbage from "../../assets/cabbage.PNG";
import creative from "../../assets/creative.png";
import lime from "../../assets/lime.png";
import nirvoya from "../../assets/nirvoya.png";
import Images from "../common/Images";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const projectsData = [
    {
      title: "Creative IT Web",
      desc: "An institutional web platform featuring modern courses and dynamic content mapping.",
      img: creative,
      live: "https://mern.creativeitinstitute.com",
      git: "https://github.com/mdjaberdev/creativeWeb",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Team Work"],
    },
    {
      title: "Cabbage E-Commerce",
      desc: "A fresh grocery and organic food e-commerce layout built with responsive UI modules.",
      img: cabbage,
      live: "https://e-cabbage.vercel.app",
      git: "https://github.com/mdjaberdev/e-Cabbage",
      tags: [
        "context-api",
        "helmet-async",
        "lazy-loading",
        "react-vite",
        "tailwindcss",
      ],
    },
    {
      title: "Lime Landing Page",
      desc: "A high-conversion corporate landing page design targeting modern aesthetics.",
      img: lime,
      live: "https://lime-ten.vercel.app/",
      git: "https://github.com/mdjaberdev/lime",
      tags: ["React.js", "Tailwind CSS", "Vite"],
    },
    {
      title: "Orebi E-Commerce",
      desc: "A responsive e-commerce frontend built with advanced product filtering and dynamic cart interactions.",
      img: orebi,
      live: "https://e-commerce-six-liard.vercel.app/",
      git: "https://github.com/mdjaberdev/e-Commerce",
      tags: ["React.js", "Tailwind CSS", "Vite"],
    },
    {
      title: "Hancok Portfolio",
      desc: "A sleek, clean, and interactive minimal layout built for professional showcasing.",
      img: portfolio,
      live: "https://mdjaberdev.github.io/Hancok/",
      git: "https://github.com/mdjaberdev/Hancok",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Project Nirvoya",
      desc: "A secure and comprehensive responsive platform tailored with custom user journeys.",
      img: nirvoya,
      live: "https://project-nirvoya-chi.vercel.app/",
      git: "https://github.com/mdjaberdev/projectNirvoya",
      tags: ["React.js", "Tailwind CSS", "Team Work"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-white dark:bg-[#0F172B] w-full border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300"
    >
      <Container className="w-full md:max-w-[720px] xl:max-w-[1140px] mx-auto px-4">
        {/* Title Section */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-[#FE9A00] text-sm font-bold tracking-wider uppercase mb-2 block">
            Portfolio
          </span>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Work & Projects
          </h3>
          <div className="h-1 w-12 bg-[#FE9A00] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-[#90A1B9] text-[15px] lg:text-[16px] mt-4 leading-relaxed">
            Here are some of the hand-crafted projects I have built using modern
            frontend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-xl hover:border-slate-300 dark:hover:border-slate-700/60 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Images
                  imgSrc={project.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.live}
                    className="px-4 py-2 bg-[#FE9A00] text-white text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-amber-500 transition-colors duration-300 shadow-md shadow-[#FE9A00]/20"
                  >
                    Live Preview
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.git}
                    className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 dark:hover:text-white transition-colors duration-300 border border-slate-300 dark:border-slate-700"
                  >
                    GitHub
                    <BsGithub />
                  </a>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[11px] font-medium text-[#FE9A00] bg-[#FE9A00]/10 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#FE9A00] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed flex-grow">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/mdjaberdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[#FE9A00]/60 text-[#FE9A00] font-bold rounded-xl hover:bg-[#FE9A00] hover:text-white hover:border-[#FE9A00] transition-all duration-300 hover:shadow-[0_0_20px_rgba(254,154,0,0.2)]"
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
