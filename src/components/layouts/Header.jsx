import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
// import logo from '../../assets/logo.png'
import mlogo from '../../assets/geminiLogo.png'
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import { FaLinkedin } from "react-icons/fa6"

const Header = () => {
    return (
      <>
        <div className="bg-[#0F172B] py-5 sm:w-full lg:fixed z-11 lg:left-1/2 lg:-translate-x-1/2 lg:w-full w-[395px]">
          <Container className={"w-[360px] lg:w-[1140px]"}>
            <div className="lg:flex lg:justify-between items-center">
              {/* logo part start */}
              <div className="logo">
                <Link to={"/"}>
                  {/* <Images imgSrc={logo} className={'mx-auto mb-5 lg:mb-0'}/> */}
                  <Images
                    imgSrc={mlogo}
                    className={"mx-auto mb-5 lg:mb-0 w-25"}
                  />
                </Link>
              </div>
              {/* logo part end */}
              {/* menu part start */}
              <ul className="flex gap-x-3 lg:gap-x-5 justify-between mx-auto">
                <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                  <HashLink smooth to="#banner">
                 Home
                  </HashLink>
                </li>
                <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                  <HashLink smooth to="#about">
                    About Me
                  </HashLink>
                </li>
                <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                  <HashLink smooth to="#services">
                    Services
                  </HashLink>
                </li>
                <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                  <HashLink smooth to="#projects">
                    Projects
                  </HashLink>
                </li>
                <li className="text-[15px] font-medium text-[#FFFFFF]/60">
                  <HashLink smooth to="#contact">
                    Contact Me
                  </HashLink>
                </li>
              </ul>
              {/* menu part end */}
              {/* social media links start */}
              <div className="socialIcons flex gap-x-5 text-white justify-center lg:justify-between pt-5 lg:pt-0 ">
                <a href="https://github.com/mdjaberdev">
                  <BsGithub className="text-2xl lg:text-[15px]" />
                </a>
                <a href="https://www.linkedin.com/in/mdjaberdev/">
                  <FaLinkedin className="text-2xl lg:text-[15px]" />
                </a>
                <a href="https://facebook.com/mdjaberdev">
                  <BsFacebook className="text-2xl lg:text-[15px]" />
                </a>
              </div>
              {/* social media links end */}
            </div>
          </Container>
        </div>
      </>
    );
}

export default Header