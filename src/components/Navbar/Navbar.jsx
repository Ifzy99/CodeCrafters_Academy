import "../Navbar/navbar.css"
import { FaSignInAlt, FaBars, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { logout, reset } from '../../features/auth/authSlice'


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [menuOpen, setMenuOpen] = useState(false)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
      }
    
      const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }
    
  return (
    <>
    <nav className="navbar" role="navigation">
    <div className="navbar-left">
      <Link to="/" className="logo">CodeCrafters</Link>
    </div>
    <div className="navbar-center">
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Programmes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className="navbar-right">
      {user ? (
        <button className="icon-btn"  data-tooltip="Logout" onClick={onLogout}><FaSignOutAlt /></button>
      ) : (
        <>
          <Link to='/login' className="icon-btn" data-tooltip="Login"><FaSignInAlt /></Link>
          <Link to='/register' className="icon-btn" data-tooltip="Register"><FaUser /></Link>
        </>
      )}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar