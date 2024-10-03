import Navbar from "../../../src/components/Navbar/Navbar"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProgrammes, reset } from '../../../src/features/programmes/programmeSlice';
import { fetchCourses } from '../../../src/features/courses/courseSlice';
import Spinner from '../../../src/components/Spinner';
import "../Styles/programmes.css"
import Button from '../../../src/components/HomeButton/EnrollButton/EnrollBtn';
import Footer from "../../../src/components/Footer/Footer";



const MastersProg = () => {
    const dispatch = useDispatch()
    const { programmes, isLoading, isSuccess,isError,message } = useSelector((state) => state.programmes);
    const { courses} = useSelector((state) => state.courses);


    useEffect(() => {
        dispatch(fetchProgrammes());
        dispatch(fetchCourses());

    
        return () => {
            if(isSuccess){
                dispatch(reset());
            }
        };
      }, [dispatch, isSuccess]);
     
      if (isLoading) {
        return<Spinner/>;
      }
    
      if (isError) {
        return <p>{message}</p>;
      }

 
      const singleProgramme = programmes.length > 1 ? programmes[0] : null;

      if (!singleProgramme) {
        return <p>No programme available</p>;
      }
      const selectedCourses = [courses[6], courses[9], courses[8], courses[0]];
  return (
    <>
    <Navbar/>
    <div className="prog">
    <div className="pHeader" style={{backgroundImage: `url(${singleProgramme.photo || "/api/placeholder/1200/600"})`}}>
      <div className="overlay"></div>
      <div className="pHeader-content">
        <h1>{singleProgramme.name || "Masters Degree Programme"}</h1>
        <p>Advance your Career with dynamic professional courses from CodeCrafters</p>
        <a href="/register">
        <Button>Apply Now!</Button>
        </a>
      </div>
    </div>
    <div className="info-section">
      <div className="logo-container">
        <img src="/logo.png" alt="CodeCrafters logo" className="logo" />
      </div>
      <div className="info-text">
        <p>
          {singleProgramme.description}
          <span>. Whether you're aiming for leadership roles, specialization in cutting-edge technologies, or transitioning into new tech domains, this program offers the perfect blend of theory and practical experience to accelerate your career growth.</span>
        </p>
        <p>
        With expert faculty, real-world case studies, and state-of-the-art resources, you'll dive deep into emerging trends like artificial intelligence, machine learning, blockchain, cybersecurity, and more. The program emphasizes not just technical proficiency but also strategic thinking and innovation, ensuring you have the expertise to solve complex problems, lead diverse teams, and drive technological advancement within your organization or entrepreneurial ventures.
        </p>
        <p>Upon completion, you will not only gain a prestigious qualification but also be empowered to confidently pursue roles as a thought leader and innovator in your chosen field. This is more than just a degree—it’s your pathway to mastering technology and making an impact in the global tech ecosystem.
        </p>
      </div>
    </div>
    <div className="course-list">
       <h2 className="courses-title">Courses</h2>
    </div>
    <div className="course-grid">
       {selectedCourses && selectedCourses.map((course) => (
         <div key={course?._id} className="course-card">
           <img src={course?.photo} alt={course?.title} className="course-image" />
           <div className="course-content">
             <h3 className="course-title">{course?.title}</h3>
             <p className="course-description">{course?.description}</p>
           </div>
         </div>
       ))}
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default MastersProg