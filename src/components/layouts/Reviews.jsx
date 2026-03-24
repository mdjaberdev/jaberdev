
// import Container from '../Container';
// import Images from '../Images';
// import review from '../../assets/review.png';
// import { FaStar } from 'react-icons/fa';
// import r1 from '../../assets/r1.png';
// import r2 from '../../assets/r2.png';
// import r3 from '../../assets/r3.png';
// import r4 from '../../assets/r4.png';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Reviews = () => {

// var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows : false ,
//     autoplay : true ,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: false
//             }
//         },
//         {
//             breakpoint: 395,
//             settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//             }
//         }
//         ]
//     };

//     return (
//         <>
//         <div className="py-[95px] bg-[#1D293D] lg:w-full w-[395px]">
//             <Container className={'w-full px-4 lg:w-[1140px] mx-auto'}>
//                 <div className="text-center mx-auto">
//                     <h3 className='text-[24px] text-white font-semibold'>Client's Review</h3>
//                     <p className='text-[#90A1B9] text-[15px] pt-6 lg:px-[300px]'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
//                 </div>
//                 <div className="mt-15">
//                     {/* <Flex className={'justify-between gap-x-5'}> */}
//                     <Slider {...settings}>
//                         <div className="px-3 outline-none">
//                             <div className="bg-[#0F172B] p-4 rounded-sm">
//                                 <Images imgSrc={review}/>
//                                 <p className='py-3 text-[#90A1B9] text-[15px] h-35'>Exceptional skills in React and Tailwind! He built a fast and interactive interface for our platform. The code structure is clean, modern, and very easy to maintain.</p>
//                                 <div className="icon flex gap-x-2 text-[#FE9A00]">
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                 </div>
//                             </div>
//                             <div className="pt-5 text-center">
//                                 <Images imgSrc={r1} className={'h-20 w-20 rounded-full mx-auto'}/>
//                                 <h4 className='text-white font-medium text-[15px] pt-2'>Shoumen Biswas Shomu</h4>
//                                 <p className='text-[#90A1B9]'>CEO</p>
//                             </div>
//                         </div>
//                         <div className="px-3 outline-none">
//                             <div className="bg-[#0F172B] p-4 rounded-sm">
//                                 <Images imgSrc={review}/>
//                                 <p className='py-3 text-[#90A1B9] text-[15px] h-35'>Transforming our complex design into pixel-perfect code was impressive. The UI is smooth, responsive, and looks exactly how we envisioned. Highly recommended for front-end work.</p>
//                                 <div className="icon flex gap-x-2 text-[#FE9A00]">
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                 </div>
//                             </div>
//                             <div className="pt-5 text-center">
//                                 <Images imgSrc={r2} className={'h-20 w-20 rounded-full mx-auto'}/>
//                                 <h4 className='text-white font-medium text-[15px] pt-2'>Nabil Muntasir</h4>
//                                 <p className='text-[#90A1B9]'>CEO</p>
//                             </div>
//                         </div>
//                         <div className="px-3 outline-none">
//                             <div className="bg-[#0F172B] p-4 rounded-sm">
//                                 <Images imgSrc={review}/>
//                                 <p className='py-3 text-[#90A1B9] text-[15px] h-35'>A dedicated developer who pays great attention to detail. He understood our requirements perfectly and delivered the project on time without compromising on quality. Great experience!</p>
//                                 <div className="icon flex gap-x-2 text-[#FE9A00]">
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                 </div>
//                             </div>
//                             <div className="pt-5 text-center">
//                                 <Images imgSrc={r3} className={'h-20 w-20 rounded-full mx-auto'}/>
//                                 <h4 className='text-white font-medium text-[15px] pt-2'>Mesbaul Haque Rafi</h4>
//                                 <p className='text-[#90A1B9]'>CEO</p>
//                             </div>
//                         </div>
//                         <div className="px-3 outline-none">
//                             <div className="bg-[#0F172B] p-4 rounded-sm">
//                                 <Images imgSrc={review}/>
//                                 <p className='py-3 text-[#90A1B9] text-[15px] h-35'>He brings fresh ideas to the table. Beyond just writing code, he improved our user experience significantly. A proactive developer who actually cares about the product.</p>
//                                 <div className="icon flex gap-x-2 text-[#FE9A00]">
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                     <FaStar  />
//                                 </div>
//                             </div>
//                             <div className="pt-5 text-center">
//                                 <Images imgSrc={r4} className={'h-20 w-20 rounded-full mx-auto'}/>
//                                 <h4 className='text-white font-medium text-[15px] pt-2'>JH Jaber</h4>
//                                 <p className='text-[#90A1B9]'>CEO</p>
//                             </div>
//                         </div>
//                         </Slider>
//                     {/* </Flex> */}
//                 </div>
//             </Container>
//         </div>
//         </>
//     )
// }

// export default Reviews






import Container from '../Container';
import Images from '../Images';
import review from '../../assets/review.png';
import { FaStar } from 'react-icons/fa';
import r1 from '../../assets/r1.png';
import r2 from '../../assets/r2.png';
import r3 from '../../assets/r3.png';
import r4 from '../../assets/majhR-modified.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Reviews = () => {

    return (
        <>
        <div className="py-[95px] bg-[#1D293D] lg:w-full sm:w-full w-[395px]">
            <Container className={'w-full px-4 lg:w-[1140px] mx-auto'}>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>Client's Review</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6 lg:px-[300px]'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="mt-15">
                    <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                        <SwiperSlide>
                        <div className="px-3 outline-none">
                            <div className="bg-[#0F172B] p-4 rounded-sm">
                                <Images imgSrc={review}/>
                                <p className='py-3 text-[#90A1B9] text-[15px] h-35'>Exceptional skills in React and Tailwind! He built a fast and interactive interface for our platform. The code structure is clean, modern, and very easy to maintain.</p>
                                <div className="icon flex gap-x-2 text-[#FE9A00]">
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                </div>
                            </div>
                            <div className="pt-5 text-center">
                                <Images imgSrc={r1} className={'h-20 w-20 rounded-full mx-auto'}/>
                                <h4 className='text-white font-medium text-[15px] pt-2'>Shoumen Biswas Shomu</h4>
                                <p className='text-[#90A1B9]'>CEO</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="px-3 outline-none">
                            <div className="bg-[#0F172B] p-4 rounded-sm">
                                <Images imgSrc={review}/>
                                <p className='py-3 text-[#90A1B9] text-[15px] h-35'>Transforming our complex design into pixel-perfect code was impressive. The UI is smooth, responsive, and looks exactly how we envisioned. Highly recommended for front-end work.</p>
                                <div className="icon flex gap-x-2 text-[#FE9A00]">
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                </div>
                            </div>
                            <div className="pt-5 text-center">
                                <Images imgSrc={r2} className={'h-20 w-20 rounded-full mx-auto'}/>
                                <h4 className='text-white font-medium text-[15px] pt-2'>Nabil Muntasir</h4>
                                <p className='text-[#90A1B9]'>CEO</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="px-3 outline-none">
                            <div className="bg-[#0F172B] p-4 rounded-sm">
                                <Images imgSrc={review}/>
                                <p className='py-3 text-[#90A1B9] text-[15px] h-35'>A dedicated developer who pays great attention to detail. He understood our requirements perfectly and delivered the project on time without compromising on quality. Great experience!</p>
                                <div className="icon flex gap-x-2 text-[#FE9A00]">
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                </div>
                            </div>
                            <div className="pt-5 text-center">
                                <Images imgSrc={r3} className={'h-20 w-20 rounded-full mx-auto'}/>
                                <h4 className='text-white font-medium text-[15px] pt-2'>Mesbaul Haque Rafi</h4>
                                <p className='text-[#90A1B9]'>CEO</p>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="px-3 outline-none">
                            <div className="bg-[#0F172B] p-4 rounded-sm">
                                <Images imgSrc={review}/>
                                <p className='py-3 text-[#90A1B9] text-[15px] h-35'>He brings fresh ideas to the table. Beyond just writing code, he improved our user experience significantly. A proactive developer who actually cares about the product.</p>
                                <div className="icon flex gap-x-2 text-[#FE9A00]">
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                    <FaStar  />
                                </div>
                            </div>
                            <div className="pt-5 text-center">
                                <Images imgSrc={r4} className={'h-20 w-20 rounded-full mx-auto'}/>
                                <h4 className='text-white font-medium text-[15px] pt-2'>Majharul</h4>
                                <p className='text-[#90A1B9]'>CEO</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Reviews