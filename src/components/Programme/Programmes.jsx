import { useDispatch, useSelector } from 'react-redux';
import { fetchProgrammes, reset } from '../../features/programmes/programmeSlice';
import { useEffect } from 'react';
import Spinner from '../Spinner';
import '../Programme/programme.css'
import LearnMore from '../HomeButton/LearnMore/LearnMore';





const Programmes = () => {
  

    const dispatch = useDispatch()
    const { programmes, isLoading, isSuccess,isError,message } = useSelector((state) => state.programmes);

    useEffect(() => {
        dispatch(fetchProgrammes());
    
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

      const programmesArray = Array.isArray(programmes) ? programmes : [];

  return (
    <>
    <div className="programmes-container">
    <h1 className="main-title">Start here. Change the world.</h1>
    <div className="programmes-grid">
        {programmesArray.length > 0 ? (
            programmesArray.map((programme) => (
                <div key={programme._id} className="programme-item">
                    <img src={programme.photo} alt={programme.name} className="programme-image" />
                    <div className="programme-content">
                        <h2 className="programme-title">{programme.name}</h2>
                        <p className="programme-description">{programme.description}</p>
                         <LearnMore href="">Learn More</LearnMore>
                    </div>
                </div>
            ))
        ) : (
            <p>No programmes available at the moment.</p>
        )}
    </div>
</div>
    </>
  )
}

export default Programmes