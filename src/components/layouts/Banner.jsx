
import Container from "../Container";
import Images from "../Images";
import bannerImg from "../../assets/jaberBnr.png";
import Button from "../Button";
import { Typewriter } from "react-simple-typewriter";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div id="banner" className="bg-[#0F172B] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FE9A00]/5 opacity-50 pointer-events-none"></div>
        <Container
          className={
            "w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto z-10 px-4"
          }
        >
          <div className="lg:grid lg:grid-cols-2 items-center gap-8 lg:pt-10">
            {/* left side */}
            <div className="leftSide pt-10 lg:pt-0 text-center lg:text-left">
              <h2 className="font-bold text-[32px] lg:text-[40px] text-white pb-1">
                Hey! I'm
              </h2>
              <h1 className="text-[#FE9A00] font-bold text-[28px] lg:text-[40px] min-h-[50px] lg:min-h-[60px]">
                <Typewriter
                  words={["Md Jaber Hossain", "Front-end Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="👈"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>

              <p className="text-[16px] lg:text-[15px] text-[#90A1B9] py-[15px] max-w-[500px] mx-auto lg:mx-0">
                A passionate Front-End Developer from Bangladesh. Always curious
                to learn, explore, and collaborate.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <HashLink smooth to="#contact">
                  <Button btnText={"Hire Me"} />
                </HashLink>
                <a href="/resumeJaber.pdf" download={"resumeJaber.pdf"}>
                  <Button btnText={"Download CV"} />
                </a>
              </div>
            </div>

            {/* right side */}
            <div className="rightSide flex justify-center lg:justify-end mt-10 lg:mt-0">
              <Images
                imgSrc={bannerImg}
                className="w-[260px] sm:w-[320px] lg:w-full max-w-[420px]"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Banner;

