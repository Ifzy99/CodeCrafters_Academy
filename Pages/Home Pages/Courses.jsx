import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, reset } from '../../src/features/courses/courseSlice';
import { useEffect, useState } from 'react';
import Spinner from '../../src/components/Spinner';
import "../../src/components/Course/course.css"
import Navbar from '../../src/components/Navbar/Navbar';
import Footer from '../../src/components/Footer/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';





const Courses = () => {
   const dispatch = useDispatch();
   const { courses, isLoading, isSuccess,isError,message } = useSelector((state) => state.courses);
   const [displayCount, setDisplayCount] = useState(6);
   const initialDisplayCount = 6;

   useEffect(() => {
    dispatch(fetchCourses());

    return () => {
        if(isSuccess){
            dispatch(reset());
        }
    };
  }, [dispatch, isSuccess]);
 
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>{message}</p>;
  }

  const handleViewMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 6, courses.length));
  };

  const handleViewLess = () => {
    setDisplayCount(prevCount => Math.max(prevCount - 6, initialDisplayCount));
  };

  return (
    <>
     <Navbar/>
     <div className="courses-container">
     <div className="courses-header">
     <div className="courses-header-content">
     <h1 className="courses-main-heading">Our Courses</h1>
     <p className="courses-description">Explore our wide range of courses designed to help you achieve your goals.</p>
     </div>
     </div>
     <div className="course-grid">
     {courses && courses.slice(0, displayCount).map((course) => (
       <div key={course?._id} className="course-card">
         <img src={course?.photo} alt={course?.title} className="course-image" />
         <div className="course-content">
           <h3 className="course-title">{course?.title}</h3>
           <p className="course-description">{course?.description}</p>
           <div className="course-details">
              <p className="course-duration">
                <span className="detail-label">Duration:</span> {course?.duration || 'N/A'}
              </p>
              <p className="course-tuition">
                  <span className="detail-label">Tuition:</span> ₦{course?.tuition?.toLocaleString() || 'N/A'}
              </p>
              <p className="course-scholarship">
                  <span className="detail-label">Scholarship:</span> 
                  {course?.scholarshipAvailable ? 'Available' : 'Not Available'}
               </p>
           </div>
         </div>
       </div>
     ))}
     <div className="course-navigation">
        {courses && displayCount < courses.length && (
          <button onClick={handleViewMore} className="view-button">View More
           <span> <FaArrowRight/></span>
          </button>
        )}
        {displayCount > initialDisplayCount && (
          <button onClick={handleViewLess} className="view-button view-less">View Less
           <span> <FaArrowLeft/></span>
          </button>
        )}
      </div>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default Courses