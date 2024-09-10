import "../Hero/hero.css"
import Button from "../HomeButton/EnrollButton/EnrollBtn"

const Hero = () => {
  return (
    <>
    <div className="hero-section">
    <div className="hero-content">
        <h1>BOOST YOUR DIGITAL EDUCATION ONLINE</h1>
        <p>Unleash your full potential at CodeCrafters Academy. Master the latest tech skills and lead the way.</p>
        <div className="hero-buttons">
            <a href="/register">
              <Button/>
            </a>
        </div>
    </div>
    <div className="hero-image">
        <img src="/heroImg.webp" alt="Hero Image"/>
    </div>
</div>      

<div className="stats-section">
    <div className="stat">
        <h2>30+</h2>
        <p>Expert Mentors</p>
    </div>
    <div className="stat">
        <h2>200k+</h2>
        <p>Students Globally</p>
    </div>
    <div className="stat">
        <h2>500+</h2>
        <p>Total Courses</p>
    </div>
</div>



    </>
  )
}

export default Hero