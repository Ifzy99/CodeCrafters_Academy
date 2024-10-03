import "./footer.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src="/logo.png" alt="Logo" className="footer-logo-img" />
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>CodeCrafters</h3>
          <div className="social-icons">
          <a href="#facebook"><FaFacebookF /></a>
          <a href="#instagram"><FaInstagram /></a>
          <a href="#linkedin"><FaLinkedinIn /></a>
          <a href="#youtube"><FaYoutube /></a>
          <a href="#twitter"><FaTwitter /></a>
        </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/register">Application Portal</a></li>
            <li><a href="/login">Student Portal</a></li>
            <li><a href="">Professional Degree</a></li>
            <li><a href="">Basic Degree</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#refund">Refund Policy</a></li>
            <li><a href="#faq">FAQ's</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-container">
      <p> Copyright &copy; 2024 | CodeCrafters Academy</p>
      <a href="#top" className="back-to-top">Back to top ↑</a>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer