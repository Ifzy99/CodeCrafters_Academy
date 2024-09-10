import axios from 'axios';

const API_URL = '/api/courses/';


// Fetch Programmes
const getCourses = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data;
  };
  
  const courseService = {
    getCourses,
  };

  export default courseService;
  