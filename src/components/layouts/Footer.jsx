import Container from "../Container"
import Flex from "../Flex"
import mlogo from '../../assets/geminiLogo.png'
import Images from "../Images"
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <div className="py-7.5 bg-[#0F172B] lg:w-full sm:w-full w-[395px]">
        <Container className={"w-[360px] lg:w-[1140px]"}>
          <div className={"lg:flex lg:justify-between items-center"}>
            {/* logo part start */}
            <div className="logo ">
              <Link to={"/"}>
                <Images
                  imgSrc={mlogo}
                  className={"mx-auto mb-5 lg:mb-0 w-25"}
                />
              </Link>
            </div>
            {/* logo part end */}
            {/* text part start */}
            <p className="text-[#E5E7EB] text-center mb-5 lg:mb-0 text-[15px]">
              © 2026 Jaber. Design by Jaber.
            </p>
            {/* text part end */}
            {/* social media links start */}
            <div className="socialIcons flex gap-x-5 text-white justify-center lg:justify-between pt-2 lg:pt-0 ">
              <a href="https://github.com/mdjaberdev">
                <BsGithub className="text-2xl lg:text-[15px]" />
              </a>
              <a href="https://www.linkedin.com/in/mdjaberdev/">
                <FaLinkedin className="text-2xl lg:text-[15px]" />
              </a>
              <a href="https://facebook.com/mdjaberdev">
                <BsFacebook className="text-2xl lg:text-[15px]" />
              </a>
              <a href="https://gmail.com/mdjaber.dev@gmail.com">
                <SiGmail className="text-2xl lg:text-[15px]" />
              </a>
            </div>
            {/* social media links end */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer
