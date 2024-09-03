import { useDispatch, useSelector } from 'react-redux';
import { fetchProgrammes, reset } from '../../features/programmes/programmeSlice';
import { useEffect } from 'react';
import Spinner from '../Spinner';
import '../Programme/programme.css'




const Programmes = () => {
    const dispatch = useDispatch()
    const { programmes, isLoading, isSuccess } = useSelector((state) => state.programmes);

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
    
    //   if (isError) {
    //     return <p>{message}</p>;
    //   }
  return (
    <>
   
    </>
  )
}

export default Programmes