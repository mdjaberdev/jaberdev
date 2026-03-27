
import React from "react";
import Container from "../Container";
import { Monitor } from "lucide-react";
import { FaRegStopCircle } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { FiActivity, FiCoffee } from "react-icons/fi";
import {
  PiMusicNotesSimpleBold,
  PiPenNibStraightBold,
  PiWatchBold,
} from "react-icons/pi";
import { LiaCubeSolid } from "react-icons/lia";
import { LuBook, LuTarget } from "react-icons/lu";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Hobbies = () => {
  const hobbies = [
    { icon: <Monitor />, name: "Developing" },
    { icon: <FaRegStopCircle className="text-[22px]" />, name: "Mac OS" },
    { icon: <BsCameraVideo className="text-[22px]" />, name: "Cinema" },
    { icon: <FiCoffee className="text-[22px]" />, name: "Coffee" },
    { icon: <PiMusicNotesSimpleBold className="text-[20px]" />, name: "Music" },
    { icon: <PiWatchBold className="text-[20px]" />, name: "Games" },
    { icon: <LiaCubeSolid className="text-[22px]" />, name: "Designing" },
    { icon: <LuTarget className="text-[22px]" />, name: "Sports" },
    { icon: <PiPenNibStraightBold className="rotate-90 text-[20px]" />, name: "Painting" },
    { icon: <LuBook className="text-[20px]" />, name: "Reading" },
    { icon: <MdOutlinePhoneAndroid className="text-[22px]" />, name: "Android" },
    { icon: <FiActivity className="text-[22px]" />, name: "Other Activity" },
  ];

  return (
    <div className="py-[95px] bg-[#0F172B] w-full">

      <Container className="w-[360px] lg:w-[1140px]">

        {/* title */}
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-[24px] text-white font-semibold">
            Hobbies & Expertise
          </h3>

          <p className="text-[#90A1B9] text-[15px] pt-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>

        {/* cards */}
        <div className="pt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {hobbies.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700"
            >
              <div className="flex gap-x-5 items-center">

                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                  <div className="-rotate-45">{item.icon}</div>
                </div>

                <p className="text-white font-medium text-[17px]">
                  {item.name}
                </p>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </div>
  );
};

export default Hobbies;

