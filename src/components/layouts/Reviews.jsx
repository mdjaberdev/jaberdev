import Container from "../Container";
import Images from "../Images";
import review from "../../assets/review.png";
import { FaStar } from "react-icons/fa";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
  return (
    <div className="py-24 bg-[#1D293D] w-full">
      <Container className="w-full px-4 xl:max-w-[1140px] mx-auto">
        {/* Title */}
        <div className="text-center mx-auto max-w-2xl">
          <h3 className="text-2xl text-white font-semibold">Client's Review</h3>
          <p className="text-[#90A1B9] text-sm pt-6">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>

        {/* Swiper */}
        <div className="mt-12">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="px-2">
                <div className="bg-[#0F172B] p-4 rounded-md">
                  <Images imgSrc={review} />
                  <p className="py-3 text-[#90A1B9] text-sm min-h-[140px]">
                    He brings fresh ideas to the table. Beyond just writing
                    code, he improved our user experience significantly. A
                    proactive developer who actually cares about the product.
                  </p>
                  <div className="flex gap-2 text-[#FE9A00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="pt-5 text-center">
                  <Images
                    imgSrc={r4}
                    className="h-20 w-20 rounded-full mx-auto"
                  />
                  <h4 className="text-white font-medium text-sm pt-2">
                    Majharul Islam
                  </h4>
                  <p className="text-[#90A1B9] text-sm">CEO</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="px-2">
                <div className="bg-[#0F172B] p-4 rounded-md">
                  <Images imgSrc={review} />
                  <p className="py-3 text-[#90A1B9] text-sm min-h-[140px]">
                    Exceptional skills in React and Tailwind! He built a fast
                    and interactive interface for our platform. The code
                    structure is clean, modern, and very easy to maintain.
                  </p>
                  <div className="flex gap-2 text-[#FE9A00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="pt-5 text-center">
                  <Images
                    imgSrc={r1}
                    className="h-20 w-20 rounded-full mx-auto"
                  />
                  <h4 className="text-white font-medium text-sm pt-2">
                    Shoumen Biswas Shomu
                  </h4>
                  <p className="text-[#90A1B9] text-sm">CEO</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="px-2">
                <div className="bg-[#0F172B] p-4 rounded-md">
                  <Images imgSrc={review} />
                  <p className="py-3 text-[#90A1B9] text-sm min-h-[140px]">
                    Transforming our complex design into pixel-perfect code was
                    impressive. The UI is smooth, responsive, and looks exactly
                    how we envisioned. Highly recommended for front-end work.
                  </p>
                  <div className="flex gap-2 text-[#FE9A00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="pt-5 text-center">
                  <Images
                    imgSrc={r2}
                    className="h-20 w-20 rounded-full mx-auto"
                  />
                  <h4 className="text-white font-medium text-sm pt-2">
                    Nabil Muntasir
                  </h4>
                  <p className="text-[#90A1B9] text-sm">CEO</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="px-2">
                <div className="bg-[#0F172B] p-4 rounded-md">
                  <Images imgSrc={review} />
                  <p className="py-3 text-[#90A1B9] text-sm min-h-[140px]">
                    A dedicated developer who pays great attention to detail. He
                    understood our requirements perfectly and delivered the
                    project on time without compromising on quality. Great
                    experience!
                  </p>
                  <div className="flex gap-2 text-[#FE9A00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="pt-5 text-center">
                  <Images
                    imgSrc={r3}
                    className="h-20 w-20 rounded-full mx-auto"
                  />
                  <h4 className="text-white font-medium text-sm pt-2">
                    Mesbaul Haque Rafi
                  </h4>
                  <p className="text-[#90A1B9] text-sm">CEO</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
