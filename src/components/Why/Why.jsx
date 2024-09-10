import "./why.css"
import { FaCalendarAlt, FaBriefcase, FaChalkboardTeacher, FaCertificate, FaUserTie } from 'react-icons/fa';


const Why = () => {
  return (
    <>
    <div className="why-container">
    <h1 className="why-title">Why choose our school?</h1>
    <p className="why-subtitle">Guaranteed results for the current period of time - even without initial knowledge!</p>
    
    <div className="why-grid">
      <div className="why-item convenient">
       <FaCalendarAlt className="icon" />
        <h2>Convenient class schedule</h2>
        <p>We select a convenient day and time and a place to study</p>
      </div>
      
      <div className="why-item project">
        <FaBriefcase className="icon" />
        <h2>Project Based Curriculum</h2>
        <p>Our courses are practical, hands-on learning. Practice and apply knowledge with real world projects that contribute largely to your portfolio.</p>
      </div>
      
      <div className="why-item trainers">
      <FaChalkboardTeacher className="icon" />
        <h2>Expert Instructors</h2>
        <p>Our instructors are specialists with over 10 years of training experience.</p>
      </div>
      
      <div className="why-item project">
      <FaCertificate className="icon" />
         <h2>Certification</h2>
        <p>Be certified by an accredited and globally recognized institution.</p>
      </div>
      
      <div className="why-item job">
      <FaUserTie className="icon" />
        <h2>Job Opportunity</h2>
        <p>85% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default Why