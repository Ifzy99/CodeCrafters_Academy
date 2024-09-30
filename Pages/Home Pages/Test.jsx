
import { useEffect, useRef, useState } from "react";
import "../Home Pages/Styles/test.css";
import { FaHome, FaUser, FaEnvelope, FaCloudUploadAlt, FaFileAlt, FaSignOutAlt, FaCheckCircle, FaPercentage, FaPrint, FaFileDownload, FaBars } from 'react-icons/fa';


const Test = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
          setIsSidebarOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isSidebarOpen]);
  return (
  <>
  <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <aside ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <div className="sidebar-logo">
      <img src="/logo.png" alt="CodeCrafters Logo" className="logo-img" />
      <h2>CodeCrafters Admission Portal</h2>
    </div>
    <nav className="sidebar-menu">
      <a href="#" className="active"><FaHome /> Dashboard</a>
      <a href="#"><FaFileAlt /> Pick Course</a>
      <a href="#"><FaUser /> Personal Information</a>
      <a href="#"><FaCheckCircle /> Education</a>
      <a href="#"><FaEnvelope /> Referees</a>
      <a href="#"><FaCloudUploadAlt /> Credential Uploads</a>
      <a href="#"><FaFileAlt /> Payment</a>
      <a href="#"><FaFileAlt /> Entrance Exam</a>
      <a href="#"><FaCheckCircle /> JAMB</a>
      <a href="#"><FaSignOutAlt /> Logout</a>
    </nav>
  </aside>

  <main className="main-content">
  <header className="top-navbar">
  <button className="menu-toggle" onClick={toggleSidebar}>
    <FaBars />
  </button>
  <h1>Dashboard</h1>
  <div className="profile-info">
    <span className="profile-name">Jane Doe</span>
    <span className="profile-id">17349</span>
  </div>
</header>

    <div className="dashboard-welcome">
      <div className="welcome-text">
        <p className="date">September 11, 2024</p>
        <h2>Welcome, Jane</h2>
        <p>Always stay updated in your Admission Portal</p>
        <p className="status">Admission Status: <span>No Admission Yet</span></p>
      </div>
      <div className="welcome-image">
        <img src="/api/placeholder/300/200" alt="Books" />
      </div>
    </div>

    <section className="application-details">
      <h2>Application Details</h2>
      <div className="details-grid">
        <div className="applicant-info">
          <div className="profile-icon">
            <FaUser />
          </div>
          <div>
            <h3>Doe Jane</h3>
            <p>ADMISSION ID: 17349</p>
          </div>
        </div>


        <div className="entrance-exam">
          <div className="exam-icon">
            <FaCheckCircle />
          </div>
          <div>
            <h3>0</h3>
            <p>Entrance Exam Score</p>
          </div>
        </div>
      </div>
    </section>

    <section className="actions">
      <button className="action-button"><FaPrint /> Print Application Details</button>
      <button className="action-button"><FaFileDownload /> Download Application Details</button>
    </section>
  </main>
</div>
  </>
  );
}

export default Test;