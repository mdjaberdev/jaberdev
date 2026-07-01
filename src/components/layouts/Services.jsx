import React from "react";
import Container from "../Container";
import { FaPaintBrush } from "react-icons/fa";
import { FaBolt, FaBug, FaCode, FaGitAlt } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

const Services = () => {
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
      title: "Bug Fixing",
      desc: "I quickly identify and fix front-end issues to improve stability and usability of websites.",
    },
    {
      icon: <FaGitAlt />,
      title: "Deployment & Version Control",
      desc: "I manage code using Git and deploy websites on platforms like Netlify or Vercel.",
    },
  ];

  return (
    <div
      id="services"
      className="py-20  lg:py-32 bg-[#0F172B] w-full border-t border-slate-800/50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FE9A00]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <Container className="mx-auto w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] px-4 relative z-10">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-[#FE9A00] text-sm font-bold tracking-wider uppercase mb-2 block">
            Services
          </span>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            What do I offer...?
          </h3>
          <div className="h-1 w-12 bg-[#FE9A00] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#90A1B9] text-[15px] mt-4 leading-relaxed">
            I'm a Frontend Developer passionate about creating responsive,
            user-friendly web interfaces by turning Figma designs into clean,
            semantic, and high-performance code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8 bg-slate-900/30 border border-slate-800/60 transition-all duration-500 hover:border-[#FE9A00]/30 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm shadow-xl flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-[#FE9A00] text-2xl transition-all duration-500 group-hover:bg-[#FE9A00] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(254,154,0,0.4)]">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white text-lg mt-6 transition-colors duration-300 group-hover:text-[#FE9A00]">
                  {item.title}
                </h4>

                <p className="text-[14px] lg:text-[15px] text-[#90A1B9] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-6 h-[2px] bg-slate-700 mt-6 transition-all duration-500 group-hover:w-full group-hover:bg-[#FE9A00] rounded-full"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
