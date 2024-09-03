import axios from 'axios';

const API_URL = '/api/programmes/';

// Fetch Programmes
const getProgrammes = async () => {
//   const config = {
//     headers: {
//         'Authorization': `Bearer ${token}`,
//     }
//   }
  const response = await axios.get(API_URL);
  console.log(response.data)
  return response.data;
};

const programmeService = {
  getProgrammes,
};

export default programmeService;
