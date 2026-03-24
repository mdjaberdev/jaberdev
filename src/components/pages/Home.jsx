import Banner from "../layouts/Banner"
import Aboutme from "../layouts/Aboutme"
import Hobbies from "../layouts/Hobbies"
import Services from "../layouts/Services"
// import Hireme from "../layouts/Hireme"
import Projects from "../layouts/Projects"
import Reviews from "../layouts/Reviews"
import Contact from "../layouts/Contact"



const Home = () => {
    return (
        <>
        <Banner/>
        <Aboutme/>
        <Hobbies/>
        <Services/>
        {/* <Hireme/> */}
        <Projects/>
        <Reviews/>
        <Contact/>
        </>
    )
}

export default Home