import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProgrammes, reset } from '../../../src/features/programmes/programmeSlice';
import { fetchCourses } from '../../../src/features/courses/courseSlice';
import Spinner from '../../../src/components/Spinner';
import "../Styles/programmes.css"
import Navbar from '../../../src/components/Navbar/Navbar';
import Button from '../../../src/components/HomeButton/EnrollButton/EnrollBtn';
import Footer from '../../../src/components/Footer/Footer';


const BasicProg = () => {
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

 
      const singleProgramme = programmes.length > 1 ? programmes[2] : null;

      if (!singleProgramme) {
        return <p>No programme available</p>;
      }
      const selectedCourses = [courses[4], courses[5], courses[1]];
  return (
    <>
    <Navbar/>
    <div className="prog">
    <di v className="pHeader" style={{backgroundImage: `url(${singleProgramme.photo || "/api/placeholder/1200/600"})`}}>
      <div className="overlay"></div>
      <div className="pHeader-content">
        <h1>{singleProgramme.name || " Basic Degree Programme"}</h1>
        <p>Your tech career begins here.</p>
        <a href="/register">
        <Button>Apply Now!</Button>
        </a>
      </div>
    </di>
    <div className="info-section">
      <div className="logo-container">
        <img src="/logo.png" alt="CodeCrafters logo" className="logo" />
      </div>
      <div className="info-text">
        <p>
          {singleProgramme.description}
          <span>. Designed with an in-depth curriculum, the program equips students with foundational knowledge and practical skills across various disciplines. Whether you're interested in software development, web design, data science, or management and business studies, this program provides a strong foundation.</span>
        </p>
        <p>
        Through hands-on projects, industry-aligned courses, and personalized mentorship, students are guided to develop critical thinking, problem-solving abilities, and technical proficiency. Our aim is to prepare graduates not only to meet the current demands of the workforce but also to excel in a rapidly evolving global job market. By the end of the program, students will be equipped with the tools and confidence to pursue specialized careers in their chosen field, contributing meaningfully to the industry of their choice.
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

export default BasicProg