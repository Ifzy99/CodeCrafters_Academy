
// import "../Home Pages/Styles/test.css";
// import { useEffect, useState } from 'react';
// import programmeService from '../../src/features/programmes/programmeService';

// const Test = () => {
//   const [programmes, setProgrammes] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await programmeService.getProgrammes();
//                 console.log('Fetched data:', data);
//                 setProgrammes(data);
//             } catch (error) {
//                 console.error('Error fetching programmes:', error);
//             }
//         };

//         fetchData();
//     }, []);
//   return (
//     <div>
//             {programmes.length > 0 ? (
//                 programmes.map((programme) => <p key={programme._id}>{programme.name}</p>)
//             ) : (
//                 <p>No programmes available</p>
//             )}
//         </div>
//   );
// }

// export default Test;