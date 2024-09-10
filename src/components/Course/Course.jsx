import "./course.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, reset } from '../../features/courses/courseSlice';
import Spinner from '../Spinner';
import { useEffect } from 'react';
import LearnMore from "../HomeButton/LearnMore/LearnMore";




const Course = () => {
  const dispatch = useDispatch()
  const { courses, isLoading, isSuccess,isError,message } = useSelector((state) => state.courses);

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

   // Manually select courses by indices (for example: courses[0], courses[2], etc.)
  const selectedCourses = [courses[0],courses[11], courses[7], courses[10],courses[1],];

  return (
    <>
    <div className="course-container">
      <h2 className="main-title">Our Top Courses</h2>
      <p className="sub-title">Take a look at some of our popular courses</p>
      <LearnMore href="">View all Courses</LearnMore>
      <div className="course-grid">
        {selectedCourses && selectedCourses.map((course) => (
          <div key={course?._id} className="course-card">
            <img src={course?.photo} alt={course?.title} className="course-image" />
            <div className="course-content">
              <h3 className="course-title">{course?.title}</h3>
              <p className="course-description">{course?.description}</p>
              <LearnMore href="">Learn More</LearnMore>
            </div>
          </div>
        ))}
      </div>
    </div>
     
    </>
  )
}

export default Course