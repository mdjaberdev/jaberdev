import Container from "../Container";
import Flex from "../Flex";
import mlogo from "../../assets/geminiLogo.png";
import Images from "../Images";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-[#0F172B] w-full">
      <Container className="w-full px-4 lg:w-[1140px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0 text-center">
          {/* logo */}
          <Link to="/">
            <Images imgSrc={mlogo} className="w-20" />
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
    </footer>
  );
};

export default Footer;
