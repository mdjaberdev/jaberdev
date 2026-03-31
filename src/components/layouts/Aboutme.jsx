import React from "react";
import Container from "../Container";
import Images from "../Images";
import jaber from "../../assets/jaberImg.png";
import Button from "../Button";


const Aboutme = () => {
  return (
    <>
      <div
        id="about"
        className="py-[60px] lg:py-[80px] bg-[#1D293D] w-full overflow-hidden"
      >
        <Container
          className={
            "w-full max-w-[360px] md:max-w-[720px] lg:max-w-[1140px] mx-auto px-4"
          }
        >
          <div className="lg:flex lg:justify-between items-start lg:gap-x-12">
            {/* Left Image Section */}
            <div className="left lg:w-[40%] flex justify-center lg:sticky lg:top-10">
              <Images
                imgSrc={jaber}
                className="w-[260px] sm:w-[320px] lg:w-full max-w-md object-contain rounded-lg"
              />
            </div>

            {/* Right Content Section */}
            <div className="right lg:w-[55%] mt-10 lg:mt-0 text-center lg:text-left">
              <h3 className="font-bold text-[32px] lg:text-[42px] text-white leading-tight">
                Md Jaber Hossain
              </h3>
              <p className="text-[#E2E8F0] font-medium text-[19px] mt-2 italic">
                Frontend Developer (React.js & Next.js)
              </p>

              <p className="text-[#90A1B9] text-[15px] lg:text-[16px] py-6 leading-relaxed">
                Frontend Developer specializing in React and Next.js, with 1+
                year of experience building responsive, high-performance web
                applications and translating UI/UX designs into clean, scalable
                code.
              </p>

              {/* Education Section */}
              <div className="education-part mb-8">
                <h4 className="text-white font-semibold text-[20px] mb-4 border-b border-[#2d3e5a] pb-2 inline-block">
                  Education
                </h4>
                <div className="flex flex-col gap-y-4">
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#38BDF8] before:rounded-full">
                    <h5 className="text-white font-medium text-[17px]">
                      Creative IT Institute
                    </h5>
                    <p className="text-[#FE9A00] text-sm italic">
                      Front-end Developer (Intern) Creative IT January 2026 -
                      Present
                    </p>
                  </div>
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#38BDF8] before:rounded-full">
                    <h5 className="text-[#E2E8F0] font-semibold text-[17px]">
                      Govt. Tolaram College
                    </h5>
                    <p className="text-[#FE9A00] text-sm italic">
                      Higher Secondary Certificate (HSC)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-x-4">
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
