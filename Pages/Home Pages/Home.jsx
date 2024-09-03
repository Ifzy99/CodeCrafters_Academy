import Hero from "../../src/components/Hero/Hero"
import Navbar from "../../src/components/Navbar/Navbar"
import Programmes from "../../src/components/Programme/Programmes"


const Home = () => {
  return (
    <>
      <>
        <Navbar/>
        <div className="container">
         <Hero/>
         <Programmes/>
        </div>
      </>
    </>
  )
}

export default Home