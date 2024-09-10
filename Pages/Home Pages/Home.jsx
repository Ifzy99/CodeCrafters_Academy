import Course from "../../src/components/Course/Course"
import Cta from "../../src/components/Cta/Cta"
import Footer from "../../src/components/Footer/Footer"
import Hero from "../../src/components/Hero/Hero"
import Navbar from "../../src/components/Navbar/Navbar"
import Programmes from "../../src/components/Programme/Programmes"
import Why from "../../src/components/Why/Why"


const Home = () => {
  return (
    <>
      <>
        <Navbar/>
        <div className="container">
         <Hero/>
         <Programmes/>
         <Course/>
         <Why/>
         </div>
         <Cta/>
         <Footer/>
      </>
    </>
  )
}

export default Home