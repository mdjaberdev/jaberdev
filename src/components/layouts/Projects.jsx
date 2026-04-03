
import React from "react";
import Container from "../Container";
import orebi from "../../assets/orebi.png";
import portfolio from "../../assets/portfolio.png";
import game from "../../assets/game.png";
import creative from "../../assets/creative.png";
import lime from "../../assets/lime.png";
import nirvoya from "../../assets/nirvoya.png";
import Images from "../Images";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="py-[95px] bg-[#1D293D] w-full">
      <Container className="w-full  md:max-w-[720px] xl:max-w-[1140px] mx-auto px-3">
        {/* title */}
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-2xl lg:text-3xl font-semibold text-white">
            My Work & Projects
          </h3>

          <p className="text-[#90A1B9] text-[15px] pt-6">
            Here are some of the projects I have built using React and Tailwind
            CSS.
          </p>
        </div>

        {/* project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-15">
          {/* project 1 */}
          <div className="group relative w-full h-60 rounded-2xl overflow-hidden shadow-lg">
            {/* Project Image */}
            <Images
              imgSrc={creative}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with buttons on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://creative-web-six.vercel.app/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-300"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/creativeWeb"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded flex items-center gap-2 hover:bg-gray-700 transition-colors duration-300"
              >
                GitHub
                <BsGithub />
              </a>
            </div>
          </div>
          {/* project 2 */}
          <div className="group relative w-full h-60 rounded-2xl overflow-hidden shadow-lg">
            {/* Project Image */}
            <Images
              imgSrc={orebi}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with buttons on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://e-commerce-six-liard.vercel.app/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-300"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/e-Commerce"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded flex items-center gap-2 hover:bg-gray-700 transition-colors duration-300"
              >
                GitHub
                <BsGithub />
              </a>
            </div>
          </div>

          {/* project 3 */}
          <div className="group relative w-full h-60 rounded-2xl overflow-hidden shadow-lg">
            {/* Project Image */}
            <Images
              imgSrc={portfolio}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with buttons on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://mdjaberdev.github.io/Hancok/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-300"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/Hancok"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded flex items-center gap-2 hover:bg-gray-700 transition-colors duration-300"
              >
                GitHub
                <BsGithub />
              </a>
            </div>
          </div>

          {/* project 4 */}
          <div className="group relative w-full h-60 rounded-2xl overflow-hidden shadow-lg">
            {/* Project Image */}
            <Images
              imgSrc={game}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with buttons on hover */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://mdjaberdev.github.io/domFunGame/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-300"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/domFunGame"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded flex items-center gap-2 hover:bg-gray-700 transition-colors duration-300"
              >
                GitHub
                <BsGithub />
              </a>
            </div>
          </div>
          {/* project  */}
          <div className="group relative w-full h-60 overflow-hidden rounded-2xl shadow-lg">
            <Images
              imgSrc={lime}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://lime-ten.vercel.app/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/lime"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
              >
                GitHub
                <BsGithub />
              </a>
            </div>
          </div>
          {/* project 6 */}
          <div className="group relative w-full h-60 overflow-hidden rounded-2xl shadow-lg">
            <Images
              imgSrc={nirvoya}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                target="_blank"
                href="https://project-nirvoya-chi.vercel.app/"
                className="px-4 py-2 bg-[#FE9A00] text-white font-semibold rounded hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2"
              >
                Live Preview
                <FaArrowUpRightFromSquare />
              </a>

              <a
                target="_blank"
                href="https://github.com/mdjaberdev/projectNirvoya"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
              >
                GitHub
                <BsGithub />
              </a>
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

