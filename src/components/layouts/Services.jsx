
import React from "react";
import Container from "../Container";
import { PiAirplayBold } from "react-icons/pi";
import { RiCameraLensLine } from "react-icons/ri";
import { CiCamera, CiSettings } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { LuCompass } from "react-icons/lu";
import { FiWatch } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <PiAirplayBold />,
      title: "UX / UI Design",
    },
    {
      icon: <RiCameraLensLine />,
      title: "Ios App Designer",
    },
    {
      icon: <CiCamera />,
      title: "Photography",
    },
    {
      icon: <LuCompass />,
      title: "Graphic Designer",
    },
    {
      icon: <CiSettings />,
      title: "Web Security",
    },
    {
      icon: <FiWatch />,
      title: "24 / 7",
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
                The phrasal sequence of the is now sothat many campaign and
                benefit
              </p>

              <button className="text-[15px] flex items-center text-white cursor-pointer gap-x-2 group">
                Read More
                <FaArrowRight className="group-hover:translate-x-1 duration-300" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

