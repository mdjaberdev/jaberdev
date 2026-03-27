import React from "react";
import Container from "../Container";
import Images from "../Images";
import about from "../../assets/about.png";
import Button from "../Button";

const Aboutme = () => {
  return (
    <>
      {/* Added overflow-hidden to prevent any side-scrolling issues */}
      <div id="about" className="py-[60px] lg:py-[80px] bg-[#1D293D] w-full overflow-hidden">
        
        {/* FIX: Changed w-[360px] to w-full and added max-w limits with mx-auto */}
        <Container className={"w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto px-4"}>
          
          <div className="lg:flex lg:justify-between items-center lg:gap-x-12">
            
            {/* left image */}
            <div className="left lg:w-[45%] flex justify-center">
              <Images
                imgSrc={about}
                className="w-[260px] sm:w-[320px] lg:w-full max-w-md object-contain"
              />
            </div>

            {/* right content */}
            <div className="right lg:w-[50%] mt-10 lg:mt-0 text-center lg:text-left">
              <h3 className="font-semibold text-[22px] lg:text-[28px] text-white leading-tight">
                I'm a Passionate Web Designer
              </h3>

              <p className="text-[#90A1B9] text-[15px] lg:text-[16px] py-6 leading-relaxed">
                Obviously I'm a Web Designer. Web Developer with over 1 year of
                experience. Experienced with all stages of the development cycle
                for dynamic web projects.
              </p>

              <p className="text-[#90A1B9] text-[15px] lg:text-[16px] pb-8 leading-relaxed">
                I am a passionate developer focused on crafting clean,
                user-friendly, and responsive interfaces using React & Tailwind
                CSS.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button btnText={"See Work"} />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Aboutme;