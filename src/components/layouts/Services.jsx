
import React from "react";
import Container from "../Container";
import { PiAirplayBold } from "react-icons/pi";
import { RiCameraLensLine } from "react-icons/ri";
import { CiCamera, CiSettings } from "react-icons/ci";
import { FaArrowRight, FaPaintBrush } from "react-icons/fa";
import { LuCompass } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";
import { FaBolt, FaBug, FaCode, FaGitAlt } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

const Services = () => {
  const services = [
    {
      icon: <FaCode  />,
      title: "Front-End Development",
      desc : "I build modern and interactive user interfaces using HTML, CSS, JavaScript and frameworks like React.",
    },
    {
      icon: <FaPaintBrush  />,
      title: "UI Implementation",
      desc : "I convert Figma, XD or PSD designs into pixel-perfect and fully functional websites with great accuracy.",
    },
    {
      icon: <MdDevices  />,
      title: "Responsive Design",
      desc : "I create mobile-first and fully responsive layouts that work smoothly on all screen sizes and devices.",
    },
    {
      icon: <FaBolt  />,
      title: "Website Performance",
      desc : "I optimize website speed and performance to ensure fast loading and better user experience.",
    },
    {
      icon: <FaBug  />,
      title: "Bug Fixing",
      desc : "I quickly identify and fix front-end issues to improve stability and usability of websites.",
    },
    {
      icon: <FaGitAlt  />,
      title: "Deployment & Version Control",
      desc : "I manage code using Git and deploy websites on platforms like Netlify or Vercel.",
    },
  ];

  return (
    <div id="services" className="py-[95px] bg-[#1D293D] w-full">
      <Container className="mx-auto w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] px-4">
        {/* title */}
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-[24px] text-white font-semibold">
            What do I offer?
          </h3>

          <p className="text-[#90A1B9] text-[15px] pt-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>

        {/* cards */}
        <div className="pt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300"
            >
              <div className="text-[#FE9A00] text-[40px]">{item.icon}</div>

              <h4 className="font-medium text-white text-[17px] pt-7">
                {item.title}
              </h4>

              <p className="text-[15px] text-[#90A1B9] py-3">
                {item.desc}
              </p>

              {/* <button className="text-[15px] flex items-center text-white cursor-pointer gap-x-2 group">
                Read More
                <FaArrowRight className="group-hover:translate-x-1 duration-300" />
              </button> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

