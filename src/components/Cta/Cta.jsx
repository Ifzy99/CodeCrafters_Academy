import Button from "../HomeButton/EnrollButton/EnrollBtn"
import "./cta.css"

const Cta = () => {
  return (
    <>
    <div className="cta-container">
      <div className="container">
        <div className="cta-content">
        <p className="cta-subtitle">IT'S TIME FOR YOU TO TAKE YOUR TECH CAREER TO THE NEXT LEVEL</p>
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-description">
            We provide and lead others in quality education, service, industry, and
            character as well as discipline.
        </p>
        <Button>Join Us Today</Button>
        </div>
        </div>
  </div>
    </>
  )
}

export default Cta