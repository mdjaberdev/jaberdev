import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import bannerImg from '../../assets/bannerImg.png'
import Button from "../Button"
import { Typewriter } from "react-simple-typewriter"
import { HashLink } from "react-router-hash-link"


const Banner = () => {
    return (
        <>
        <div id="banner" className="bg-[#0F172B] sm:w-full lg:relative lg:w-full w-[395px]">
            <div className="absolute lg:inset-0 bg-[#FE9A00]/5 opacity-50"></div>
            <Container className={'w-[360px] lg:w-[1140px] lg:relative lg:z-10'}>
                <div className='lg:grid lg:grid-cols-2 lg:justify-between lg:pt-10'>
                    <div className="leftSide pt-10 lg:pt-55">
                        <h2 className="font-bold text-[40px] text-white pb-0.5">Hey! I'm </h2>
                        <h1 className="text-[#FE9A00] font-bold text-[32px] lg:text-[40px]">
                            <Typewriter
                                words={['Front-End Developer', 'Md Jaber Hossain']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        {/* <h3 className="">Front-End Web Developer</h3> */}
                        <p className="lg:text-[15px] text-2xl text-[#90A1B9] py-[15px]">A passionate Front-End Developer from Bangladesh . Always curious to learn, explore, and collaborate.</p>
                        <HashLink smooth to="#contact">
                            <Button btnText={'Hire Me'}/>
                        </HashLink>
                        <Button btnText={'Download CV'} className={'ml-2 mt-4 lg:mt-0'}/>
                    </div>
                    <div className="rightSide">
                        <Images imgSrc={bannerImg}/>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner

