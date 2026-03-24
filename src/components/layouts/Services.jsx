import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiAirplayBold } from 'react-icons/pi'
import { RiCameraLensLine } from 'react-icons/ri'
import { CiCamera, CiSettings } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'
import { LuCompass } from 'react-icons/lu'
import { FiWatch } from 'react-icons/fi'

const Services = () => {
    return (
        <>
        <div className="py-[95px] bg-[#1D293D] lg:w-full sm:w-full w-[395px]" id="services">
            <Container className={'w-[360px] lg:w-[1140px]'}>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>What do i offer?</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="pt-15">
                    <div className={'lg:flex lg:justify-between lg:gap-x-7.5'}>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <PiAirplayBold className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>UX / UI Design</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <RiCameraLensLine  className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>Ios App Designer</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <CiCamera  className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>Photography</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-7.5">
                    <div className={'lg:flex lg:justify-between lg:gap-x-7.5'}>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <LuCompass  className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>Graphic Designer</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <CiSettings   className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>Web Security</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                        <div className="rounded-2xl px-6 py-10 bg-[#0F172B] hover:shadow-lg hover:shadow-gray-700 duration-300 mb-7.5 lg:mb-0">
                            <FiWatch   className='text-[#FE9A00] text-[40px]'/>
                            <h4 className='font-medium text-white text-[17px] pt-7'>24 / 7</h4>
                            <p className='text-[15px] text-[#90A1B9] py-3'>The phrasal sequence of the is now sothat many campaign and benefit</p>
                            <button className='text-[15px] flex items-center text-white cursor-pointer gap-x-2'>Read More <FaArrowRight/></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Services