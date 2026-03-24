import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Hireme = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/Section.png')] bg-center bg-cover bg-no-repeat lg:py-20 py-30 bg-black lg:bg-auto lg:w-full sm:w-full w-[395px]">
            <Container className={'w-[360px] lg:w-[1140px]'}>
                <div className="text-center mx-auto">
                    <h3 className='text-[24px] text-white font-semibold'>I Am Available For Freelancer Projects.</h3>
                    <p className='text-[#FFFFFF]/80 text-[15px] pt-6'>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                    <Button btnText={'Hire Me'} className={'mt-8'}/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Hireme