import "./footer.css"


const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <div className="logo-grid">
          <div className="logo-square"></div>
          <div className="logo-diamond"></div>
          <div className="logo-square"></div>
          <div className="logo-diamond"></div>
          <div className="logo-diamond"></div>
          <div className="logo-diamond"></div>
          <div className="logo-square"></div>
          <div className="logo-diamond"></div>
          <div className="logo-square"></div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>ClosetNow</h3>
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
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; Copyright ClosetNow</p>
      <a href="#terms">Terms of Service</a>
      <a href="#top" className="back-to-top">Back to top ↑</a>
    </div>
  </footer>
    </>
  )
}

export default Footer