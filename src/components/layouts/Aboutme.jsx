import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import about from '../../assets/about.png'
import Button from '../Button'

const Aboutme = () => {
    return (
        <>
        <div className="py-[95px] bg-[#1D293D] lg:w-full sm:w-full w-[395px]" id="about">
            <Container className={'w-[360px] lg:w-[1140px]'}>
                <div className={'lg:flex lg:justify-between lg:gap-x-15'}>
                    <div className="left lg:w-[40%]">
                        <Images imgSrc={about} className={'w-full'}/>
                    </div>
                    <div className="right lg:w-[60%] lg:pt-[120px]">
                        <h3 className='font-semibold text-[20px] lg:text-[24px] text-white'>I'm a Passionate Web Designer</h3>
                        <p className='text-[#90A1B9] text-[15px] py-6'>Obviously I'm a Web Designer. Web Developer with over 1 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className='text-[#90A1B9] text-[15px] pb-8'>I am a passionate developer focused on crafting clean, user-friendly, and responsive interfaces using React & Tailwind CSS.</p>
                        <Button btnText={'See Work'}/>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Aboutme