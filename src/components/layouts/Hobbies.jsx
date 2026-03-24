import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Monitor } from 'lucide-react'
import { FaRegStopCircle } from 'react-icons/fa'
import { BsCameraVideo } from 'react-icons/bs'
import { FiActivity, FiCoffee } from 'react-icons/fi'
import { PiMusicNotesSimpleBold, PiPenNibStraightBold, PiWatchBold } from 'react-icons/pi'
import { LiaCubeSolid } from 'react-icons/lia'
import { LuBook, LuTarget } from 'react-icons/lu'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

const Hobbies = () => {
    return (
        <>
        <div className="py-[95px] bg-[#0F172B] lg:w-full sm:w-full w-[395px]">
            <Container className={'w-[360px] lg:w-[1140px]'}>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>Hobbies & Expertise</h3>
                    <p className='text-[#90A1B9] text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div>
                <div className="pt-[60px]">
                    <div className={'lg:flex lg:justify-between lg:gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <Monitor className='-rotate-45'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Developing</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <FaRegStopCircle className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Mac OS</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <BsCameraVideo className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Cinema</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <FiCoffee className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Coffee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-7.5">
                    <div className={'lg:flex lg:justify-between lg:gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <PiMusicNotesSimpleBold className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Music</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <PiWatchBold className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Games</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <LiaCubeSolid className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Designing</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <LuTarget className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Sports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-7.5">
                    <div className={'lg:flex lg:justify-between lg:gap-x-7.5'}>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <PiPenNibStraightBold className='rotate-90 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px] '>Painting</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <LuBook  className='-rotate-45 text-[20px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Reading</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <MdOutlinePhoneAndroid  className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Android</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pr-3 pl-3 lg:w-[280px] mb-5 lg:mb-0 bg-transparent rounded-lg border border-slate-800 group duration-300 shadow-newMade hover:shadow-gray-700">
                            <div className="flex gap-x-5 items-center">
                                <div className="h-10 w-10 p-2 rounded-xl rotate-45 bg-[#FE9A00]/10 text-[#FE9A00] group-hover:bg-[#FE9A00] group-hover:text-white duration-300 flex justify-center items-center">
                                    <FiActivity className='-rotate-45 text-[25px]'/>
                                </div>
                                <div className="">
                                    <p className='text-white font-medium text-[17px]'>Other Activity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Hobbies