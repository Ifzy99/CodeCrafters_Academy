import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProgrammes, reset } from '../../../src/features/programmes/programmeSlice';
import { fetchCourses } from '../../../src/features/courses/courseSlice';
import Spinner from '../../../src/components/Spinner';
import "../Styles/programmes.css"
import Navbar from '../../../src/components/Navbar/Navbar';
import Footer from '../../../src/components/Footer/Footer';
import Button from '../../../src/components/HomeButton/EnrollButton/EnrollBtn';

const ProfessionalProg = () => {
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

 
      const singleProgramme = programmes.length > 1 ? programmes[1] : null;

      if (!singleProgramme) {
        return <p>No programme available</p>;
      }
      const selectedCourses = [courses[2], courses[3], courses[11], courses[7], courses[10]];

  return (
    <>
    <Navbar/>
    <div className="prog">
    <div className="pHeader" style={{backgroundImage: `url(${singleProgramme.photo || "/api/placeholder/1200/600"})`}}>
      <div className="overlay"></div>
      <div className="pHeader-content">
        <h1>{singleProgramme.name || "Professional Degree Programme"}</h1>
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
        <p>{singleProgramme.description}</p>
        <p>
          At CodeCrafters, we offer a wide range of professional programmes cutting across Software
          Engineering, Data science, Network and Security among others. These courses have
          been tailored to suit everyone and to equip the student with requisite knowledge and industry-related practical
          experience.
        </p>
        <p>
          It is guaranteed that when a student completes any of our professional certificate courses, the student can
          confidently fit into his or her chosen field in the industry and excel. Our curriculum is ever flexible to
          accommodate new trends and technology and all our instructors are well equipped to deliver qualitative
          training to every student.
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
  );
};

export default ProfessionalProg;