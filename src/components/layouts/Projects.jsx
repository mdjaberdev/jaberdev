
import React from "react";
import Container from "../Container";
import orebi from "../../assets/orebi.png";
import portfolio from "../../assets/portfolio.png";
import game from "../../assets/Screenshot_1.png";
import Images from "../Images";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="py-[95px] bg-[#0F172B] w-full">
      <Container className="w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto px-4">
        {/* title */}
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-[24px] text-white font-semibold">
            My Work & Projects
          </h3>

          <p className="text-[#90A1B9] text-[15px] pt-6">
            Here are some of the projects I have built using React and Tailwind
            CSS.
          </p>
        </div>

        {/* project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
          {/* project 1 */}
          <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Images
                imgSrc={orebi}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00] duration-300">
                E-Commerce Website
              </h3>

              <p className="text-gray-400 mb-6">
                A fully functional online store where you can view products.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  React
                </span>

                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  Tailwind CSS
                </span>

                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  Context API
                </span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://e-commerce-six-liard.vercel.app/"
                  className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2"
                >
                  Live Preview
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href="https://github.com/mdjaberdev/e-Commerce"
                  className="text-gray-400 text-xl hover:text-[#FE9A00] transition-colors duration-300"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Images
                imgSrc={portfolio}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00]">
                Portfolio
              </h3>

              <p className="text-gray-400 mb-6">
                A modern landing page for Ui/Ux Designer.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  JavaScript
                </span>

                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  jQuery
                </span>

                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  CSS
                </span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://mdjaberdev.github.io/PortfolioTwo/"
                  className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2"
                >
                  Live Preview
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href="https://github.com/mdjaberdev/PortfolioTwo"
                  className="text-gray-400 text-xl hover:text-[#FE9A00]"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>

          {/* project 3 */}
          <div className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2">
            <div className="h-60 overflow-hidden relative">
              <Images
                imgSrc={game}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE9A00]">
                Number Guessing Game
              </h3>

              <p className="text-gray-400 mb-6">
                A simple funny game for entertainment.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  JavaScript
                </span>

                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  Tailwind
                </span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://mdjaberdev.github.io/domFunGame/"
                  className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2"
                >
                  Live Preview
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href="https://github.com/mdjaberdev/domFunGame"
                  className="text-gray-400 text-xl hover:text-[#FE9A00]"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/mdjaberdev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[#FE9A00] text-[#FE9A00] font-bold rounded hover:bg-[#FE9A00] hover:text-white transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;

