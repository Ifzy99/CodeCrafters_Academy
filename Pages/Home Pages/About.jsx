
import Footer from "../../src/components/Footer/Footer";
import Navbar from "../../src/components/Navbar/Navbar";
import "./Styles/about.css"

const About = () => {
  return (
    <section className="about-section">
    <Navbar />
      <div className="about-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="mission-vision">
          <h3>Our Mission</h3>
          <p>Making Africa a Tech Continent</p>
          <h3>Our Vision</h3>
          <p>Making Africa a Tech Continent</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            CodeCrafters Academy is filled with people who are creative, passionate, 
            experienced and have the thriving love of community building, technology, 
            learning and the desire to better themselves.
          </p>
          <p>
            Codecrafters is a Registered Training Institution, delivering 
            nationally accredited training and hands-on education in areas of Software 
            Architecture, Robotics Engineering, and 3D Animation & VFX.
          </p>
          {/* Add more paragraphs as necessary */}
        </div>
        <div className="about-message">
          <h4>Non-discrimination Statement</h4>
          <p>
            In keeping with its long-standing traditions and policies, CodeCrafters considers students, 
            employees, applicants for admission or employment, and those seeking access to College programs 
            on the basis of individual merit.
          </p>
          {/* Add more as per your need */}
        </div>
      </div>

      {/* Add the Core Values Section */}
      <div className="core-values-section">
        <div className="core-values-container">
          <div className="core-values-header">
            <h5 className="core-values-title">OUR CORE VALUES</h5>
          </div>
          <div className="core-values-body">
            <div className="core-value">
              <h6>DISCIPLINE</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="core-value">
              <h6>INTEGRITY</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="core-value">
              <h6>EXCELLENCE</h6>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add the Watchword Section */}
      <div className="watchword">
        <h4 className="watchword-text">
          Delivering practical technological knowledge and building a sustainable character from Africa to the world
        </h4>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
