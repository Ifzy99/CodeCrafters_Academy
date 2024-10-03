import { useState, useEffect } from 'react';
import "../Navbar/navbar.css"
import { FaSignInAlt, FaBars, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        {
            name: 'Programmes',
            dropdownItems: [
                { name: 'Basic', link: '/programmes/basic' },
                { name: 'Masters', link: '/programmes/masters' },
                { name: 'Professional', link: '/programmes/professional' },
            ],
        },
        {
            name: 'Courses',
            link: '/courses',
        },
    ];
  
    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-left">
                <Link to="/" className="logo">CodeCrafters</Link>
            </div>
            <div className="navbar-center">
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className={item.dropdownItems ? 'dropdown' : ''}>
                            {item.dropdownItems ? (
                                <>
                                    <Link to={item.link} className="dropdown-toggle">
                                        {item.name} {!isMobile}
                                    </Link>
                                    <ul className={`dropdown-menu ${isMobile ? 'show' : ''}`}>
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}>
                                                <Link to={dropdownItem.link}>{dropdownItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link to={item.link}>{item.name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                {user ? (
                    <button className="icon-btn" data-tooltip="Logout" onClick={onLogout}><FaSignOutAlt /></button>
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
    )
}

export default Navbar