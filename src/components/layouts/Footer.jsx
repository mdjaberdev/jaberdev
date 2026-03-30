import Container from "../Container";
import Flex from "../Flex";
import Gemini from '/src/assets/Gemini.png'
import Images from "../Images";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="py-3 bg-[#0F172B] w-full">
      <Container className="w-full px-4 xl:w-[1140px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0 text-center">
          {/* logo */}
          <Link to="/">
            <Images imgSrc={Gemini} className="w-20" />
          </Link>

          {/* Text */}
          <p className="text-[#E5E7EB] text-sm lg:text-[15px]">
            © 2026 Jaber. Design by Jaber.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-start text-white">
            <a
              href="https://github.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-2xl hover:text-[#FE9A00] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjaberdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-[#FE9A00] transition-colors" />
            </a>
            <a
              href="https://facebook.com/mdjaberdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="text-2xl hover:text-[#FE9A00] transition-colors" />
            </a>
            <a href="mailto:mdjaber.dev@gmail.com">
              <SiGmail className="text-2xl hover:text-[#FE9A00] transition-colors" />
            </a>
          </div>
        </div>
      </Container>
       <div className="hidden lg:block">
        <ScrollToTop
          smooth
          top="500"
          height="20"
          width="20"
          color="white"
          className="bg-green-500! h-15! w-15! flex! items-center! justify-center! rounded-full!"
        />
      </div>
    </footer>
  );
};

export default Footer;
