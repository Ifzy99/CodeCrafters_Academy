import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset} from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {student} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <header className='header'>
       <div className='logo'>
         <Link to='/'>CodeCrafters Academy</Link>
       </div>
       <ul>
       {student ? (
         <li>
           <button onClick={onLogout}><FaSignOutAlt/> Logout</button>
         </li>
       ) : (
        <>
        <li>
        <Link to='/login'><FaSignInAlt/>
        Login</Link>
    </li>
    <li>
        <Link to='/register'><FaUser/>
        Register</Link>
    </li>
    </>
       )}
        
       </ul>
    </header>
  )
}

export default Header