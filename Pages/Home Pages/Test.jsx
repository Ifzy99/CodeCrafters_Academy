
import "../Home Pages/Styles/test.css";

const Test = () => {
  return (
    <div className="regContainer">
      <div className="registerTxt-section">
        <div className="registerTxt-content">
          <img src="logo.png" alt="Logo" className="logo"/>
          <h1>Welcome to CodeCrafters Admission Portal</h1>
        </div>
      </div>
      <div className="form-section">
        <div className="form-header">
          <img src="logo.png" alt="SCICT" className="mobile-logo" />
          <div>
            <h2>CodeCrafters</h2>
            <p>Admission Portal</p>
          </div>
        </div>
        <h1>Create account for admission</h1>
        <p className="subtitle">Kindly fill up your details to start admission process.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="+2348000000000" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input type="password" id="password" name="password" placeholder="Password" />
              <span className="password-toggle">👁️</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm password">Confirm Password</label>
            <div className="password-input">
              <input type="password" id="password2" name="password2" placeholder="Confirm Password" />
              <span className="password-toggle">👁️</span>
            </div>
          </div>

          <button type="submit" className="btn">Proceed →</button>
        </form>
        <p className="sign-in-link">Sign in instead</p>
      </div>
    </div>
  );
}

export default Test;